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
  const imageSrc = `/images/animals/travel.jpeg` 
  return (
    <header className="app-header">
      <div className="header-container">
        <img 
          src={imageSrc} 
          alt="Travel" 
          className="header-travel-photo" 
        />
        <h1 className="header-title">Jermingo</h1>
        <nav className="nav-bar" aria-label="Main Navigation">
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