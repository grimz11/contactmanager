import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const {branding} = props;
  
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">{branding}</Link>
        <div>
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"><i className="fas fa-home"></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link"><i className="fas fa-plus"></i> Add</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><i className="fas fa-question"></i> About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

Header.defaultProps = {
  branding: 'My App'
}; //set defaultProps

Header.propTypes = {
  branding: PropTypes.string.isRequired
}; // validate the prop types

//const headingStyle = {
//  color: 'green',
//  fontSize: '50px'
//}; //create styles

export default Header;