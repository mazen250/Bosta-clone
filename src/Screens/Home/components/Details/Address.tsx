import report from "../../../../assets/report.avif";
import { Button, Modal, message } from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import i18next from "../../../../locals/i18n";
function Address() {
  const [open, setOpen] = useState(false);
  const [confirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    message.success("Your request has been sent successfully");
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <div className={`flex flex-col justify-between items-start w-full
      ${
        i18next.language === "ar" ? "items-end" : "items-start"
      }
    `}>
      <h1 className="text-xl pb-4">{i18next.t("deliveryAddress")}</h1>
      <div className=" bg-gray-100 p-4 rounded-md w-full">
        <p className="text-gray-500">
          52 Ahmed zaki st. Nozha el gdida, Cairo, Egypt
        </p>
      </div>
      <div className=" bg-white p-4 rounded-md mt-4 border-gray-200 border-2 flex flex-row justify-around items-center  pb-8 pt-4 w-full">
        <img
          src={report}
          alt="report"
          width={150}
          style={{
            objectFit: "contain",
          }}
        />
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-sm ">{i18next.t("problem")}</h1>
          <Button
            type="primary"
            onClick={showModal}
            style={{ marginTop: "10px", height: "40px" }}
          >
            {i18next.t("report")}
          </Button>
          <Modal
            title={i18next.t("help")}
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okText={i18next.t("reportButton")}
            cancelText={i18next.t("cancel")}
          >
            <TextArea rows={4} placeholder={i18next.t("enterProblem")} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Address;
