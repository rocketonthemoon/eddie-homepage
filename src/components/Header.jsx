import { useContext } from "react";
import MenuContext from "../context/MenuContext";
import Hamburger from "../shared/Hamburger";

function Header() {
  const { Menu } = useContext(MenuContext);
  return (
    <header>
      <a className="logo" href="#">
        Edie
      </a>
      <nav className={Menu}>
        <Hamburger />
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#works">Our Works</a>
        </li>
        <li>
          <a href="#clients">Clients</a>
        </li>
        <li>
          <a href="#foot-nav">Contact</a>
        </li>
      </nav>
    </header>
  );
}

export default Header;
