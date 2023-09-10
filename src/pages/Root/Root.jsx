import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Header } = Layout;
import Head from "../../components/Head/Head";
const headerStyle = {
  textAlign: "center",
  height: 60,
  backgroundColor: "#fff",
};

const Root = () => {
  return (
    <>
      <Header style={headerStyle}>
        <Head />
      </Header>
      <Outlet />
    </>
  );
};

export { Root };
