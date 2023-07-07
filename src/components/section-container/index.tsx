import { ReactNode } from 'react';

import { Container } from './styled';

interface Props {
  children: ReactNode;
}

export const SectionContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
