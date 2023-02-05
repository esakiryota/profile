import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ResponsiveDrawer from './navigation.js';
import reportWebVitals from './reportWebVitals';
import Box from '@mui/material/Box';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
const homeUrl = process.env.PUBLIC_URL;
const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Kurenaido',
      'cursive',
    ].join(','),
  },});

root.render(
  <BrowserRouter basename={homeUrl}>
  <ThemeProvider theme={theme}>
    <ResponsiveDrawer />
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
