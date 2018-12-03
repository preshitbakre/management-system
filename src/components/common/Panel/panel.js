import React from 'react';
import ReactDOM from 'react-dom';

import './panel.scss';

class Panel extends React.Component {
  render() {
    return (
      <div className={"card " + this.props.panelClasses}>
        <h5 className="card-header">{this.props.panelTitle}</h5>
        <div className="card-body">
          <p className="card-text">{this.props.panelContent}</p>
          <div className="col-md-3 col-sm-3 col-12">
            <p>Subject: {this.props.subject}</p>
            <p>Start Date: {this.props.startDate}</p>
            <p>End Date: {this.props.endDate}</p>
          </div>
        </div>
      </div>
      )
  }
}

export default Panel;
