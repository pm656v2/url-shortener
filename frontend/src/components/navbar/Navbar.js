import "./Navbar.css";
import DesktopNav from "./navbar-desktop";
import MobileNav from "./MobileNav";
import { Outlet } from "react-router";

const Navbar = (props) => {
  return (
    <>
      <header className="header">
        <nav className="navbar-container">
          <div className="navbar-logo">
            <label>URL Shortener</label>
          </div>
          <div className="navbar-middle"></div>
          {props.windowSize ? <DesktopNav /> : <MobileNav />}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
