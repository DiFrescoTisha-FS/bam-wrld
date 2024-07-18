import styled from 'styled-components';
import { media_queries } from '../../utils/media_queries';

export const ThoughtsImgWrap = styled.div`
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
    order: 2;
    margin-bottom: 0;
  `}

  ${media_queries.smallPhone`
    order: 2;
    margin-bottom: -100px;
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
    background-image: url(${({ $backgroundImageMobileUrl }) => $backgroundImageMobileUrl});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  `}

  ${media_queries.smallPhone`
    background-image: url(${({ $backgroundImageSmallMobileUrl }) => $backgroundImageSmallMobileUrl});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  `}
`;