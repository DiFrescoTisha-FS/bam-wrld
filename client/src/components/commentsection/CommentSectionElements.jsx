import styled from "styled-components";
import { media_queries } from '../../utils/media_queries';

export const CommentImgWrap = styled.div`
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

export const ResponsiveSectionBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center top;
  background-image: url(${props => props.desktopUrl});

  ${media_queries.phone`
    background-image: url(${props => props.mobileUrl});
    background-position: center top;
  `}

  ${media_queries.smallPhone`
    background-image: url(${props => props.mobileUrl});
    background-position: center top;
  `}
`;

export const CommentSectionContainer = styled.div`
  position: relative;
  padding-top: 20px;

  ${media_queries.phone`
    padding-top: 200px;
  `}

  ${media_queries.smallPhone`
    padding-top: 200px;
  `}
`;
