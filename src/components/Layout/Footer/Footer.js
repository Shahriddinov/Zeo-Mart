import React from 'react';
import call from "../../../assets/images/call.png"
import email from "../../../assets/images/mail.png"
import facebook from "../../../assets/images/icon/facebook.png"
import twitter from "../../../assets/images/icon/twitter.png"
import instagram from "../../../assets/images/icon/instagram.png"
import linkedin from "../../../assets/images/icon/linkedin.png"
import apple from "../../../assets/images/icon/apple-logo.png"
import android from "../../../assets/images/icon/android (1).png"
function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_footerTitle">Subscribe and get 20% discount.</div>
                <form className="footer_footerInput">
                    <input className="footer_footerInput_Ints" placeholder="Your email address" type="text"/>
                    <button className="hoverButton" style={{height:"60px"}} type="submit">Subscribe</button>
                </form>
                <div className="footer_socialCard">
                    <div className="footer_socialCard_socialBox">
                        <div className="footer_socialCard_socialBox_fed">Contact Us</div>
                       <div className="footer_socialCard_socialBox_ImgBoxx">
                           <img className="footer_socialCard_socialBox_ImgBoxx_calls" src={call} alt=""/>
                           <div className="footer_socialCard_socialBox_ImgBoxx_textt">
                               Monday-Friday: 08am-9pm
                               <span className="footer_socialCard_socialBox_ImgBoxx_textt_lits">Monday-Friday: 08am-9pm</span>
                           </div>
                       </div>
                        <div className="footer_socialCard_socialBox_ImgBoxx">
                           <img className="footer_socialCard_socialBox_ImgBoxx_calls" src={email} alt=""/>
                           <div className="footer_socialCard_socialBox_ImgBoxx_textt">
                               Need help with your order?
                               <span className="footer_socialCard_socialBox_ImgBoxx_textt_lits">support@zeomart.com</span>
                           </div>
                       </div>

                    </div>
                    <div className="footer_socialCard_socialBox">
                        <div className="footer_socialCard_socialBox_fed"> About Zenmart</div>
                        <div className="footer_socialCard_socialBox_ImgBoxx">
                           <div className="footer_socialCard_socialBox_ImgBoxx_s">
                               <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Track Your Order </div>
                               <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Product Guides</div>
                               <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Wishlists</div>
                               <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Privacy Policy</div>
                               <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Store Locator</div>
                           </div>
                        </div>

                    </div>
                    <div className="footer_socialCard_socialBox">
                        <div className="footer_socialCard_socialBox_fed">Customer Support</div>
                        <div className="footer_socialCard_socialBox_ImgBoxx">
                            <div className="footer_socialCard_socialBox_ImgBoxx_s">
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Contact Us </div>
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Help Centre</div>
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Returns & Exchanges</div>
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Best Buy Financing</div>
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Best Buy Gift Card</div>
                            </div>
                        </div>

                    </div>
                    <div className="footer_socialCard_socialBox">
                        <div className="footer_socialCard_socialBox_fed">Services</div>
                        <div className="footer_socialCard_socialBox_ImgBoxx">
                            <div className="footer_socialCard_socialBox_ImgBoxx_s">
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Geek Squad</div>
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">In-Home Advisor</div>
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Trade-In Program</div>
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Electronics Recycling</div>
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter">Best Buy Health</div>
                            </div>
                        </div>

                    </div>
                    <div className="footer_socialCard_socialBox">
                        <div className="footer_socialCard_socialBox_fed">Follow us</div>
                        <div className="footer_socialCard_socialBox_ImgBoxx">
                            <div className="footer_socialCard_socialBox_ImgBoxx_s">
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formIcon">
                                    <img src={facebook} alt=""/>
                                    <img src={twitter} alt=""/>
                                    <img src={instagram} alt=""/>
                                    <img src={linkedin} alt=""/>
                                </div>
                                <div className="footer_socialCard_socialBox_fed">Mobile Apps</div>
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter_fle">
                                    <img style={{objectFit:"contain"}} src={apple} alt=""/>
                                    <div >iOS App</div>
                                </div>
                                <div className="footer_socialCard_socialBox_ImgBoxx_s_formCenter_fle">
                                    <img style={{objectFit:"contain"}} src={android} alt=""/>
                                    <div >Android App</div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;