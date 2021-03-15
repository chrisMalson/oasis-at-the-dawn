import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header';
import Description from './components/Description';
import PhotoGallery from './components/PhotoGallery';
import { BookNowPopup } from './components/BookNow';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <TopBar /> */}
      <Header />
      <Description />
      <PhotoGallery />
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


// add black gradient to bottom of hero
// change color of icons
// rip new pictures from ryson site
// edit carousel so that text is overlaid on image with gradient underneath
// do i need a footer? not sure yet
// find a way to center the hero image a little better so more of the building is visible
// also make the hero text larger, but not so much that the text overlaps the building
// figure out best way to arrange components for desktop flow once mobile is all set
// maybe there's a font a little more fun than roboto?

