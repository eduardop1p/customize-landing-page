// function
export const mapData = (apiData: any) => {
  return apiData.map((data: any) => {
    const { footer_text, slug, title, sections, menu } = data;
    return {
      footerHtml: footer_text,
      slug,
      title,
      sections: sections.map((section: any) => {
        return {
          component: section.__component,
          id: section.id,
          title: section.title,
          description: section.description ? section.description : '',
          metadata: {
            sectionId: section.metadata.length
              ? section.metadata[0].section_id
              : section.metadata.section_id,
            background: section.metadata.length
              ? section.metadata[0].background
              : section.metadata.background,
          },
          image: {
            srcImg: section.image ? section.image.data.attributes.url : '',
          },
          content: section.content ? section.content : '',
          gridImg: section.image_grid
            ? section.image_grid.map((grid: any) => {
                return {
                  altText: (grid.image.data[0].attributes.alternativeText = ''),
                  srcImg: grid.image.data[0].attributes.url,
                };
              })
            : [],
          gridText: section.text_grid
            ? section.text_grid.map((grid: any) => {
                return {
                  title: grid.title,
                  description: grid.description,
                };
              })
            : [],
        };
      }),
      menu: {
        link: menu.logo_link,
        text: menu.logo_text,
        srcImg: menu.logo.data ? menu.logo.data.attributes.url : '',
        links: menu.menu_links.map((link: any) => {
          return {
            text: link.link_text,
            link: link.url,
            newTab: link.open_in_new_tab,
          };
        }),
      },
    };
  });
};
