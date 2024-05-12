import { ConfigProvider } from "antd";
import Home from "./Screens/Home/Index.tsx";
import ErrorScreen from "./Screens/ErrorScreen/Index.tsx";
import Navbar from "./Components/Navbar/Index.tsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "red",
        },
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<ErrorScreen />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
