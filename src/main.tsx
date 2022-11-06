import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AutourOneFonts } from './fonts/AutourOne';
import { RobotoFonts } from './fonts/Roboto';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider 
      theme={{ 
        globalStyles: () => ({
          // Main for app
          '#app *': {
            fontFamily: 'Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
          },
          // Utils
          '#app .autour-one': {
            fontFamily: 'Autour-One'
          },
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
      <RobotoFonts />
      <AutourOneFonts />
      <App />
    </MantineProvider>
  </React.StrictMode>
);
