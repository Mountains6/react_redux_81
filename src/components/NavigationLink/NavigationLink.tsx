import { StyledNavLink } from "./styles"
import type { NavigationLinkProps } from "./types"
function NavigationLink({ to, linkName }: NavigationLinkProps) {
  return (
    <StyledNavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
        color: isActive ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.649)",
        fontWeight: isActive ? "700" : "400",
      })}
    >
      {linkName}
    </StyledNavLink>
  )
}
export default NavigationLink
