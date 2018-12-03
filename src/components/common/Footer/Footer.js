import React from 'react';

import './footer.scss';

class Footer extends React.Component {
    render(){
        return(
            <footer>
                <div className="footer mt-3" id="footer">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-2  col-md-2 col-sm-4 col-12">
                                <ul>
                                    <li> <a href="#"> About us </a> </li>
                                    <li> <a href="#"> Blog </a> </li>
                                    <li> <a href="#"> Careers </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-2 col-sm-4 col-12">
                                <ul>
                                    <li> <a href="#"> Contact us </a> </li>
                                    <li> <a href="#"> Help & FAQ </a> </li>
                                    <li> <a href="#"> Legal and Privacy </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-2 col-sm-4 col-12">
                                <ul>
                                    <li> <a href="#"> Some Text </a> </li>
                                    <li> <a href="#"> Some Text </a> </li>
                                    <li> <a href="#"> Some Text </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-2 col-sm-4 col-6">
                                <h3> </h3>
                                <ul>
                                    <li>  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container-fluid">
                        <p className="">© 2017-2018  <a href="#">Legal and Privacy</a> </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
