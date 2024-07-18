import React, { useEffect } from "react";
import UserComponent from "../UserComponent";
import { useUserContext } from "../../contexts/UserContext";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElements";

const navItems = ["home", "bio", "music", "new", "thoughts", "comments"];

const Sidebar = ({ toggle, isOpen }) => {
  const { state } = useUserContext();
  const { currentUser } = state;

  useEffect(() => {
    console.log("Sidebar Is Open:", isOpen);
    console.log("Current User in Sidebar:", currentUser);
  }, [isOpen, currentUser]);

  return (
    <SidebarContainer $isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navItems.map((item, index) => (
            <SidebarLink
              key={index}
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              $duration={500}
              activeClass="active"
              onClick={toggle}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <UserComponent />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
