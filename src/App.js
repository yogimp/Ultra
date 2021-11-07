import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;