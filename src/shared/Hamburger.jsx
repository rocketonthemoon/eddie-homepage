import { useContext } from "react";
import MenuContext from "../context/MenuContext";

function Hamburger() {
  const { Menu, handleOpen, handleClose } = useContext(MenuContext);
  return (
    <div className={"Hamburger" + " " + Menu}>
      <span className="material-icons" onClick={handleOpen}>
        menu
      </span>
      <span className="material-icons" onClick={handleClose}>
        close
      </span>
    </div>
  );
}

export default Hamburger;
