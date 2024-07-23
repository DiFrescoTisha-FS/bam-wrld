import styled, { css } from 'styled-components';

export const ButtonBaseStyles = css`
  border-radius: 50px;
  background: #ac94f4;
  color: #010606;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  gap: 10px;
  min-width: 175px;

  &:hover {
    background: #010606;
    color: #ac94f4;

    svg {
      color: #ac94f4; /* Change icon color on hover */
    }
  }

  @media screen and (max-width: 768px) {
    padding: 2px 10px;
    font-size: 14px;
    min-width: 160px; 
  }

  @media screen and (max-width: 480px) {
    padding: 2px 8px;
    font-size: 12px;
    min-width: 140px;
  }
`;

export const CustomButton = styled.button`
  ${ButtonBaseStyles}
  color: black;

  &:hover {
    background-color: #010606;
    color: #ac94f4;
    border: 1px solid #ac94f4;
  }

  @media screen and (max-width: 820px) {
    font-size: 14px;
    padding: 1px 1px;
    border: 1px solid #ac94f4;
    order: 1;
  }
`;

export const ContactInfoContainer = styled.div`
  background-color: #010606;
  color: #ac94f4;
  padding: 8px;
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid #ac94f4;

  &:hover {
    background: #010606;
    color: #ac94f4;
    border: 1px solid #ac94f4;
  }
`;
