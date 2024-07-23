import styled from 'styled-components';
import { Link } from 'react-scroll';
import { media_queries } from '../../utils/media_queries';

export const ArtistImgWrap = styled.div`
  max-width: 455px;
  width: 100%;
  height: 455px;
  position: relative;
  z-index: 1;

  ${media_queries.tablet`
    width: 100%;
    order: 1;
  `}

${media_queries.phone`
    order: 1;
    margin-bottom: 0;
  `}

${media_queries.smallPhone`
    order: 1;
    margin-bottom: -70px;
  `}

`;

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 20px 0; */
  min-height: 100vh;
  z-index: 1;

  ${media_queries.tablet`
    min-height: 100vh;
    padding: 0;
  `}

  ${media_queries.phone`
    min-height: 100vh;
    padding: 0;
  `}

${media_queries.smallPhone`
    min-height: 100vh;
    padding: -100px;
  `}
`;


export const FlexibleLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  gap: 20px;

  ${media_queries.tablet`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const ImgWrap = styled.div`
  max-width: 455px;
  width: 100%;
  height: 455px;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;

  ${media_queries.tablet`
    width: 100%;
  `}

  ${media_queries.phone`
    order: 1; // Image on top
    margin-bottom: 0;
  `}

  ${media_queries.smallPhone`
    order: 1; // Image on top
    margin-bottom: 0;
  `}
`;

export const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-right: 18px;

  ${media_queries.tablet`
    max-width: 100%;
    order: 2; // Text on bottom
    margin-left: 40%;
  `}

  ${media_queries.phone`
    order: 2; // Text on bottom
    margin-top: 0;
    margin: 0;
    padding: 0;
  `}

  ${media_queries.smallPhone`
    order: 2; // Text on bottom
    margin-top: 0;
    margin: 0;
    padding: 0;
    gap: 0;
  `}
`;

export const Button = styled(Link)`
    border-radius: 50px;
    background: #ac94f4;
    border: 1px solid #010606;
    white-space: nowrap;
    padding: ${({$big }) => ($big ? '14px 48px' : '12px 30px')};
    color: #010606;
    font-size: ${({ $fontBig }) => ($fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #010606;
        color: #ac94f4;
        outline: 1px solid #ac94f4;
        border: 1px solid #ac94f4;
    }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;

  ${media_queries.tablet`
    font-weight: 500;
    justify-content: center;
    margin-right: 260px;
  `}

  ${media_queries.phone`
    font-weight: 300;
    justify-content: center;
    margin-right: 0;
  `}
`;

export const Heading = styled.h1`
  color: #ac94f4;
  font-size: 44px;
  font-weight: 600;
  text-align: left;

  ${media_queries.tablet`
    font-size: 40px;
    text-align: center;
    margin-right: 250px;
  `}

  ${media_queries.phone`
    font-size: 32px;
    text-align: center;
    margin-right: 0;
  `}
`;

export const Topline = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: 1.4px;
  text-align: left;

  ${media_queries.tablet`
    margin-top: 10px;
    margin-right: 250px;
    text-align: center;
  `}

  ${media_queries.phone`
    margin-top: 0;
    margin-right: 0;
    text-align: center;
  `}

  ${media_queries.smallPhone`
    margin-top: 0;
    text-align: center;
    margin-right: 0;
    margin: 0 auto;
  `}
`;