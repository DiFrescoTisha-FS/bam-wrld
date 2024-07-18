import React, { useState, useEffect, useRef, useMemo } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { generateImageUrl } from '../../utils/cloudinarySetup';
import UserComponent from "../UserComponent";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  NavWrapper,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavBtn,
} from "./NavbarElements";
import debounce from 'lodash/debounce';

const Navbar = React.memo(({ toggle }) => {
  const { state, dispatch } = useUserContext();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrollNav, setScrollNav] = useState(false);

  const logoUrl = useMemo(() => generateImageUrl('logo_qkgu64', {
    width: 60,
    height: 60,
    gravity: 'center',
    crop: 'thumb',
    format: 'auto',
    quality: 'auto',
    secure: true,
  }), []);

  const handleScrollDebounced = useRef(debounce(() => {
    setScrollNav(window.scrollY >= 80);
  }, 200)).current;

  const handleResizeDebounced = useRef(debounce(() => {
    setIsMobile(window.innerWidth < 768);
  }, 200)).current;

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDebounced);
    window.addEventListener("resize", handleResizeDebounced);

    return () => {
      handleScrollDebounced.cancel();
      handleResizeDebounced.cancel();
      window.removeEventListener("scroll", handleScrollDebounced);
      window.removeEventListener("resize", handleResizeDebounced);
    };
  }, [handleScrollDebounced, handleResizeDebounced]);

  return (
    <IconContext.Provider value={{ color: "#ac94f4" }}>
      <NavWrapper scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
            <NavIcon src={logoUrl} alt="logo" loading="lazy" />
          </NavLogo>
          <MobileIcon $isOpen={state.isOpen} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {["home", "bio", "music", "new", "thoughts", "comments"].map((item, index) => (
              <li key={index}>
                <NavLinks
                  to={item}
                  smooth={true}
                  $duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLinks>
              </li>
            ))}
          </NavMenu>
          <NavBtn>
            <UserComponent isMobile={isMobile} toggle={toggle} dispatch={dispatch} />
          </NavBtn>
        </NavbarContainer>
      </NavWrapper>
    </IconContext.Provider>
  );
});

export default Navbar;
