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
          '#app *:not([role="alert"], [aria-invalid="true"])': {
            color: '#202020'
          },
          // Utils
          '#app .autour-one': {
            fontFamily: 'Autour-One'
          },
          '#app .width-100': {
            width: '100%'
          },
          '#app .font-weight-normal': {
            fontWeight: 400
          },
          '#app .font-weight-medium': {
            fontWeight: 500
          },
          // Asterisk
          '#app .asterisk-5': {
            fontFamily: 'autour-one',
            display: 'inline'
          },
          '#app .asterisk-6': {
            fontFamily: 'mono',
            display: 'inline'
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
          },
          // Select
          '#app .mantine-Select-rightSection svg': {
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`
          },
          '#app .mantine-Select-rightSection svg path': {
            display: 'none'  
          },
          '#app .mantine-Select-dropdown .mantine-Select-item:first-child': {
            display: 'none'
          },
          // Buttons
          '#app .button-small': {
            fontWeight: 500,
            borderRadius: '8px',
            paddingLeft: '12px',
            paddingRight: '12px',
            height: '34px'
          },
          '#app .button-tall': {
            fontWeight: 400,
            borderRadius: '8px',
            paddingLeft: '12px',
            paddingRight: '12px',
            height: '42px'
          },
          '#app .button-black': {
            backgroundColor: '#000000',
            borderColor: '#000000',
            '&:hover': {
              backgroundColor: '#202020',
              borderColor: '#000000'
            }
          },
          '#app .button-black *': {
            color: '#ffffff'
          },
          '#app .button-white': {
            backgroundColor: '#ffffff',
            borderColor: '#e9eaef',
            '&:hover': {
              backgroundColor: '#f3f4f9',
              borderColor: '#e9eaef'
            }
          },
          '#app .button-white *': {
            color: '#4f5b65'
          },
          // Input
          '#app input:disabled': {
            backgroundColor: '#f3f4f9',
            color: '#202020',
            opacity: 1
          },
          '#app :not(.mantine-InputGroup-group) input:not(:disabled, [aria-invalid="true"]), #app .mantine-InputGroup-group, #app textarea:not([aria-invalid="true"])': {
            borderColor: '#e9eaef',
            boxShadow: '0px 2px 2px 0px #f3f4f9'
          },
          '#app :not(.mantine-InputGroup-group) input:not(:disabled)[aria-invalid="true"], #app textarea[aria-invalid="true"]': {
            boxShadow: '0px 2px 2px 0px rgba(250, 82, 82, 0.2)'
          },
          '#app :not(.mantine-InputGroup-group) input, #app .mantine-InputGroup-group, #app textarea': {
            borderRadius: '10px'
          },
          '#app ::placeholder:not([role="alert"], [aria-invalid="true"])': {
            color: '#8e969d'
          },
          // Colors
          '#app .text-black': {
            color: '#202020'
          },
          '#app .text-grey': {
            color: '#8e969d'
          },
          '#app .text-steel': {
            color: '#4f5b65'
          },
          '#app .text-white': {
            color: '#ffffff'
          },
          '#app .border-black': {
            borderColor: '#000000'
          },
          '#app .border-grey': {
            borderColor: '#e9eaef'
          },
          '#app .background-black': {
            backgroundColor: '#000000'
          },
          '#app .background-grey': {
            backgroundColor: '#f4f5f9'
          },
          '#app .background-white': {
            backgroundColor: '#ffffff'
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
