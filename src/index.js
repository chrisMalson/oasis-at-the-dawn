import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { BookNowPopup } from './components/BookNow';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import reportWebVitals from './reportWebVitals';
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <Info />
      <BookNowPopup />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

