import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import About from './About.jsx';
import  Test1  from './Test1.jsx';
import  Test2  from './Test2.jsx';
import Login from './Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
);
