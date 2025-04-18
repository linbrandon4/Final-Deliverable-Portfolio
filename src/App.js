// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '~/src/theme';
import NavBar from './components/navBar';
import UIControls from './components/uiControls';
import MainScene from './mainScene';
import WebScraper from './pages/WebScraper';
import ReScraper from './pages/ReScraper';
import MachineLearning from './pages/MachineLearning';
import ImageAnalyzer from './pages/ImageAnalyzer';
import ExcelFiles from './pages/ExcelFiles';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <UIControls />
        <Routes>
          <Route path="/" element={<MainScene />} />
          <Route path="/webscraper" element={<WebScraper />} />
          <Route path="/re-scraper" element={<ReScraper />} />
          <Route path="/machine-learning-model" element={<MachineLearning />} />
          <Route path="/image-analyzer" element={<ImageAnalyzer />} />
          <Route path="/excel-files" element={<ExcelFiles />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
