import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const notificationStyling = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const notify = (type = "info", msg) => {
  switch (type) {
    case "success":
      toast.success(msg, notificationStyling);
      break;
    case "error":
      toast.error(msg, notificationStyling);
      break;
    case "warning":
      toast.warn(msg, notificationStyling);
      break;
    default:
      toast.info(msg, notificationStyling);
  }
};

const NotificationContainer = () => {
  return (
    <>
      <ToastContainer
        className="notification__container"
        theme="colored"
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default NotificationContainer;
