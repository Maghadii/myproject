import React from 'react'

const Pricing = () => {
    return (
        <>
            <div className="container-fluid sec pricing-popup">
                <div className="container">
                    <div className="pricing-inner">
                        <div className="heading mx-auto">
                            <h6 className="text-center">Mortgage Details</h6>
                            <p className="text-center">Use this calculator to estimate your monthly mortgage payment,
                                including taxes and insurance. </p>
                        </div>
                        <div className="pricing-popup-inner">
                            <form action="#">
                                <h6>Mortgage Details</h6>
                                <div className="middle-row pt-3">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">Property Value</label>
                                                <div className="input">
                                                    <input type="number" placeholder="$300,000"/>
                                                        <span>$</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">Down Payment</label>
                                                <div className="input">
                                                    <input type="number" placeholder="20%"/>
                                                        <span>$</span>
                                                        <span className="percentage">%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">Mortgage Amount</label>
                                                <div className="input">
                                                    <input type="number" placeholder="$240,000"/>
                                                        <span>$</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">Interest Rate</label>
                                                <div className="input">
                                                    <input type="number" placeholder="5%"/>
                                                        <span>%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">Amortization Period</label>
                                                <div className="input">
                                                    <input type="number" placeholder="30"/>
                                                        <span>Mo</span>
                                                        <span className="percentage">Yr</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">PMI / Year</label>
                                                <div className="input">
                                                    <input type="number" placeholder="30"/>
                                                        <span>Mo</span>
                                                        <span className="percentage">Yr</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">Payment Frequency</label>
                                                <div className="button">
                                                    <button>Monthly</button>
                                                    <button>Bi-weekly</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">Start Month & Year</label>
                                                <div className="input">
                                                    <input type="date" id="date" placeholder="09-jul-2020"/>
                                                        <span><img src="./image/calendar (1) 1.png" htmlFor="date" alt=""/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="pt-5">Homeowner Expenses</h6>
                                <div className="middle-row pt-3">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">One-time Expenses</label>
                                                <div className="input">
                                                    <input type="number" placeholder="3%"/>
                                                        <span>%</span>
                                                        <span className="percentage">$</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">Property Taxes / Year</label>
                                                <div className="input">
                                                    <input type="number" placeholder="1%"/>
                                                        <span>%</span>
                                                        <span className="percentage">$</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">Home Insurance / Year</label>
                                                <div className="input">
                                                    <input type="number" placeholder="0.15%"/>
                                                        <span>$</span>
                                                        <span className="percentage">%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <div className="box-inner">
                                                <label htmlFor="#">HOA Fees / Month</label>
                                                <div className="input">
                                                    <input type="number" placeholder="0%"/>
                                                        <span>$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-btn text-center pt-4">
                                    <div className="btn">
                                        GET A RATE QUOTE
                                        <img src="./image/arrow.png" className="ps-3" alt=""/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing