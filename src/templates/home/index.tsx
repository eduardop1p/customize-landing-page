/* eslint-disable react/no-children-prop */

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Base } from '../base';
import config from '../../config';

import { mapData } from '../../api/map-data';
import { PageNotFound } from '../page-not-found';
import { Loading } from '../loading';
import { GridTwoColumn } from '../../components/grid-two-column';
import { GridContent } from '../../components/grid-content';
import { GridImage } from '../../components/grid-image';
import { GridText } from '../../components/grid-text';

export default function Home() {
  const [data, setData] = useState<any>([]);

  const location = useLocation();

  useEffect(() => {
    const re = /[^a-z0-9-_]/gi;
    const pathName = location.pathname.replace(re, '');
    const slug = pathName ? pathName : config.defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(`${config.url}&filters[slug][$eq]=${slug}`);
        const dataJson = await data.json();
        const pageData = mapData([dataJson.data[0].attributes]);
        setData(pageData[0]);
      } catch (err) {
        // console.log(err);
        setData(undefined);
      }
    };

    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = 'Página não encontrada';
      return;
    }
    if (data && !data.slug) {
      document.title = 'Carregando...';
      return;
    }
    if (data && data.title) {
      document.title = data.title;
      return;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <>
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section: any, index: number) => {
          const { component, metadata } = section;
          const key = `${component}-${section.id}-${index}`;
          const sectionId = metadata.sectionId;
          if (component === 'section.section-two-columns')
            return (
              <GridTwoColumn
                key={key}
                sectionId={sectionId}
                srcImg={section.image.srcImg}
                text={section.description}
                title={section.title}
                background={section.metadata.background}
              />
            );

          if (component === 'section.dectio-content')
            return (
              <GridContent
                sectionId={sectionId}
                key={key}
                html={section.content}
                title={section.title}
                background={section.metadata.background}
              />
            );

          if (component === 'section.section-grid')
            return section.gridImg.length ? (
              <GridImage
                key={key}
                sectionId={sectionId}
                description={section.description}
                grid={section.gridImg}
                title={section.title}
                background={section.metadata.background}
              />
            ) : (
              <GridText
                key={key}
                sectionId={sectionId}
                description={section.description}
                grid={section.gridText}
                title={section.title}
                background={section.metadata.background}
              />
            );
        })}
      </Base>
    </>
  );
}
