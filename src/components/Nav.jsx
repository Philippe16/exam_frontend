import { Link } from "react-router-dom"



const Nav = ({navItems}) => {
  return (
    <nav id="nav" className="flexRow">
      { navItems.map((navItem, index) => (
        <div key={ index } className="navItem">
          <Link to={navItem.path}>
            { navItem.linkTxt }
          </Link>
        </div>
      )) }
    </nav>
  )
}

export default Nav