import React from 'react';
import "./index.css";
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row ">

                    <div className='col-5 d-none d-md-block'>
                        <h1 className="home-text-1 homeScreen-title">WANT TO EAT HEALTHY?</h1>
                        <h3 className="home-text-2 homeScreen-subTitle">Join our community to cook fresh meal at home!</h3>
                        <br></br>
                        <div className="d-flex justify-content-center">
                            <Link to="/search">
                            <button type="button" className="rounded-pill btn btn-warning btn-lg"><i
                                className="bi bi-search"></i> Search for a Meal!</button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-5 col-xs-10 first-img-border">
                        <div>
                            <img src="../../../images/egg.jpg"
                                 className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row img-ys2">
                    <div className="col-2 col-xs-2">

                    </div>
                    <div className="col-5 col-xs-10">
                        <div>
                            <img src="../../../images/lamb.jpg"
                                 className="second-img img-fluid" alt=""/>
                        </div>
                    </div>
                </div>

                <br></br>
                <footer className="footer_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 footer-col">
                                <div className="footer_contact">
                                    <h4>
                                        Contact Us
                                    </h4>
                                    <div className="contact_link_box">
                                        <a href="https://github.com/yuhan1212/foodie-react">
                                            <i className="bi bi-github"> </i>
                                            <span>
                                              GITHUB LINK
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 footer-col">
                                <div className="footer_detail">
                                    <a id="footer-logo" href="" className="footer-logo">
                                        Foodie
                                    </a>
                                    <p>
                                        Everything you need to create delicious meals at home is here!
                                    </p>
                                    <div className="footer_social">
                                        <a href="">
                                            <i className="bi bi-facebook me-2"></i>
                                        </a>
                                        <a href="">
                                            <i className="bi bi-twitter me-2" ></i>
                                        </a>
                                        <a href="">
                                            <i className="bi bi-linkedin me-2"></i>
                                        </a>
                                        <a href="">
                                            <i className="bi bi-instagram me-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <br></br>
                        <div className="container text-center">
                            <p>
                                <span><i className="bi bi-c-circle">2023</i> All Rights Reserved By Web 5610</span>
                            </p>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    )
}
export default HomeScreen;