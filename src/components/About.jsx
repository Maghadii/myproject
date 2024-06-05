import React from 'react'
import Banner from './Banner'
import House from './House'



const About = () => {
    return (
        <>
            <Banner />
            <div className="container-fluid sec team-section">
                <div className="container">
                    <div className="team-inner">
                        <div className="heading text-center mx-auto">
                            <h2 className="text mx-auto">Meet our team</h2>
                            <p className="para md-px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut sagittis mi et lectus efficitur consectetur.</p>

                            <div className="btn">
                                <a href="#">
                                    VIEW MORE
                                    <img src="./image/arrow.png" className="ps-3" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="team-box-inner">
                            <div className="row">
                                <div className="col-12 col-md-4 mb-5 md-mb-0">
                                    <div className="team-box">
                                        <img src="./image/Pict (1).png" alt="" />
                                        <div className="details text-center">
                                            <h6>Amer Bally</h6>
                                            <p>Loan Officer</p>
                                        </div>
                                        <div className="social-icon">
                                            <a href="matito:info@gmail.com"><img src="./image/Vector.svg" alt="" /></a>
                                            <a href="tel:+91 9899089822"><img src="/image/Vector (1).svg" alt="" /></a>
                                            <a href="#"><img src="./image/Vector (2).svg" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-5 md-mb-0">
                                    <div className="team-box">
                                        <img src="./image/Pict (2).png" alt="" />
                                        <div className="details text-center">
                                            <h6>Mardina Elia</h6>
                                            <p>Team Administrator</p>
                                        </div>
                                        <div className="social-icon">
                                            <a href="https://google.com"><img src="./image/Vector (3).svg" alt="" /></a>
                                            <a href="tel:+91 9876543217"><img src="./image/Vector (1).svg" alt="" /></a>
                                            <a href="#"><img src="./image/Vector (2).svg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-5 md-mb-0">
                                    <div className="team-box">
                                        <img src="./image/Pict (3).png" alt="" />
                                        <div className="details text-center">
                                            <h6>Marcus Younan</h6>
                                            <p>Branch Manager</p>
                                        </div>
                                        <div className="social-icon">
                                            <a href="https://google.com"><img src="./image/Vector (3).svg" alt="" /></a>
                                            <a href="tel:+91 9876543217"><img src="./image/Vector (1).svg" alt="" /></a>
                                            <a href="#"><img src="./image/Vector (2).svg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <House />
        </>
    )
}

export default About