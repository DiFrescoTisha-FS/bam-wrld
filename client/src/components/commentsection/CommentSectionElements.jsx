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

export const SendButton = styled.button`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  background-color: #ac94f4;
  color: #010606; /* Text color */
  padding: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid #ac94f4; /* Adding border here for normal state */

  .icon {
    color: #010606; /* Icon color */
  }

  &:hover {
    background-color: #010606;
    color: #ac94f4; /* Text color on hover */
    border: 2px solid #ac94f4; /* Adding border on hover */

    .icon {
      color: #ac94f4; /* Icon color on hover */
    }
  }
`;

export const RatingContainer = styled.div`

// Adjust this value as needed

  ${media_queries.tablet`
    margin-left: 150px; 
  `}

${media_queries.phone`
    margin-left: 0; 
  `}
`;
