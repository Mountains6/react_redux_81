import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"
import NavigationLink from "../NavigationLink/NavigationLink"
import { navLinkData } from "./data"
import {
  BackArrowContainer,
  Header,
  LayoutComponent,
  Logo,
  LogoContainer,
  Main,
  NavContainer,
} from "./styles"
import type { LayoutProps, NavLinkObject } from "./types"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  const goToHomePage = () => navigate("/")

  return (
    <LayoutComponent>
      <Header>
        <LogoContainer>
          <BackArrowContainer onClick={handleGoBack}>{"<"}</BackArrowContainer>
          <Logo onClick={goToHomePage}>Weather App</Logo>
        </LogoContainer>
        <NavContainer>
          {navLinkData.map((navLink: NavLinkObject) => (
            <NavigationLink
              key={v4()}
              to={navLink.to}
              linkName={navLink.linkName}
            />
          ))}
        </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutComponent>
  )
}

export default Layout
