import styled from "styled-components";
import { Link as LinkS } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 100px;
  z-index: 100;
  @media screen and (max-width: 960px) {
    transition: 0.2s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  align-items: center;
`;

export const NavLogo = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-self: start;
  cursor: pointer;
  margin: 10px 20px 0 24px;
  text-decoration: none;
  @media screen and (max-width: 960px) {
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: end;
  list-style: none;
  text-align: center;
  justify-content: flex-end;
  width: 100vw;
  white-space: nowrap;
`;

export const NavItem = styled.li`
  margin-top: 10px;
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  height: 100%;
  font-weight: bold;
  padding: 0.5rem 1.3rem;
  font-size: 16px;

  &.active {
    color: #ffbdbe;
  }

  &:hover {
    color: #ffbdbe;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    display: table;
    text-align: center;
    padding: 2rem;
  }
`;

export const SidebarMenu = styled.div`
  margin-top: 6.23rem;
  display: flex;
  align-items: center;
  list-style: none;
  flex-direction: column;
`;

export const SidebarItem = styled.li`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 8px 0px 8px 16px;
  width: 100%;
  transition: 0.2s all ease-out;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: black;
  width: 95%;
  border-radius: 4px;
  height: 100%;
  font-weight: bold;
  font-size: 16px;
  padding: 1.5rem 2rem;

  &.active {
    background: #ffbdbe;
    color: white;
  }

  &:hover {
    background: #ffbdbe;
    color: white;
  }
`;
