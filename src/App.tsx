import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routers from './routes/index.tsx';

import GlobalStyled from './global-styles/index.ts';
import { myTheme } from './global-styles/theme.ts';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <GlobalStyled />
        <Routers />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
