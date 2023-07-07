import { createGlobalStyle, css } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%; // essa media vai deixar nós trabalhar com rem como se fosse px
    scroll-behavior: smooth !important; // vai deixar nosso scroll com rolagem automatica mais leve
  }


  ${({ theme }) => css`
    body {
      background-color: ${theme.colors.white};
      font-size: 1.6rem; // isso é o que valente a 16px
      font-family: ${theme.font.family.default};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.font.family.secondary};
      margin: ${({ theme }) => theme.spacings.large} 0;
    }
  `}

  p{
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol{
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a{
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table{
    width: 100%;
    overflow-y: auto;
  }
`;

export default GlobalStyled;
