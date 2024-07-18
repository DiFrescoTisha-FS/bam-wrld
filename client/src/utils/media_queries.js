// utils/media_queries.js

import { css } from 'styled-components';

const sizes = {
  largeDesktop: 1500,
  desktop: 1100,
  largeTablet: 1024,
  tablet: '768px',
  phone: '576px',
  smallPhone: '480px',
};

export const media_queries = {
  largeDesktop: (...args) => css`
    @media (max-width: ${sizes.largeDesktop}) {
      ${css(...args)}
    }
  `,

  desktop: (...args) => css`
    @media (max-width: ${sizes.desktop}) {
      ${css(...args)}
    }
  `,

  largeTablet: (...args) => css`
    @media (max-width: ${sizes.largeTablet}) {
      ${css(...args)}
    }
  `,

  tablet: (...args) => css`
    @media (max-width: ${sizes.tablet}) {
      ${css(...args)}
    }
  `,
  phone: (...args) => css`
    @media (max-width: ${sizes.phone}) {
      ${css(...args)}
    }
  `,
  smallPhone: (...args) => css`
    @media (max-width: ${sizes.smallPhone}) {
      ${css(...args)}
    }
  `,
};
