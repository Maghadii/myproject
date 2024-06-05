import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="container-fluid hero-section">
                <div className="container">
                    <div className="hero-inner d-flex flex-column align-items-center">
                        <h1>Get a fantastic mortgage rate</h1>
                        <p>Start the process by requesting a custom digital rate quote now!</p>
                        <div className="btn">
                            <a href="#">
                                GET A RATE QUOTE
                                <img src="./image/arrow.png" className="ps-3" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner