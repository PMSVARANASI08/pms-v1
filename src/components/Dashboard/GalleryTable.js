import { FaEdit, FaTrash } from "react-icons/fa";

export default function GalleryTable({ gallery, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-primary text-white d-flex align-items-center gap-2">
        <h5 className="mb-0">Gallery Items</h5>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {gallery.length > 0 ? (
                gallery.map((item, idx) => (
                  <tr key={item.id}>
                    <td>{idx + 1}</td>
                    <td>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="rounded shadow-sm"
                        style={{
                          width: "100px",
                          height: "70px",
                          objectFit: "cover",
                          border: "1px solid #eee",
                        }}
                      />
                    </td>
                    <td className="fw-semibold">{item.title}</td>
                    <td style={{ maxWidth: "300px" }}>
                      <small className="text-muted d-block">
                        {item.description.length > 80
                          ? item.description.slice(0, 80) + "..."
                          : item.description}
                      </small>
                    </td>
                    <td className="text-center">
                      
 <div className="d-flex justify-content-end gap-2">
  <button
    className="btn btn-sm btn-outline-warning d-flex align-items-center gap-1"
    onClick={() => onEdit(item)}
  >
    <FaEdit /> Edit
  </button>
  <button
    className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1"
    onClick={() => onDelete(item)}
  >
    <FaTrash /> Delete
  </button>
</div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-muted">
                    No images uploaded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
