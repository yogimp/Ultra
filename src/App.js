import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar/>
    </Router>
  );
}

export default App;
