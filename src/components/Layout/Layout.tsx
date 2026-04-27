import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

import NavigationLink from "../NavigationLink/NavigationLink";
import { navLinkData } from "./data";
import {
  Footer,
  GoBackButton,
  Header,
  LayoutComponent,
  Logo,
  LogoContainer,
  Main,
  NavContainer,
} from "./styles";
import type { LayoutProps, NavLinkObject } from "./types";

export const LayoutComponentContext = createContext<string | undefined>(
  undefined,
);

function Layout({ children }: LayoutProps) {
  const [name] = useState<string | undefined>("Yana");

  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  const navLinks = navLinkData.map((navLink: NavLinkObject) => {
    return (
      <NavigationLink key={v4()} to={navLink.to} linkName={navLink.linkName} />
    );
  });

  return (
    <LayoutComponentContext.Provider value={name}>
      <LayoutComponent>
        <Header>
          <LogoContainer>
            <Logo onClick={goToHomePage}>81</Logo>
            <GoBackButton onClick={goBack}>{"<--"}</GoBackButton>
          </LogoContainer>
          <NavContainer>{navLinks}</NavContainer>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <Logo onClick={goToHomePage}>81</Logo>
        </Footer>
      </LayoutComponent>
    </LayoutComponentContext.Provider>
  );
}

export default Layout;
