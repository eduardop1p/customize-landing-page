import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../text-component/styled';
import { Container as SectionContainer } from '../section-container/styled';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.small};
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }

    & ${SectionContainer} {
      padding: 0 ${theme.spacings.large};
    }
  `}
`;
