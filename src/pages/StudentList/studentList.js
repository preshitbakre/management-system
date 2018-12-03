import React from 'react';
import ReactDOM from 'react-dom';

import './studentList.scss';

import Navbar from './../../components/common/Navbar/navbar';
import StudentCard from './../../components/common/StudentCard/studentCard.js';
import Footer from './../../components/common/Footer/Footer.js';

var temArray = [1,2,3,4,5,6,7,8];

class StudentList extends React.Component {
  render() {
    return (
        <div>
          <Navbar />
          <div className="container-fluid">
          <form className="form-inline mt-2">
            <input className="form-control ml-2 mr-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
            <div className="row">
              {temArray.map((item,i) =>
                <StudentCard key={i}
                name="Name Here"
                classIn="10"
                roll = "50"
                />
              )}
            </div>
          </div>
          <Footer />
        </div>
      );
  }
}

export default StudentList;
