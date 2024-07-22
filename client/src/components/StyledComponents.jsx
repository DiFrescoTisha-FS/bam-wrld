import styled, { css } from 'styled-components';
import { media_queries } from '../utils/media_queries';
import { Link } from 'react-scroll';
import { FaArrowAltCircleDown, FaRocket } from 'react-icons/fa';
import { TbRotate360 } from "react-icons/tb";
const maxWidth = "700px";

const sharedStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  position: relative;
  z-index: 2;
`;

export const SharedSectionWrapper = styled.div`
  ${sharedStyles}
  ${({ $customStyle }) => $customStyle}
`;

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 860px;
  z-index: 1;

  ${media_queries.tablet`
    padding: 50px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    min-height: 100vh;
  `}

${media_queries.smallPhone`
    padding: 50px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    min-height: 100vh;
  `}
`;

export const SectionBg = styled.div`
  position: absolute;
  height: 860px;
  max-height: 860px;
  width: 100%;
  background-image: url(${({ $backgroundImageDesktopUrl }) => $backgroundImageDesktopUrl});
  background-size: cover;
  z-index: 2;

  ${media_queries.tablet`
    background-image: url(${({ $backgroundImageTabletUrl }) => $backgroundImageTabletUrl});
    background-size: auto 100%;
    background-position: center;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%);
      z-index: 3;
    }
  `}

  ${media_queries.phone`
    background-image: url(${({ $backgroundImageSmallMobileUrl }) => $backgroundImageSmallMobileUrl});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  `}

  ${media_queries.smallPhone`
    background-image: url(${({ $backgroundImageMobileUrl }) => $backgroundImageMobileUrl});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  `}
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 800;

  ${media_queries.tablet`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}

${media_queries.smallPhone`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `}
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${media_queries.tablet`
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const Topline = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: 1.4px;
  text-align: left;

  ${media_queries.tablet`
    margin-top: 0;
    // margin-right: 250px;
    text-align: center;
  `}

  ${media_queries.phone`
    margin-top: 0;
    text-align: center;
  `}

  ${media_queries.smallPhone`
    margin-top: 0;
    text-align: center;
    margin: 0 auto;
  `}
`;

export const BamText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-top: 12px;
  text-align: left;

  ${media_queries.tablet`
    margin-top: 0;
    margin-right: 260px;
    text-align: center;
  `}

  ${media_queries.phone`
    margin-top: 0;
    text-align: center;
  `}

  ${media_queries.smallPhone`
    margin-top: 0;
    text-align: center;
    margin-left: 125px;
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

export const StyledH1 = styled.h1`
  font-size: ${({ $fontSize }) => $fontSize || '20px'};
  color: ${({ $color }) => $color || '#fff'};
  font-family: ${({ $fontFamily }) => $fontFamily || 'inherit'};
  ${media_queries.phone`
    font-size: 4rem;
  `}
`;

export const StyledText = styled.p.attrs(({ as = 'p' }) => ({
  as,
}))`
  color: ${({ $color }) => $color || '#fff'};
  font-size: ${({ $fontSize }) => $fontSize || '20px'};
  font-weight: ${({ $fontWeight }) => $fontWeight || '400'};
  font-family: ${({ $fontFamily }) => $fontFamily || 'inherit'};
  line-height: ${({ $lineHeight }) => $lineHeight || 'normal'};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing || 'normal'};
  text-transform: ${({ $textTransform }) => $textTransform || 'none'};
  margin-top: ${({ $marginTop }) => $marginTop || '0'};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || '0'};
  margin-right: ${({ $marginRight }) => $marginRight || '0'};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
  position: ${({ $position }) => $position || 'relative'};
  max-width: ${({ $maxWidth }) => $maxWidth || 'none'};

  ${media_queries.tablet`
    font-size: ${({ $tabletFontSize, $fontSize }) => $tabletFontSize || $fontSize};
    text-align: ${({ $tabletTextAlign }) => $tabletTextAlign || 'center'};
    margin-right: ${({ $tabletMarginRight }) => $tabletMarginRight || '0'};
  `}

  ${media_queries.phone`
    font-size: ${({ $phoneFontSize, $fontSize }) => $phoneFontSize || $fontSize};
    text-align: center;
  `}

  ${media_queries.smallPhone`
    font-size: ${({ $smallPhoneFontSize, $fontSize }) => $smallPhoneFontSize || $fontSize};
    text-align: center;
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
    // margin-right: 250px;
  `}

  ${media_queries.phone`
    font-size: 32px;
    text-align: center;
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

export const Img = styled.img`
  width: 455px;
  height: auto;
  position: relative;
  border-radius: 10px;
  border: 2px solid #ac94f4;
  z-index: 10;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;

  ${media_queries.tablet`
    font-weight: 500;
    justify-content: center;
    // margin-right: 260px;
  `}

  ${media_queries.phone`
    font-weight: 300;
    justify-content: center;
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

export const IconWrap = styled.span`
    display: flex;
    align-items: center;
    margin-left: 8px;
    font-size: 20px;
`;

const BaseIcon = styled.span`
  margin-left: 8px;
  transition: transform 0.3s ease-in-out;
`;

export const RocketIcon = styled(FaRocket)`
  ${BaseIcon}
`;

export const ArrowIcon = styled(FaArrowAltCircleDown)`
  ${BaseIcon}
`;

export const ButtonIcon = styled(({ $hover, className }) => (
  $hover ? <RocketIcon className={className} /> : <ArrowIcon className={className} />
))`
  color: ${({ $hover }) => $hover ? "#ac94f4" : "inherit"};
  font-size: 24px; 
  &:hover {
    transform: scale(1.1);
  }
  margin-left: 0.4em;
`;

export const FormWrap = styled.form`
  position: relative;
  z-index: 10;

  ${media_queries.tablet`
    order: 1;
  `}
`;

export const HeroContent = styled.div`
  z-index: 22;
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin-top: 150px;
  }
`;

export const TextArea = styled.textarea`
margin-top: 15px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: #ac94f4; /* Optional: Change border color on focus */
  }

  ${media_queries.tablet`
    width: 62%;
  `}

