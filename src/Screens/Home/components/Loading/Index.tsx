import { Spin } from "antd";
const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};

const content = <div style={contentStyle} />;
function Index() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
    <Spin tip="Loading" size="large" style={{color: "black"}}>
      {content}
      </Spin>
    </div>
  );
}

export default Index;
