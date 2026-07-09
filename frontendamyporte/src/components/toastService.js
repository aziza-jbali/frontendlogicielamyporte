import { toast } from "react-toastify";

export const notification = {
  success: (message) =>
    toast.success(message, {
      position: "top-right",
    
      autoClose: 800,
         style: {
        background: "#B67332", // green
        color: "text-yellow-700",
      },
    }),

  error: (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
    }),

  warning: (message) =>
    toast.warning(message, {
      position: "top-right",
      autoClose: 3000,
    }),

  info: (message) =>
    toast.info(message, {
      position: "top-right",
      autoClose: 3000,
    }),
};