${media_queries.phone`
    width: 100%;
  `}  
`;

export const CommentBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 28px;
`;

export const StyledImage = styled.img`
  position: ${({$position}) => $position || 'absolute'};
  width: ${({$width}) => $width || 'auto'};
  height: ${({$height}) => $height || 'auto'};
  top: ${({$top}) => $top || 'auto'};
  right: ${({$right}) => $right || 'auto'};
  left: ${({$left}) => $left || 'auto'};
  bottom: ${({$bottom}) => $bottom || 'auto'};
  z-index: ${({$zIndex}) => $zIndex || 'auto'};
  transform: ${({$transform}) => $transform || 'none'};
  border-radius: ${({$borderRadius}) => $borderRadius || '0'};
  border: ${({$border}) => $border || 'none'};
  `;

export const StyledIframe = styled.iframe`
max-width: 455px;
width: 100%;
height: 455px;
position: relative;
z-index: 1;
order: 2;
margin-bottom: 16px;
border-radius: 10px;

${media_queries.largeTablet`
order: 1; 
margin-top: 50px;
`}

${media_queries.tablet`
  width: 100%;
  order: 1;
  margin-bottom: 50px;
`}

${media_queries.smallPhone`
  order: 1;
  width: 95%;
  height: 455px;;
  margin-left: 10px;
`}
`;

export const EarthCanvasContainer = styled.div`
position: absolute;
top: 15%;
left: 2%;
width: 400px;
height: 400px; 
z-index: 2;

${media_queries.tablet`
  width: 200px;
  height: 200px;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`}

${media_queries.phone`
  width: 200px;
  height: 200px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`}
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const DirectiveTextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  position: absolute;
  top: 400px;
  left: 10px;
  z-index: 20;
`;

export const RotateIcon = styled(TbRotate360)`
  margin-left: 125px;
  font-size: 48px;
`;


export const Music = styled.div`
  width: 455px;
  height: auto;
  position: relative;
  margin-right: 10px;
  border-radius: 10px;
  border: 2px solid #ac94f4;
  z-index: 10;

  ${media_queries.tablet`
    width: 455px;
    height: auto
  `}

${media_queries.phone`
    width: 100%;
    height: auto
  `}
`;

export const PlanetMapWrapper = styled.div`
  position: relative;
  z-index: 4;
  max-width: 100%;
  height: auto;
  margin: 0 auto;

  ${media_queries.tablet`
    display: none;
  `}
`;

export const ResponsiveImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  background-position: center;
  background-image: url(${({$desktopUrl}) => $desktopUrl});
  background-size: cover;

  ${media_queries.phone`
    background-image: url(${({$mobileUrl}) => $mobileUrl});
  `}

  ${media_queries.smallPhone`
    background-image: url(${({$smallMobileUrl}) => $smallMobileUrl});
  `}
`;