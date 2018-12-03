import React from 'react';
import ReactDOM from 'react-dom';

import './button.scss';

class Button extends React.Component {
  render() {
    return (
        <button type="button" className={"btn btn-default " + this.props.btnClasses}>{this.props.btnLabel}</button>
      )
  }
}

export default Button;
