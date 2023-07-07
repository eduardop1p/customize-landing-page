import { ReactNode } from 'react';

import { Container } from './styled';

interface Props {
  children: ReactNode;
  background?: boolean;
  sectionId?: string;
}

const re = /[^a-z0-9-_]/gi;
const random = () => `id-${Math.random() * 10000}`.replace(re, '-');

export const SectionBackground = ({
  children,
  background,
  sectionId,
}: Props) => {
  const id = sectionId ? sectionId : random();
  return (
    <Container id={id} $background={background}>
      {children}
    </Container>
  );
};
