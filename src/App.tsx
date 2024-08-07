import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './index.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router >
      <Footer />

    </div>
  );
}

export default App;
