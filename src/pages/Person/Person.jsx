import "./Person.scss"
import {Link} from "react-router-dom"
import HeaderUserPage from "../../components/HeaderUserPage/HeaderUserPage";
import PostColumn from "../../components/PostColumn/PostColumn";

// import { toggleSubscriptionStatus } from '../../redux/slice/userFeedSlice';
import { Layout } from "antd";
const {Header, Content } = Layout

const Person = () => {

    window.scrollTo(0, 0)
    return (
     <Layout>
      <Header style={headerUserStyle}><HeaderUserPage/></Header>
      <Content style={postColumn}><PostColumn/></Content>
      <Link to ="/">Home</Link>
    </Layout>
    )
}

const headerUserStyle= {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "pink",
};

const postColumn = {
maxWidth:"1200px",
marginRight:"auto",
marginLeft:"auto",
marginTop:"20px"
};

export { Person };
