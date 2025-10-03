export default function ToastMessage({ toast, onClose }) {
  if (!toast.show) return null;

  return (
    <div
      className={`toast align-items-center text-bg-${toast.type === "success" ? "success" : "danger"}
        border-0 position-fixed bottom-0 end-0 m-3 show`}
      role="alert"
    >
      <div className="d-flex">
        <div className="toast-body">{toast.message}</div>
        <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={onClose}></button>
      </div>
    </div>
  );
}
