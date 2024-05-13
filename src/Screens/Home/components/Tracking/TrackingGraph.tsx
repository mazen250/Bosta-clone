import { DeliveredProcedureOutlined, TruckOutlined } from "@ant-design/icons";
import { Steps } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import useOrderStore from "../../../../stores/OrderStore";
import i18next from "../../../../locals/i18n";

type type = {
  title: string;
  type: string;
  color: string;
  icon?: React.ReactNode;
  description?: string;
};

function TrackingGraph() {
  const { order } = useOrderStore();
  const [tempOrderTitle, setTempOrderTitle] = useState("Out for delivery");
  const [types, setTypes] = useState<type[]>([]);

  useEffect(() => {
    setTypes([
      {
        title: i18next.t("packageCreated"),
        type: "PACKAGE_CREATED",
        color: "#000000",
        description: undefined as string | undefined,
      },
      {
        title: i18next.t("packageReceived"),
        type: "RECEIVED",
        color: "#000000",
        description: undefined as string | undefined,
      },
      {
        title: tempOrderTitle,
        type: "OUT_FOR_DELIVERY",
        color: "#000000",
        icon: <TruckOutlined />,
        description: undefined as string | undefined,
      },
      {
        title: i18next.t("packageDelivered"),
        type: "DELIVERED",
        color: "#000000",
        icon: <DeliveredProcedureOutlined />,
        description: undefined as string | undefined,
      },
    ]);
  }, [tempOrderTitle]);

  const [current, setCurrent] = useState(0);
  // const [status, setStatus] = useState<string | undefined>(undefined);

  const getcurrent = useCallback(() => {
    if (!order) return;
    console.log("current order state is", order.CurrentStatus?.state);
    if (order.CurrentStatus?.state === "CANCELLED") {
      setTempOrderTitle(i18next.t("packageCanceled"));
      setCurrent(2);
      // setStatus("error");
    } else if (order.CurrentStatus?.state === "DELIVERED_TO_SENDER") {
      setTempOrderTitle(i18next.t("deliveredToSender"));
      setCurrent(2);
    } else {
      setTempOrderTitle(i18next.t("packageOutForDelivery"));
      const index = types.findIndex(
        (type) => type.type === order.CurrentStatus?.state
      );
      setCurrent(index);
    }
  }, [order, types]);

  useEffect(() => {
    if (order && Object.keys(order).length > 0) {
      getcurrent();
    }
  }, [order, getcurrent]);

  return (
    <div className="flex flex-col md:flex-row h-1/2 w-full justify-center items-center p-4 mt-6">
      <Steps
        current={current}
        status={"error"} // to use the red color
        labelPlacement="vertical"
        items={types}
        responsive={true}
        // direction="vertical"
        className="md:space-y-0 space-y-8"
      />
    </div>
  );
}

export default TrackingGraph;
