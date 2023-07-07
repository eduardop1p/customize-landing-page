import { Container, Grid, GridElement } from './styled';
import { SectionBackground } from '../section-background';
import { SectionContainer } from '../section-container';
import { Heading } from '../heading';
import { TextComponent } from '../text-component';

interface TitleDescription {
  title: string;
  description: string;
}
interface Props extends TitleDescription {
  background?: boolean;
  grid: TitleDescription[];
  sectionId: string;
}

export const GridText = ({
  title,
  description,
  background = false,
  grid,
  sectionId,
}: Props) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <SectionContainer>
        <Container>
          <Heading size="huge" uppercase colorDarke={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{description}</TextComponent>
          <Grid>
            {grid?.map((el, index: number) => (
              <GridElement key={index}>
                <Heading size="small" colorDarke={!background} as="h3">
                  {el.title}
                </Heading>
                <TextComponent>{el.description}</TextComponent>
              </GridElement>
            ))}
          </Grid>
        </Container>
      </SectionContainer>
    </SectionBackground>
  );
};
