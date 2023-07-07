import { Container } from './styled';
import { MenuLink } from '../menu-link';
import { Links } from '../../templates/base';

interface Props {
  links: Links[];
}

export const NavLink = ({ links }: Props) => {
  return (
    <Container>
      {links?.map((link, index: number) => (
        <MenuLink key={index} {...link}>
          {link.text}
        </MenuLink>
      ))}
    </Container>
  );
};
