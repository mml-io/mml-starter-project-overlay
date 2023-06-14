import { ScopedCssBaseline, ThemeProvider } from "@mui/material";
import { Global, css } from "@emotion/react";

import theme from "./theme";

import Overlay from "./components/Overlay";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* Global style of root container */}
        <Global
          styles={css`
            #mml-starter-project-overlay {
              overflow: hidden;
              position: fixed;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              pointer-events: none;
              display: flex;
              z-index: 99999;
            }

            .MuiScopedCssBaseline-root {
              flex: 1;
              background-color: transparent !important;
            }
          `}
        />
        <ScopedCssBaseline>
          <Overlay />
        </ScopedCssBaseline>
      </>
    </ThemeProvider>
  );
};

export default App;
