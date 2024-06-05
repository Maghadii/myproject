import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid  footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-logo">
                        <img src="./image/LOGO.png" alt=""/>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-5 md-mb-0 col-md-4">
                            <div className="address">
                                <p>1050 Wilshire Dr
                                    Suite 300 Troy, MI 48042</p>
                                <a href="tel:+(586) 945-3424">(586) 945-3424</a>
                                <a href="mailto:info@theballyteam.com">info@theballyteam.com</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="row">
                                <div className="col-12 col-sm-4 md-d-flex flex-column align-items-center">
                                    <p>SOCIAL MEDIA</p>
                                    <ul>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Linkedin</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4 mb-4 sm-mb-0 md-d-flex flex-column align-items-center">
                                    <p>COMPANY</p>
                                    <ul>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <p>LEGAL</p>
                                    <ul>
                                        <li><a href="#">Terms of Services</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">NMLS Consumer Access Portal</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="down-footer d-flex justify-content-between">
                    <div className="copy-right">
                        <p>Copyright ©2024 | The Bally Team
                            Licensed In: MI | NMLS #2252871</p>
                    </div>
                    <div className="image-logo">
                        <a href="#"><img src="./image/mobile_bab_aime_logo 1.png" alt=""  /></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer