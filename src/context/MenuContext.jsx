import { createContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [Menu, setMenu] = useState("");

  const handleOpen = () => {
    setMenu("active");
  };

  const handleClose = () => {
    setMenu("");
  };

  return (
    <MenuContext.Provider
      value={{
        Menu,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
