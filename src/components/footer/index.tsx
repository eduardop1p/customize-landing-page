import { Container } from './styled';
import { TextComponent } from '../text-component';
import { SectionContainer } from '../section-container';

interface Props {
  footerHtml: string;
}

export const Footer = ({ footerHtml }: Props) => {
  return (
    <Container>
      <SectionContainer>
        <TextComponent html={footerHtml} />
      </SectionContainer>
    </Container>
  );
};
