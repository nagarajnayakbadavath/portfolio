import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Body />
              <Footer />
            </>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  );
};

export default App;

