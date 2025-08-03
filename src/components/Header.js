import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config.json'; // Ensure the correct path to your config file
import '../styles/Header.css';

/**
 * Header Component
 *
 * A reusable component that renders the main navigation bar for the application.
 * It dynamically generates navigation links based on the routes defined in the `config.json` file.
 *
 * @component
 * @returns {JSX.Element} - The rendered header component.
 *
 * @example
 * // Example usage in App.js
 * import Header from './components/Header';
 *
 * function App() {
 *   return (
 *     <Router>
 *       <Header />
 *       <Routes>
 *         <Route path="/home" element={<Home />} />
 *         <Route path="/about" element={<About />} />
 *       </Routes>
 *     </Router>
 *   );
 * }
 */
const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-title">
          <img 
            src="/simpleblog/images/travel.jpeg" 
            alt="Travel" 
            className="header-travel-photo" 
            style={{ verticalAlign: 'middle', height: '8em' }} 
          />
          <h1 style={{ display: 'inline', marginRight: '10px' }}> Jermingo</h1>
        </div>
        {/* The main navigation bar */}
        <nav className="nav-bar" aria-label="Main Navigation">
          {/* Dynamically generating navigation links from the config.json file */}
          {Object.keys(config).map((path) => (
            <Link key={path} to={path} className="nav-link">
              {config[path].title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;