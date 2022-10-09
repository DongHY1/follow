import create from 'zustand';
export interface IUser {
  name: string;
  email: string;
  _id: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

type Store = {
  authUser: IUser | null;
  pageLoading: boolean;
  setAuthUser: (user: IUser) => void;
  setPageLoading: (isLoading: boolean) => void;
};

const useStore = create<Store>((set) => ({
  authUser: null,
  uploadingImage: false,
  pageLoading: false,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setPageLoading: (isLoading) =>
    set((state) => ({ ...state, pageLoading: isLoading })),
}));

export default useStore;
