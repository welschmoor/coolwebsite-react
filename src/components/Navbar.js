import { NavLink } from "react-router-dom"

import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  return (
    <Header>
      <HeaderContent>
        <MobileMenuBTN />
        <MainNav>
          <UL>
            <li><Link to="/">Home</Link>    </li>
            <li><Link to="/about">About</Link>    </li>
          </UL>
        </MainNav>
      </HeaderContent>
    </Header>
  )
}

const HeaderContent = styled.div`
  width: 100%;
  padding:  ${p => p.theme.MARGIN.mar20};
  display: flex;
  justify-content: space-between;
`

const MobileMenuBTN = styled(GiHamburgerMenu)`
  font-size: 1rem;
  cursor: pointer;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  /* clip-path: circle(150px at 100% -10%); */



`

const MainNav = styled.nav`
  
`

const UL = styled.ul`
  display: flex;
  gap: 20px;
`

const Link = styled(NavLink)`
  color: ${p => p.theme.TEXT.main};
  text-decoration: none;
`
export default Navbar