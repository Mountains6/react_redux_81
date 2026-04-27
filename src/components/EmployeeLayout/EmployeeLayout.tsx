import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

import NavigationLink from "../NavigationLink/NavigationLink";
import { navLinkData } from "./data";
import {
  Header,
  LayoutComponent,
  Logo,
  LogoContainer,
  Main,
  NavContainer,
} from "./styles";
import type { LayoutProps, NavLinkObject, EmployeeContextType } from "./types";
import type { CreateEmployeeValues } from "../../pages/CreateEmployee/types";

export const EmployeeLayoutContext = createContext<EmployeeContextType>({
  employeeData: null,
  setEmployeeData: () => {},
});

function EmployeeLayout({ children }: LayoutProps) {
  const [employeeData, setEmployeeData] = useState<CreateEmployeeValues | null>(
    null,
  );

  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/create-employee");
  };

  const navLinks = navLinkData.map((navLink: NavLinkObject) => {
    return (
      <NavigationLink key={v4()} to={navLink.to} linkName={navLink.linkName} />
    );
  });

  return (
    <EmployeeLayoutContext.Provider value={{ employeeData, setEmployeeData }}>
      <LayoutComponent>
        <Header>
          <LogoContainer>
            <Logo onClick={goToHomePage}>Employee App</Logo>
          </LogoContainer>
          <NavContainer>{navLinks}</NavContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutComponent>
    </EmployeeLayoutContext.Provider>
  );
}

export default EmployeeLayout;
