import create from "zustand";

const useAuthStore = create((set) => ({
  accessToken: null,
  setAccessToken: (accessToken) =>
    set((state) => ({
      ...state,
      accessToken,
    })),
  removeAccessToken: () =>
    set((state) => ({
      ...state,
      accessToken: null,
    })),
}));

export default useAuthStore;