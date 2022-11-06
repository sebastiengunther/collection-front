import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider 
      theme={{ 
        globalStyles: () => ({
          '#app .width-100': {
            width: '100%'
          }
        })
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
