import { Container, TextContainer, ImageContainer, Image } from './styled';
import { SectionBackground } from '../section-background';
import { Heading } from '../heading';
import { TextComponent } from '../text-component';
import { SectionContainer } from '../section-container';

interface Props {
  title: string;
  text: string;
  srcImg: string;
  background?: boolean;
  sectionId: string;
}

export const GridTwoColumn = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId,
}: Props) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <SectionContainer>
        <Container>
          <TextContainer>
            <Heading colorDarke={!background} uppercase as="h2">
              {title}
            </Heading>
            <TextComponent>{text}</TextComponent>
          </TextContainer>
          <ImageContainer>
            <Image src={srcImg} alt={title} />
          </ImageContainer>
        </Container>
      </SectionContainer>
    </SectionBackground>
  );
};
