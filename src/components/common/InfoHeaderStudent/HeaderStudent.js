import React from 'react';
import ReactDOM from 'react-dom';

import './../InfoHeader/infoHeader.scss';

class HeaderStudent extends React.Component {
  render() {
    return (
        <div className="container-fluid mt-1">
          <div className="row mx-auto infoHeader">
            <div className="col-md-2 col-sm-3 col-12 image-wrap my-auto mx-auto">
              <img src={this.props.profileImage} />
            </div>
            <div className="col-md-10 col-12 col-sm-10 my-auto details-wrap">
              <div className="row">
                <div className="col-md-4 col-sm-4 col-12">
                  <p>Name: {this.props.userName}</p>
                  <p>Class: {this.props.classIn}</p>
                  <p>Roll No.: {this.props.roll_no}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      )
  }
}

export default HeaderStudent;
