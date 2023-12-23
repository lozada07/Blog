import { create } from "zustand";

const useAuthModal = create((set) => ({
  isOpen: false,
  typeModal: "",
  onOpenLoginModal: () => set({ isOpen: true, typeModal: "login" }),
  onOpenRegisterModal: () => set({ isOpen: true, typeModal: "register" }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
