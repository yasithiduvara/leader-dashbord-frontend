import Swal from "sweetalert2";

export const showAlert = ({ title, text, icon, confirmButtonText, timer }) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    timer,
  });
};
