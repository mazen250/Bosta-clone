import useOrderStore from "../../../../stores/OrderStore";
import { useMemo } from "react";

interface OrderStore {
  order?: {
    TrackingNumber?: string;
    CurrentStatus?: {
      state: string;
    };
    TransitEvents?: Array<{
      timestamp: string;
    }>;
    PromisedDate?: string;
    provider?: string;
  };
}

function PackageInfo() {
  const { order } = useOrderStore() as OrderStore;
  const convertDate = (date: string) => {
    return new Date(date).toLocaleString();
  };
  const calculateDateDifference = (
    currentDate: string,
    promisedDate: string
  ) => {
    const current = new Date(currentDate);
    const promised = new Date(promisedDate);
    const differenceMs = current.getTime() - promised.getTime();
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    return differenceDays;
  };

  const lastEventTimestamp = useMemo(() => {
    return order?.TransitEvents?.[order.TransitEvents.length - 1]?.timestamp;
  }, [order?.TransitEvents]);

  const estimatedDeliveryTime = useMemo(() => {
    if (order?.CurrentStatus?.state === "CANCELLED") {
      return "N/A";
    } else if (order?.CurrentStatus?.state === "DELIVERED") {
      return "Delivered";
    } else if (lastEventTimestamp && order?.PromisedDate) {
      return (
        calculateDateDifference(lastEventTimestamp, order.PromisedDate) +
        " days"
      );
    }
    return "";
  }, [order?.CurrentStatus?.state, lastEventTimestamp, order?.PromisedDate]);

  return (
    <div className="flex flex-col md:flex-row h-1/2 border-b-2 border-gray-200 w-full justify-around items-start pt-6 pb-6 pl-8 md:pl-0 md:items-center">
      <div className="mb-4 md:mb-0">
        <h1 className="md:text-sm text-lg text-gray-500">
          Delivery Id {order?.TrackingNumber}
        </h1>
        <h1 className="md:text-lg text-red-500">
          {order?.CurrentStatus?.state}
        </h1>
      </div>
      <div className="mb-4 md:mb-0">
        <h1 className="md:text-sm text-lg text-gray-500">Last update</h1>
        <h1 className=" md:text-lg">
          {lastEventTimestamp ? convertDate(lastEventTimestamp) : ""}
        </h1>
      </div>
      <div className="mb-4 md:mb-0">
        <h1 className="md:text-sm text-lg text-gray-500">Merchant Name</h1>
        <h1 className="md:text-lg">{order?.provider}</h1>
      </div>
      <div className="mb-4 md:mb-0">
        <h1 className="md:text-sm text-lg text-gray-500">
          Estimated Delivery Time
        </h1>
        <h1 className="md:text-lg text-lg">{estimatedDeliveryTime}</h1>
      </div>
    </div>
  );
}

export default PackageInfo;
