import { ReactNode } from 'react';
import { Title } from './styled';

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type Size = 'small' | 'medium' | 'big' | 'huge';

interface Props {
  children?: ReactNode;
  colorDarke?: boolean;
  as?: As;
  size?: Size;
  uppercase?: boolean;
}

export const Heading = ({
  children,
  colorDarke = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
}: Props) => {
  return (
    <Title as={as} $colorDarke={colorDarke} $size={size} $uppercase={uppercase}>
      {children}
    </Title>
  );
};
