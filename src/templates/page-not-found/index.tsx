import { GridContent } from '../../components/grid-content';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Erro 404"
      html="<p>A página que você busca não foi encontrada. <a href='/'>Click para voltar</a></p>"
    />
  );
};
