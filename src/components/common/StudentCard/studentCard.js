import React from 'react';
import ReactDOM from 'react-dom';

import './studentCard.scss';

class StudentCard extends React.Component {
  render() {
    return (
      <div className="col-md-3 col-sm-3 col-12 mt-3 studentCard">
        <div className="card mx-auto">
          <img className="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">Class: {this.props.classIn}</p>
            <p className="card-text">Roll No.: {this.props.roll}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      )
  }
}

export default StudentCard;
