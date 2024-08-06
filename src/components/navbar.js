import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

const Navbar = (props) => {
  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src="/logo.jpg" // Path to logo in the public folder
          className="navbar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          {/* Removed all links and buttons */}
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-top">
            <img
              alt={props.logoAlt}
              src="/logo.jpg" // Path to logo in the public folder
              className="navbar-logo"
            />
            <div data-thq="thq-close-menu" className="navbar-close-menu">
              <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          {/* Removed all links and buttons */}
        </div>
      </header>
    </header>
  );
};

Navbar.defaultProps = {
  logoAlt: 'Midwater South Logo',
};

Navbar.propTypes = {
  logoAlt: PropTypes.string,
};

export default Navbar;

