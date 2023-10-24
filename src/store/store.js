import { create } from "zustand";

const AppStore = create((set) => ({
  showTransition: false,
  showApp: false,
  showAltTrans: false,
  closeTransition: () =>
    set((state) => ({ showTransition: !state.showTransition })),
  closeAltTransition: () =>
    set((state) => ({ showAltTrans: !state.showAltTrans })),
  toggleApp: () => set((state) => ({ showApp: !state.showApp })),
}));

export default AppStore;
