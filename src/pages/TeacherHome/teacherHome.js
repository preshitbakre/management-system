import React from 'react';
import ReactDOM from 'react-dom';

import './teacherHome.scss';

import Navbar from './../../components/common/Navbar/navbar';
import InfoHeader from './../../components/common/InfoHeader/infoHeader';
import Button from './../../components/common/Button/button.js';
import Tabs from './../../components/common/Tabs/tabs.js';
import Footer from './../../components/common/Footer/Footer.js';

class TeacherHome extends React.Component {
  render() {
    return (
        <div>
          <Navbar />
          <InfoHeader
            profileImage="http://via.placeholder.com/120x120"
            userName="Name Here"
            subjects="English, Maths, Science"
            noOfYears="5"
            classTeacher="10"
            noOfStudents="35"
          />
          <div className="container-fluid">
            <Button
              btnLabel="Student List"
              btnClasses="ml-1 col-md-2 col-sm-2 col-5"
            />
            <Button
              btnLabel="Write Blog"
              btnClasses="ml-1 col-md-2 col-sm-2 col-5"
            />
          </div>
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

export default TeacherHome;
