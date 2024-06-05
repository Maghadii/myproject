import React from 'react';
import Navbar from './Navbar';



const header = () => {
    return (
        <>
            <div className="container-fluid header">
                <div className="header-scroll">
                    <div className="container">
                        <div className="button-inner d-flex align-items-center justify-content-between">
                            <div className="logo">
                                <a className="navbar-brand d-lg-none" href="#"><img src="./image/LOGO.png" alt="" /></a>
                            </div>
                            <div className="bar-btn">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                        <i className="fa-solid fa-bars" id="menu"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <Navbar />
                    </div>
                </div>
            </div>
        </>
    );
};



export default header; 