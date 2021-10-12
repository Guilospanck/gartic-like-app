import { FaBars } from 'react-icons/fa'
import styled from "styled-components"
import { NavLink as Link, NavLinkProps } from 'react-router-dom';

export const Nav = styled.nav`
  background: #884eef;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  position: fixed;
  top: 0;
  width: 100%;
`;

export const NavLink = styled(Link)<NavLinkProps>`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #000000;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #808080;
  }
`;

export const StyledBars = styled(FaBars)` 
`;

export const ButtonBars = styled.button`
  display: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer; 
  margin-left: 4%;
  background: none;
  border: none;

  @media screen and (max-width: 768px) {
    display: flex; 
    align-items: center;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px; 
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: white;
  padding: 10px 22px;
  color: #884eef;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;  
  margin-left: 24px;  

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #9f7eda;
    color: white;
  }
`;