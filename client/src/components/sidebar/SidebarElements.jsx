import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { media_queries } from '../../utils/media_queries';

export const SidebarContainer = styled.aside.attrs(props => ({
  style: {
    transform: props.$isOpen ? 'translateX(0)' : 'translateX(100%)',
  },
}))`
  position: fixed;
  z-index: 1002;
  width: 100%;
  height: 100%;
  background: #010606;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  border-left: 2px solid #ac94f4;
`;


export const CloseIcon = styled(FaTimes)`
  display: flex;
  margin: 6px;
  color: #ac94f4;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  top: 2rem;
  right: 1.5rem;
  margin-right: 10px;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #ac94f4;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  margin-top: 10rem;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 10fr;
  grid-template-rows: repeat(8, 80px);
  text-align: center;

  ${media_queries.tablet`
    grid-template-rows: repeat(6, 60px);
  `}
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ac94f4;
  }

  &.active {
    border-bottom: 3px solid #ac94f4;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin-top: 5px;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #ac94f4;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    border: 2px solid #ac94f4;
    background: #000;
    color: #ac94f4;
  }
`;
