import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Footer } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const Root = () => {
  return (
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Outlet />
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export { Root };
