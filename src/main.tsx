import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider 
      theme={{ 
        globalStyles: () => ({
          // Utils
          '#app .width-100': {
            width: '100%'
          },
          // Anchor
          '#app .anchor': {
            borderBottom: '2px solid',
            borderBottomColor: '#ddd',
            color: '#111',
            fontWeight: 500,
            textDecoration: 'none',
            '&:hover': {
              borderBottomColor: '#eee',
              textDecoration: 'none'
            }
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
