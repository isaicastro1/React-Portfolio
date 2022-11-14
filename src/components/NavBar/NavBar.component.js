import { Link, Outlet } from "react-router-dom";

import "./nav-bar.styles.scss";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar-container">
        <Link className="page-title" to="/">
          Logo
        </Link>
        <div className="links">
          <li className="nav-a projects-nav">Projects</li>
          <li className="nav-a about-nav">About</li>
          <li className="nav-a contact-nav">Contact</li>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
