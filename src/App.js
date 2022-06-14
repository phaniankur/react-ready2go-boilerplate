import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import theme from './Components/Library/theme';
import Des from './Pages/Des';
import Home from './Pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/desbord" element={<Des/>}/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
