import {Link} from "react-router-dom"

function Head() {
  return (
    <div>
    <i className="fa-brands fa-instagram fa-2xl"></i>
    <Link to ="/"><i className="fa-solid fa-lg fa-house" style={{color: "#000000", marginLeft:"20%"}} ></i></Link>
    <Link to ="/person"><i className="fa-solid fa-user fa-lg" style={{color: "#000000",marginLeft:"20%"}} ></i></Link>
    </div>
  )
}
export default Head