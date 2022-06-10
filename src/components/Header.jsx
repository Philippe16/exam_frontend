import { Link } from "react-router-dom";

// CSS
import header_style from "../css/header_style.css";

//Components
import Nav from "./Nav";

const header = props => {
  const navItems = [
    {
      "path": "/loginpage",
      "linkTxt": "Login/Logout"
    },
    {
      "path": "/userpage",
      "linkTxt": "UserPage"
    },
    {
      "path": "/adminpage",
      "linkTxt": "AdminPage"
    },
    {
      "path": "/externdatapage",
      "linkTxt": "ExternDataPage"
    }
  ];

  return (
    <header id="header" className="flexRow">
      <div id="logo-container">
        <Link to="/">
          Logo
        </Link>
      </div>

      <Nav navItems={ navItems }/>
    </header>
  )
}

export default header