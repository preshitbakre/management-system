import React from 'react';
import ReactDOM from 'react-dom';

import './login.scss';

import Navbar from './../../components/common/Navbar/navbar';
import Footer from './../../components/common/Footer/Footer.js';
import LoginForm from './../../components/loginModule/loginForm/loginForm.js';
import Branding from './../../components/loginModule/branding/branding.js';

class Login extends React.Component {
  render() {
    return (
        <div>
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <Branding />
              <LoginForm />
            </div>
          </div>

          <Footer />
        </div>
      );
  }
}

export default Login;
