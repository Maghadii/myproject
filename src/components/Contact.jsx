import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container-fluid sec get-in-touch">
                <div className="container">
                    <div className="get-in">
                        <div className="heading text-center mx-auto">
                            <h2 className="text mx-auto">Get in Touch</h2>
                            <p className="para px-5">We’d love to hear from you! Use this form to contact us.
                                We’ll follow up fast, typically within 10 minutes.</p>
                        </div>
                        <div className="form-box">
                            <div className="row form-inn">
                                <div className="col-12 text-center lg-text-start col-lg-6">
                                    <div className="cta-call link">
                                        <h6>Have any questions?</h6>
                                        <span><a href="tel:+91 9898989898">(586) 945-3424</a></span>
                                    </div>
                                    <div className="email link">
                                        <h6>Mail us</h6>
                                        <span><a href="mailto:info@theballyteam.com">info@theballyteam.com</a></span>
                                    </div>
                                    <div className="social-link link">
                                        <h6>Follow us</h6>
                                        <span>
                                            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                            <a
                                                href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569849%7Cb%7Cfacebook%20%27%7C&placement=&creative=589460569849&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9062191%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwgNanBhDUARIsAAeIcAugOaJePqq6Wx2G_SaNAmHZhuLAquErq2p7zhQB9vRbxk94F66rcegaArrrEALw_wcB"><i
                                                    className="fa-brands fa-facebook-f"></i></a>
                                            <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="form-inner">
                                        <h6>Have any questins?</h6>
                                        <form action="#" >
                                            <input type="text" placeholder="Your name" />
                                            <input type="email" placeholder="Your Email" />
                                            <textarea name="#" id="#"
                                                placeholder="Fill the form and we will contact with you soon" cols="30"
                                                rows="5"></textarea>
                                            <button className="text-white">SENT</button>
                                        </form>
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

export default Contact


