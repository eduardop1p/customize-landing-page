import styled, { css, DefaultTheme } from 'styled-components';
import { Size } from '.';
import { Interpolation } from 'styled-components/dist/types';

interface Props {
  $colorDarke: boolean;
  $size?: Size;
  $uppercase: boolean;
}

type Theme = Pick<DefaultTheme, 'font' | 'media'>;
interface TitleSize {
  small(theme: Theme): Interpolation<object>;
  medium(theme: Theme): Interpolation<object>;
  big(theme: Theme): Interpolation<object>;
  huge(theme: Theme): Interpolation<object>;
}

const titleSize: TitleSize = {
  small({ font }) {
    return css`
      font-size: ${font.sizes.medium};
    `;
  },
  medium({ font }) {
    return css`
      font-size: ${font.sizes.large};
    `;
  },
  big({ font }) {
    return css`
      font-size: ${font.sizes.xlarge};
    `;
  },
  huge({ font }) {
    return css`
      font-size: ${font.sizes.huge};
    `;
  },
};

const mediaFont = ({ font, media }: Theme) => css`
  @media ${media.lteMedium} {
    font-size: ${font.sizes.xlarge};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<Props>`
  ${({ $colorDarke, theme, $size, $uppercase }) => css`
    color: ${$colorDarke ? theme.colors.primaryColor : theme.colors.white};
    ${$size && titleSize[$size](theme)};
    ${titleCase($uppercase)};
    /* ${mediaFont(theme)}; */
  `}
`;
