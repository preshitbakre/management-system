import React from 'react';
import ReactDOM from 'react-dom';

import './teacherHome.scss';

import Navbar from './../../components/common/Navbar/navbar';
import HeaderStudent from './../../components/common/InfoHeaderStudent/HeaderStudent.js';
import Button from './../../components/common/Button/button.js';
import Tabs from './../../components/common/Tabs/tabs.js';
import Footer from './../../components/common/Footer/Footer.js';

class StudentHome extends React.Component {
  render() {
    return (
        <div>
          <Navbar />
          <HeaderStudent
            profileImage="http://via.placeholder.com/120x120"
            userName="Name Here"
            classIn="5"
            roll_no="45"
          />
          <Tabs
            tabclasses="col-md-9 col-sm-9 col-12"
            tab1="Assignments"
            tab2="Quizzes"
            tab3="Projects"
          />
          <Footer />
        </div>
      );
  }
}

export default StudentHome;
