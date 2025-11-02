// utils/confirmToast.js
import { toast } from "react-toastify";

export const confirmToast = ({ message, onConfirm, onCancel }) => {
  const handleConfirm = () => {
    onConfirm();
    toast.dismiss(confirmToastId);
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    toast.dismiss(confirmToastId);
  };

  const confirmToastId = toast(
    <div>
      <p className="mb-3">{message}</p>
      <div className="d-flex gap-2 justify-content-end">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button className="btn btn-sm btn-danger" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>,
    {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      hideProgressBar: true,
      closeButton: false,
      style: { width: "100%", maxWidth: "400px" },
    }
  );
};