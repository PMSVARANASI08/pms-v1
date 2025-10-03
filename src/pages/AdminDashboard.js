import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Container } from "react-bootstrap";
import { FaSignOutAlt, FaUpload, FaImages } from "react-icons/fa";
import GalleryTable from "../components/Dashboard/GalleryTable";
import GalleryModal from "../components/Dashboard/GalleryModal";
import ToastMessage from "../components/ToastMessage";

export default function AdminDashboard() {
  const { currentUser, logout } = useAuth();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const CLOUD_NAME = "df62tqu82";
  const CLOUD_UPLOAD_PRESET = "my_unsigned_preset";

  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setGallery(items);
    });
    return () => unsubscribe();
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(selectedFile ? URL.createObjectURL(selectedFile) : null);
  };

  const handleUpload = async () => {
    if (!file || !title.trim() || !description.trim()) {
      showToast("Please fill out all fields and select an image.", "danger");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUD_UPLOAD_PRESET);
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      await addDoc(collection(db, "gallery"), {
        title,
        description,
        imageUrl: data.secure_url,
        public_id: data.public_id,
        createdAt: new Date(),
      });
      showToast("Image uploaded successfully!", "success");
      resetForm();
    } catch {
      showToast("Upload failed.", "danger");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      await fetch("/api/delete-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ public_id: item.public_id }),
      });
      await deleteDoc(doc(db, "gallery", item.id));
      showToast("Image deleted successfully!", "success");
    } catch {
      showToast("Failed to delete image.", "danger");
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setTitle(item.title);
    setDescription(item.description);
    setShowModal(true);
  };

  const saveEdit = async () => {
    if (!title.trim() || !description.trim()) {
      showToast("Please fill out title and description.", "danger");
      return;
    }
    try {
      await updateDoc(doc(db, "gallery", editingItem.id), { title, description });
      showToast("Image updated successfully!", "success");
      resetForm();
    } catch {
      showToast("Failed to update image.", "danger");
    }
  };

  const resetForm = () => {
    setFile(null);
    setPreview(null);
    setTitle("");
    setDescription("");
    setEditingItem(null);
    setShowModal(false);
  };

  return (
    <Container className="my-4 position-relative">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <h2 className="mb-2 d-flex align-items-center gap-2">
          <FaImages className="me-2 text-primary" /> Admin Dashboard
        </h2>
        <button onClick={logout} className="btn btn-danger d-flex align-items-center gap-2 mb-2">
          <FaSignOutAlt /> Logout
        </button>
      </div>
      <p>Welcome, {currentUser?.email}</p>

      {/* Floating Upload Button */}
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary d-flex align-items-center gap-2 position-fixed"
        style={{
          bottom: "30px",
          right: "30px",
          zIndex: 9999,
          padding: "0.75rem 1.25rem",
          borderRadius: "50px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        }}
      >
        <FaUpload /> Upload Image
      </button>

      <GalleryTable gallery={gallery} onEdit={handleEdit} onDelete={handleDelete} />

      <GalleryModal
        show={showModal}
        editingItem={editingItem}
        title={title}
        description={description}
        preview={preview}
        loading={loading}
        onClose={resetForm}
        onChangeTitle={setTitle}
        onChangeDescription={setDescription}
        onFileChange={handleFileChange}
        onSave={editingItem ? saveEdit : handleUpload}
      />

      <ToastMessage toast={toast} onClose={() => setToast({ show: false, message: "", type: "" })} />
    </Container>
  );
}
