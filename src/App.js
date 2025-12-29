import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Global.css';
import BlogDetails from './components/BlogDetails';
import Header from './components/Header';

// Dynamically import all components from the pages folder
const pages = {};
const context = require.context('./pages', false, /\.js$/);

context.keys().forEach((key) => {
  const componentName = key.replace('./', '').replace('.js', '');
  pages[componentName] = context(key).default;
});

function App() {
  return (
    <Router>
          <Header />
          <Routes>
            <Route path="/" element={ <pages.Home/>}/>
            <Route path="/blogWriting" element={ <pages.BlogWriting/>}/>
            <Route path="/home" element={ <pages.Home/>}/>
            <Route path="/about" element={ <pages.About/>}/>
            <Route path="/contact" element={ <pages.Contact/>}/>
            <Route path="/blog/:url" element={<BlogDetails />} /> 
            <Route path="/privacy" element={ <pages.PrivacyPolicy/>}/>
        </Routes>
    </Router>
  );
}

export default App;