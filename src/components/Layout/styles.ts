import styled from "@emotion/styled"
import backgroundImage from "../../assets/background.jpg"

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-size: cover;
  position: relative;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: rgba(18, 45, 77, 0.5);
  border-bottom: 1px solid rgb(255, 255, 255);
  backdrop-filter: blur(10px);
  width: 100%;
  z-index: 10;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px; 
  cursor: pointer;
  flex-shrink: 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  white-space: nowrap;
  margin-left: 20px;
  border-radius: 50%;
  font-size: 28px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 30px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgb(142, 196, 223);
`
export const BackArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;

  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`
