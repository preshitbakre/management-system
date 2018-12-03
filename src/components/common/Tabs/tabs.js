import React from 'react';
import ReactDOM from 'react-dom';

import './tabs.scss';

import Button from './../Button/button.js';
import Panel from './../Panel/panel.js';


class Tabs extends React.Component {
  render() {
    return (
      <div className={"mt-2 "+ this.props.tabclasses} >
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id={this.props.tab1 +"-tab"} data-toggle="tab" href={"#"+this.props.tab1} role="tab" aria-controls={this.props.tab1} aria-selected="true">{this.props.tab1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id={this.props.tab2 +"-tab"} data-toggle="tab" href={"#"+this.props.tab2} role="tab" aria-controls={this.props.tab2} aria-selected="true">{this.props.tab2}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id={this.props.tab3 +"-tab"} data-toggle="tab" href={"#"+this.props.tab3} role="tab" aria-controls={this.props.tab3} aria-selected="true">{this.props.tab3}</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id={this.props.tab1} role="tabpanel" aria-labelledby={this.props.tab1 +"-tab"}>
            <Button
              btnLabel="Add new Assignment"
              btnClasses="mt-2 col-md-3 col-sm-3 col-5"
            />
            <Panel
              panelClasses="mt-1"
              panelTitle="Assignment 1"
              panelContent="Some Random Text Here Some Random Text Here Some Random Text Here Some Random Text Here"
              subject="English"
              startDate="12-10-2018"
              endDate="12-10-2018"
            />
          </div>
          <div className="tab-pane fade show" id={this.props.tab2} role="tabpanel" aria-labelledby={this.props.tab2 +"-tab"}>
          <Button
            btnLabel="Add new Quiz"
            btnClasses="mt-2 col-md-3 col-sm-3 col-5"
          />
          <Panel
            panelClasses="mt-1"
            panelTitle="Quiz 1"
            panelContent="Some Random Text Here Some Random Text Here Some Random Text Here Some Random Text Here"
            subject="English"
            startDate="12-10-2018"
            endDate="12-10-2018"
          />
          </div>
          <div className="tab-pane fade show" id={this.props.tab3} role="tabpanel" aria-labelledby={this.props.tab3 +"-tab"}>
          <Button
            btnLabel="Add new Project"
            btnClasses="mt-2 col-md-3 col-sm-3 col-5"
          />
          <Panel
            panelClasses="mt-1"
            panelTitle="Project 1"
            panelContent="Some Random Text Here Some Random Text Here Some Random Text Here Some Random Text Here"
            subject="English"
            startDate="12-10-2018"
            endDate="12-10-2018"
          />
          </div>
        </div>
      </div>
      )
  }
}

export default Tabs;
