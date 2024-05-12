import { useState } from "react";
import BostaSvg from "./BostaSvg";
import "./Navbar.css";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import axios from "axios";
import useOrderStore from "../../stores/OrderStore";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { order, setOrder } = useOrderStore();

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    axios
      .get(`https://tracking.bosta.co/shipments/track/${trackingCode}`)
      .then((res) => {
        // console.log(res);
        setOrder(res.data);
        setOpen(false);
        //close the navbar
        setTrackingCode("");
        setIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setOpen(false);
        setIsOpen(false);
        setTrackingCode("");
      });
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
    setTrackingCode("");
  };

  const [trackingCode, setTrackingCode] = useState("");

  return (
    <nav className="bg-white p-4 border-b-2 border-gray-200">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <BostaSvg />
        </div>

        <div className="hidden md:flex items-center space-x-16 text-lg">
          <a href="/" className="text-black hover:text-gray-500 px-2 py-1">
            Main
          </a>
          <a href="#" className="text-black hover:text-gray-500 px-2 py-1">
            Prices
          </a>
          <a href="#" className="text-black hover:text-gray-500 px-2 py-1">
            Contact Sales
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button type="primary" onClick={showModal}>
            Track
          </Button>
          <Modal
            title="Enter your tracking code"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okText="Track"
            cancelText="Cancel"
          >
            <Input
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="Enter your tracking code"
            />
          </Modal>
          <div className="border-r-2 border-gray-3000 h-6"></div>
          <button className="text-black px-4 py-2 rounded-md">Login</button>
          <button className="text-red-500 px-4 py-2 rounded-md">عربي</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-icon">
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
          <div className={`menu ${isOpen ? "open-menu" : "close-menu"}`}>
            <a href="/" className="text-black hover:text-gray-500">
              Main
            </a>
            <a href="#" className="text-black hover:text-gray-500">
              Prices
            </a>
            <a href="#" className="text-black hover:text-gray-500">
              Contact Sales
            </a>
            <Button
              type="primary"
              onClick={showModal}
              style={{ marginTop: "10px", height: "60px" }}
            >
              Track
            </Button>
            <button className="text-black px-4 py-2 rounded-md">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
