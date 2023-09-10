import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import { Layout } from "antd";
import { useEffect } from "react";
import { fetchUserFeedData } from "../../redux/slice/userFeedSlice";
import { Post } from "../../components/Post/Post";

const { Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#fff",
};

// const siderStyle = {
//   textAlign: "center",
//   lineHeight: "120px",
//   color: "#000",
//   backgroundColor: "#fff",
// };

const Home = () => {
  const dispatch = useDispatch();
  const {
    data: userFeed,
    loading,
    error,
  } = useSelector((state) => state.userFeed);
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    dispatch(fetchUserFeedData(token));
  }, [dispatch, token]);

  return (
    <Layout hasSider>
      <div className="container">
        <Content style={contentStyle}>
          {userFeed.map((post, i) => {
            return (
              <div
                style={{
                  margin: "20px 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={i}
              >
                <Post post={post} />
              </div>
            );
          })}
        </Content>
        {/* <Sider style={siderStyle}>
          <div></div>
        </Sider> */}
      </div>
    </Layout>
  );
};

export { Home };
