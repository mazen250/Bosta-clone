import "./style.css";
import useOrderStore from "../../../../stores/OrderStore.ts";
function Details() {
  const { order } = useOrderStore();
  return (
    <div className="flex flex-col justify-start items-start mt-14 h-[40vh] overflow-y-scroll cont">
      <h1 className="text-xl pb-4">Package details</h1>

      <div className="table-container">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="p-2 border border-gray-300">Branch</th>
              <th className="p-2 border border-gray-300">Date</th>
              <th className="p-2 border border-gray-300">Time</th>
              <th className="p-2 border border-gray-300">Details</th>
            </tr>
          </thead>
          <tbody>
            {order?.TransitEvents.map((item, index) => (
              <tr key={index}>
                <td className="p-2 border border-gray-300">
                  {item.hub ? item.hub : "N/A"}
                </td>
                <td className="p-2 border border-gray-300">
                  {new Date(item?.timestamp).toLocaleDateString()}
                </td>
                <td className="p-2 border border-gray-300">
                  {new Date(item?.timestamp).toLocaleTimeString()}
                </td>
                <td className="p-2 border border-gray-300">{item?.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Details;
