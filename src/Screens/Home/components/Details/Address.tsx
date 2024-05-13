import report from "../../../../assets/report.avif";
import { Button, Modal, message } from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
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
    <div className="flex flex-col justify-between items-start w-full">
      <h1 className="text-xl pb-4">Delivery Address</h1>
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
          <h1 className="text-sm ">Is there any problem?</h1>
          <Button
            type="primary"
            onClick={showModal}
            style={{ marginTop: "10px", height: "40px" }}
          >
            Report a problem
          </Button>
          <Modal
            title="How can we help you?"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okText="Report"
            cancelText="Cancel"
          >
            <TextArea rows={4} placeholder="Enter your problem" />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Address;
