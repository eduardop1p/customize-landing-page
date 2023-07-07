import { ReactNode } from 'react';

import { Container } from './styled';

interface Props {
  children: ReactNode;
  link: string;
  newTab?: boolean;
}

export const MenuLink = ({ children, link, newTab }: Props) => {
  return (
    <Container href={link} target={newTab ? '_blank' : '_self'}>
      {children}
    </Container>
  );
};
