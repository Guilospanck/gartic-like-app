import { FaBars } from 'react-icons/fa'
import GarticLikeIcon from '../../assets/svg/gartic_like_app_logo.svg'
import styled from "styled-components"
import { NavLink as Link, NavLinkProps } from 'react-router-dom';

export const StyledGarticSVGIcon = styled(GarticLikeIcon)`
  width: 100%;
  height: 80%;
  fill: white;
`

export const GarticLogoLink = styled(Link)`
  width: 100px;
  height: 100%;
  border: none;
  cursor: pointer;
  background: none;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`

export const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`

export const Nav = styled.nav`
  // background: #884eef;
  background: #9a98ca;
  height: 85px;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const NavLink = styled(Link)<NavLinkProps>`
  color: #d7d7de;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: white;
    font-style: bold;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
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