import { Container } from './styled';
import { Heading } from '../heading';

interface Props {
  text: string;
  srcImg?: string;
  link: string;
}

export const LogoLink = ({ text, srcImg = '', link }: Props) => {
  return (
    <Heading uppercase={false} colorDarke size="small">
      <Container href={link}>
        {srcImg ? <img src={srcImg} alt={text} /> : text}
      </Container>
    </Heading>
  );
};
