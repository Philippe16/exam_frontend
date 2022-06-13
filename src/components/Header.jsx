import { Link } from "react-router-dom";

// CSS
import header_style from "../css/header_style.css";

//Components
import Nav from "./Nav";

const header = props => {
  const navItems = [
  
    {
      "path": "/shows",
      "linkTxt": "Shows"
    },
    {
      "path": "/myshows",
      "linkTxt": "My Shows"
    },
    {
      "path": "/signuppage",
      "linkTxt": "Sign Up"
    },
    {
      "path": "/loginpage",
      "linkTxt": "Login/Logout"
    },
  ];

  return (
    <header id="header" className="flexRow">
      <div id="logo-container">
        <Link to="/">
          Movie Festival
        </Link>
      </div>

      <Nav navItems={ navItems }/>
    </header>
  )
}

export default header