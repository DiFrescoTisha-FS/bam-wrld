import styled from "styled-components";

// Tooltip styled component
export const TooltipContainer = styled.div`
  position: absolute;
  top: ${({$top}) => $top || 0}px;
  left: ${({$left}) => $left || 0}px;
  transform: translate(-50%, 50px);
  display: ${({$show}) => $show ? 'block' : 'none'};
  padding: 8px;
  font-size: 12px;
  color: #000;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  text-align: center;
  z-index: 1000;
  pointer-events: none;
`;