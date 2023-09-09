import "./Person.scss"
import PostColumn from "../../components/PostColumn/PostColumn";
import PersonProfile from "../../components/PersonProfile/PersonProfile"
import { Layout } from "antd";
const {Header, Content } = Layout
import "./Person.scss"
const Person = () => {

    window.scrollTo(0, 0)
    return (
     <Layout>
      <Header style={headerUserStyle}><PersonProfile/></Header>
      <Content style={postColumn}><PostColumn/></Content>
    </Layout>
    )
}

const headerUserStyle= {
  maxWidth:"1200px",
  marginRight:"auto",
  marginLeft:"auto",
  minHeight: 220,
  backgroundColor: "white",
};

const postColumn = {
maxWidth:"1200px",
backgroundColor: "white",
marginRight:"auto",
marginLeft:"auto",
marginTop:"20px"
};

export { Person };
