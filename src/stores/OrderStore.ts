import { create} from "zustand";

type transiteEvent = {
  state: string;
  timestamp: string;
}

type Order = {
  provider: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
  PromisedDate: null;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: transiteEvent[];
  CreateDate: string;
  isEditableShipment: boolean;
};

interface OrderState {
  order: Order | null;
  setOrder: (order: Order) => void;
}

const useOrderStore = create<OrderState>((set) => ({
  order: null,
  setOrder: (order: Order) => set({ order }),
}));

export default useOrderStore;
