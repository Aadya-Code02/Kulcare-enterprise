import { create } from "zustand"; // Import Zustand correctly

// Define the store's shape
interface NavStore {
  activeTitle: string;
  setActiveTitle: (title: string) => void;
}

// Create the Zustand store
const useNavStore = create<NavStore>((set) => ({
  activeTitle: "", // Default value for activeTitle
  setActiveTitle: (title) => set({ activeTitle: title }), // Update the activeTitle
}));

export default useNavStore;
