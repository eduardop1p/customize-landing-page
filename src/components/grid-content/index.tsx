import { Container, Html } from './styled';
import { SectionBackground } from '../section-background';
import { SectionContainer } from '../section-container';
import { Heading } from '../heading';
import { TextComponent } from '../text-component';

interface Props {
  title: string;
  html: string;
  background?: boolean;
  sectionId: string;
}

export const GridContent = ({
  sectionId,
  title,
  html,
  background = false,
}: Props) => {
  return (
    <SectionBackground sectionId={sectionId} background={background}>
      <SectionContainer>
        <Container>
          <Heading uppercase colorDarke={!background} as="h2">
            {title}
          </Heading>
          <Html>
            <TextComponent html={html} />
          </Html>
        </Container>
      </SectionContainer>
    </SectionBackground>
  );
};
