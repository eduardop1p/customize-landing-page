import styled, { css } from 'styled-components';

import { Container as TextComponent } from '../text-component/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${() => css`
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    transition: transform 300ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.blackTransparent};
    visibility: hidden;
    opacity: 0;
    cursor: default;
    transition: visibility 350ms ease-in-out, opacity 350ms ease-in-out;

    &[data-show-modal='true'] {
      visibility: visible;
      opacity: 1;

      & > img {
        transform: scale(1);
      }
    }

    & > img {
      max-width: 550px;
      width: calc(100% - 15rem);
      transform: scale(0.2);
      transition: transform 300ms ease-in-out;
    }
  `}
`;
