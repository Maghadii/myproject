import React, { useState } from 'react';

const House = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
            <div className="container-fluid sec">
                <div className="container">
                    <div className="heading text-center mx-auto">
                        <h2 className="text mx-auto">Your time & money matter. Let's not waste either.</h2>
                        <p className="para md-px-5">From fast, custom digital quotes to a completely streamlined online loan
                            application and approval process, you can get your money and do what
                            you want with it — usually in less than 30 days.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid sec">
                <div className="container">
                    <div className="buy-house">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="house-img">
                                    <img src="./image/Mask Group.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="house-inner-text">
                                    <h6 className="mb-4">Ready to buy
                                        a house</h6>
                                    <p>Secure a home purchase loan that leverages today’s great mortgage rates to make your
                                        dream home affordable. Start
                                        by getting your free, no-obligation pre-approval letter!</p>
                                    <div className="btn">
                                        <a href="#">
                                            GET A RATE QUOTE
                                            <img src="./image/arrow.png" className="ps-3" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid sec">
                <div className="container">
                    <div className="heading text-center mx-auto">
                        <h2 className="text mx-auto px-5">A home refinance can give you more options</h2>
                        <p className="para px-3">Refinancing could save you a considerable amount of money over the life
                            of your loan and potentially improve your overall financial outlook.</p>
                    </div>
                    <div className="sec">
                        <div className="row">
                            <div className="col-12 col-md-6 d-flex align-items-center">
                                <div className="text-inner list-group" id="list-example">
                                    <ul>
                                        <li className={toggleState === 1 ? "active" : "null"} onClick={() => toggleTab(1)} >
                                            <div className="box pb-4">
                                                <h6>Instant <br />
                                                    Savings</h6>
                                                <p>Refinance to get a lower payment every month </p>
                                            </div>
                                        </li>
                                        <li className={toggleState === 2 ? "active" : "null"} onClick={() => toggleTab(2)} >
                                            <div className="box  border-top border-bottom pt-4">
                                                <h6>Use Your <br />
                                                    Equity</h6>
                                                <p>Your’ve earned it. Use your investment any way you see it</p>
                                            </div>
                                        </li>
                                        <li className={toggleState === 3 ? "active" : "null"} onClick={() => toggleTab(3)} >
                                            <div className="box pt-4">
                                                <h6>Update <br />
                                                    Your Home</h6>
                                                <p>Receive flexibility to update your home’s look and value</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="tab-content">
                                    <div className={toggleState === 1 ? "tab-pane active" : "tab-pane"} >
                                        <img src="./image/Mask Group (1).jpg" alt="" />
                                    </div>
                                    <div className={toggleState === 2 ? "tab-pane active" : "tab-pane"} >
                                        <img src="./image/Mask Group.jpg" alt="" />
                                    </div>
                                    <div className={toggleState === 3 ? "tab-pane active" : "tab-pane"}>
                                        <img src="./image/Mask Group (1).jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid sec">
                <div className="container">
                    <div className="buy-house">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="house-img">
                                    <img src="./image/Pict.png" alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="house-inner-text down-img">
                                    <h6 className="mb-4">Get a loan without the hassle</h6>
                                    <p>We’re here to make the home loan process easier, with tools and knowledge that will help
                                        guide you along the way. Start with a fast, personalized rate quote.</p>
                                    <div className="btn">
                                        <a href="#">
                                            GET A RATE QUOTE
                                            <img src="./image/arrow.png" className="ps-3" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default House