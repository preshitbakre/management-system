import React from 'react';
import ReactDOM from 'react-dom';

import './admin.scss';

import Navbar from './../../components/common/Navbar/navbar';
import Footer from './../../components/common/Footer/Footer.js';
import AddTeacher from './../../components/adminModule/addTeacher/addTeacher.js';
import AddStudent from './../../components/adminModule/addStudent/addStudent.js';


class Admin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isTeacherClicked: false,
      isStudentClicked: false
    }
     this.handleTeacherClick = this.handleTeacherClick.bind(this);
     this.handleStudentClick = this.handleStudentClick.bind(this);
  }

  handleTeacherClick(){
      this.setState({"isTeacherClicked": true, "isStudentClicked": false});
  }

  handleStudentClick(){
      this.setState({"isStudentClicked": true, "isTeacherClicked": false});
  }

  render() {
    let pane;
    if (this.state.isTeacherClicked) {
      pane = <AddTeacher />;
    } else if(this.state.isStudentClicked) {
        pane = <AddStudent />;
    }

    return (
        <div>
          <Navbar />
          <div className="container-fluid admin">
            <button className="btn btn-primary" onClick={this.handleTeacherClick}>Add Teacher</button>
            <button className="btn btn-primary" onClick={this.handleStudentClick}>Add Student</button>
            <div className="row ">
              {pane}
            </div>
          </div>

          <Footer />
        </div>
      );
  }
}

export default Admin;
