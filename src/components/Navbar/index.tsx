import React from "react"

import {
  Nav,
  NavLink,
  ButtonBars,
  StyledBars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  GarticLogoLink,
  StyledGarticSVGIcon,
  NavRight
} from './styles';

export const Navbar = () => {

  return (
    <>
      <Nav>
        <ButtonBars>
          <StyledBars />
        </ButtonBars>
        <NavMenu>
          <GarticLogoLink to='/'>
            <StyledGarticSVGIcon />
          </GarticLogoLink>
          <NavLink to='/' exact={true} activeStyle={{}}>
            Home
          </NavLink>
          <NavLink to='/dashboard' activeStyle={{}}>
            Dashboard
          </NavLink>
          {/* <NavLink to='/sign-up' activeStyle={{}}>
            Sign Up
          </NavLink> */}
        </NavMenu>
        <NavRight>
          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
        </NavRight>
      </Nav>
    </>
  )
}