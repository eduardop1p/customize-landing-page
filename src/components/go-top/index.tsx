import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

import { Container } from './styled';

export const GoTop = () => {
  return (
    <Container href="#" aria-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </Container>
  );
};
