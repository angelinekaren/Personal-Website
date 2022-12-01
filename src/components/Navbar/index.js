import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import logo from "../../images/my_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  SidebarMenu,
  SidebarItem,
  SidebarLink,
} from "./Navbar.elements.js";

const Navbar = () => {
  const [navChangeColor, setNavChangeColor] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavChangeColor(true);
    } else {
      setNavChangeColor(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  window.addEventListener("scroll", changeNavbarColor);

  const handleToggleHome = () => {
    scroll.scrollToTop();
    setSidebar(false);
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSidebar(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useLayoutEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
    if (!sidebar) {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [sidebar]);

  return (
    <>
      <div className={`overlay ${sidebar ? "visible" : ""}`} />
      <Nav className={navChangeColor ? "navbar active" : "navbar"}>
        <NavContainer>
          <NavLogo to="/" onClick={handleToggleHome}>
            <img src={logo} alt="Karen Logo" width="38" height="40" />
          </NavLogo>
          {!mobile && (
            <>
              <NavMenu>
                <NavItem>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink to="about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="skills">Skills</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink to="contact">Contact</NavLink>
                </NavItem> */}
              </NavMenu>
            </>
          )}
          {mobile && (
            <div className="sidebar-toggle">
              <MenuIcon
                style={{ fontSize: "30px" }}
                className="sidebar-logo-toggle"
                onClick={() => setSidebar(!sidebar)}
              />
            </div>
          )}
        </NavContainer>
      </Nav>
      <div ref={ref} className={sidebar ? "sidebar active" : "sidebar"}>
        {mobile && (
          <div className="sidebar-toggle">
            <CloseIcon
              style={{ fontSize: "30px" }}
              className="sidebar-logo-toggle"
              onClick={() => setSidebar(!sidebar)}
            />
          </div>
        )}
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink
              onClick={() => setSidebar(false)}
              offset={-50}
              to="/"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Home
            </SidebarLink>
          </SidebarItem>
          {/* <SidebarItem>
            <SidebarLink
              onClick={() => setSidebar(false)}
              offset={-50}
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              About
            </SidebarLink>
          </SidebarItem> */}
          {/* <SidebarItem>
            <SidebarLink
              onClick={() => setSidebar(false)}
              offset={-50}
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Skills
            </SidebarLink>
          </SidebarItem> */}
          <SidebarItem>
            <SidebarLink
              onClick={() => setSidebar(false)}
              offset={-50}
              to="/portfolio"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Portfolio
            </SidebarLink>
          </SidebarItem>
          {/* <SidebarItem>
            <SidebarLink
              onClick={() => setSidebar(false)}
              offset={-50}
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Contact
            </SidebarLink>
          </SidebarItem> */}
        </SidebarMenu>
      </div>
    </>
  );
};

export default Navbar;
