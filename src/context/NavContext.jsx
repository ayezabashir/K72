import { createContext } from "react";

const NavContext = ({ children }) => {
  const NavbarContext = createContext();
  return (
    <div>
      <NavbarContext.Provider>{children}</NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
