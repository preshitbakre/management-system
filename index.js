import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './src/styles/style.scss';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';

import TeacherHome from './src/pages/TeacherHome/teacherHome';
import StudentHome from './src/pages/StudentHome/studentHome.js';
import StudentList from './src/pages/StudentList/studentList.js';
import Login from './src/pages/Login/login.js';
import Admin from './src/pages/Admin/admin.js';


class App extends React.Component {
  render() {
    return (
         <div>
            <Admin />
         </div>
      );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
