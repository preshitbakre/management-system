import React from 'react';
import ReactDOM from 'react-dom';

import './navbar.scss';

class Navbar extends React.Component {
  // constructor(super){
  //
  // }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Management System</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Learnings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Company</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Company</a>
            </li>
          </ul>
        </div>
      </nav>
      )
  }
}

export default Navbar;
