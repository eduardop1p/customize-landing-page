import { ReactNode } from 'react';

import { Container } from './styled';
import { Menu } from '../../components/menu';
import { LogoData } from '../../components/menu';
import { Footer } from '../../components/footer';
import { GoTop } from '../../components/go-top';

export interface Links {
  text: string;
  link: string;
  newTab: boolean;
}
interface Props {
  links: Links[];
  logoData: LogoData;
  footerHtml: string;
  children?: ReactNode;
}

export const Base = ({ links = [], logoData, footerHtml, children }: Props) => {
  return (
    <>
      <Menu logoData={logoData} links={links} />
      <Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Container>
      <GoTop />
    </>
  );
};
