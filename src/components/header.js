import React, { Component } from 'react';

// Header Component to display navbar and sign in
class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            Sign in
          </li>
        </ul>
      </nav>
    );
  }
}

// export the Header Component
export default Header;
