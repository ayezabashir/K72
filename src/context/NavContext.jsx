/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
