import "./style.css";
import useOrderStore from "../../../../stores/OrderStore.ts";
import i18next from "../../../../locals/i18n";
function Details() {
  const { order } = useOrderStore();
  return (
    <div
      className={`flex flex-col justify-start items-start mt-14 h-[40vh] overflow-y-scroll cont ${
        i18next.language === "ar" ? "items-end" : "items-start"
      }`}
    >
      <h1 className="text-xl pb-4">{i18next.t("packageDetails")}</h1>

      <div
        className={`table-container ${
          i18next.language === "ar" ? "md:text-right" : "md:text-left"
        }`}
      >
        <table className="w-full border-collapse border border-gray-3000">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="p-2 border border-gray-300">
                {i18next.t("branch")}
              </th>
              <th className="p-2 border border-gray-300">{i18next.t("date")}</th>
              <th className="p-2 border border-gray-300">{i18next.t("time")}</th>
              <th className="p-2 border border-gray-300">{i18next.t("Details")}</th>
            </tr>
          </thead>
          <tbody>
            {order?.TransitEvents?.map((item, index) => (
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
