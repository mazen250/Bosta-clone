import { create } from "zustand";

const useOrderStore = create((set) => ({
    order: null,
    setOrder: (order: any) => set({ order })
}))

export default useOrderStore

