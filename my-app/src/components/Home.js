import React, {Component} from 'react';
import './Home.css';
import Content from './Content/Content';

class Home extends Component {
    render() {
        return (
            <div className="home">

                <div className="pos-f-t">
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-4">
                            <h5 className="text-white h4">Collapsed content</h5>
                            <span className="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    <nav className="navbar navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>

                <Content/>

                <section id="footer">
                    <div className="container">
                        <div className="row text-center text-xs-center text-sm-left text-md-left">
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Quick links</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a><i className="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>About</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>Videos</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Quick links</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a><i className="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>About</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>Videos</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Quick links</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a><i className="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>About</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                                    <li><a title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                <ul className="list-unstyled list-inline social text-center">
                                    <li className="list-inline-item"><a><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a><i className="fa fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a target="_blank"><i
                                        className="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Home;
