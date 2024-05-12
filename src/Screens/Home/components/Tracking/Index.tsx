import useOrderStore from "../../../../stores/OrderStore.ts";
import PackageInfo from "./PackageInfo.tsx";
import TrackingGraph from "./TrackingGraph.tsx";
function Index() {
  const { order } = useOrderStore();

  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-200 rounded-lg mt-6 w-[90%] m-auto">
      <PackageInfo />
      <TrackingGraph />
    </div>
  );
}

export default Index;
