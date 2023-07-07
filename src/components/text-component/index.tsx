/* eslint-disable react/no-danger-with-children */
import { ReactNode } from 'react';

import { Container } from './styled';

interface Props {
  children?: ReactNode;
  html?: string;
}

export const TextComponent = ({ html, children }: Props) => {
  // a prop dangerouslySetInnerHTML do component styled vai injetar uma string html nela
  return html ? (
    <Container dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <Container>{children}</Container>
  );
};
