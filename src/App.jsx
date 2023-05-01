import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Error from './pages/Error';
import QuizMusic from './pages/QuizMusic';
import Game from './pages/Game';
import StressDetection from './pages/StressDetection';
import Analysis from './pages/Analysis';
import Chatbot from './components/Chatbot';

const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "850px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <BrowserRouter>
        <Header />
        {/* <Chatbot /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service/quizmusic' element={<QuizMusic />} />
          <Route path='/service/game' element={<Game />} />
          <Route path='/service/stressdetection' element={<StressDetection />} />
          <Route path='/service/analysis' element={<Analysis />} />
          <Route path='*' element= {<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
