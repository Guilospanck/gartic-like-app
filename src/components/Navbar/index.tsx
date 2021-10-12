import React from "react"

import {
  Nav,
  NavLink,
  ButtonBars,
  StyledBars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './styles';

export const Navbar = () => {

  return (
    <>
      <Nav>
        <ButtonBars>
          <StyledBars />
        </ButtonBars>
        <NavMenu>
          <NavLink to='/' exact={true} activeStyle={{}}>
            Home
          </NavLink>
          <NavLink to='/dashboard' activeStyle={{}}>
            Dashboard
          </NavLink>
          <NavLink to='/sign-up' activeStyle={{}}>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}