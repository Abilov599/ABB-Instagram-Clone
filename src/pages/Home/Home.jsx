import "./Home.scss";
import { Layout } from "antd";

const { Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const Home = () => {
  return (
    <Layout hasSider>
      <Content style={contentStyle}>Content</Content>
      <Sider style={siderStyle}>Sider</Sider>
    </Layout>
  );
};

export { Home };
