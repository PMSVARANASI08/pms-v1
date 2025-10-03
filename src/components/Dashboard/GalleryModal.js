import { FaTimes, FaUpload, FaEdit } from "react-icons/fa";

export default function GalleryModal({
  show,
  editingItem,
  title,
  description,
  preview,
  loading,
  onClose,
  onChangeTitle,
  onChangeDescription,
  onFileChange,
  onSave,
}) {
  if (!show) return null;

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{editingItem ? "Edit Image" : "Upload New Image"}</h5>
            <button type="button" className="btn btn-light" onClick={onClose}>
              <FaTimes />
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => onChangeTitle(e.target.value)}
                className="form-control"
                placeholder="Enter image title"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                value={description}
                onChange={(e) => onChangeDescription(e.target.value)}
                className="form-control"
                rows="3"
                placeholder="Enter image description"
              />
            </div>
            {!editingItem && (
              <div className="mb-3">
                <label className="form-label">Choose Image</label>
                <input type="file" accept="image/*" onChange={onFileChange} className="form-control" />
                {preview && (
                  <div className="mt-2 text-center">
                    <img
                      src={preview}
                      alt="Preview"
                      className="img-fluid rounded shadow-sm"
                      style={{ maxHeight: "250px", objectFit: "cover" }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose} disabled={loading}>
              Cancel
            </button>
            <button
              className={`btn ${editingItem ? "btn-success" : "btn-primary"} d-flex align-items-center gap-2`}
              onClick={onSave}
              disabled={loading}
            >
              {loading ? "Processing..." : editingItem ? <><FaEdit /> Save</> : <><FaUpload /> Upload</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
