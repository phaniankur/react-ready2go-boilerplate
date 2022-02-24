import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Box from './Components/Library/Box';
import theme from './Components/Library/theme';
import Home from './Pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
