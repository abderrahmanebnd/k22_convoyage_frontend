import toast from "react-hot-toast";

export const displaySuccessToast = (
  message: string = "Votre opération a été réussie"
) => {
  toast.dismiss();
  toast.success(message);
};

export const displayErrorToast = (
  message: string = " Quelque chose s'est mal passé."
) => {
  toast.dismiss();

  toast.error(message);
};
