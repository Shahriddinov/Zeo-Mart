import React from 'react';
import "./contact.scss"
import phone from "../../assets/images/call.png";
import message from "../../assets/images/mail.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
function Contact(props) {
    return (
        <>
            <div className="contacts">
                <div className="container">
                    <div className="contacts_lines1">
                        <li>
                            <ul>
                                <a href="#">Home</a>
                            </ul>
                        </li>

                        <li>
                            <ul className="contacts_lines1_lines">
                                <a href="#">Electronics</a>
                            </ul>
                        </li>
                        <li>
                            <ul className="contacts_lines1_lines">
                                <a href="#">Computers</a>
                            </ul>
                        </li>
                        <li>
                            <ul className="contacts_lines1_lines">
                                <a href="#">Desktop Computers</a>
                            </ul>
                        </li>

                    </div>
                </div>

            </div>
            <div className="mapContact">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6131044.253373617!2d64.6085751!3d41.38116805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sUzbekistan!5e0!3m2!1sen!2s!4v1713735171126!5m2!1sen!2s"
                    width="100%" height="600" style={{border:"0"}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="contact">
                    <div className="container">
                       <div className="contact_boxCon">
                           <div className="contact_boxCon_cardCon">
                              <div className="contact_boxCon_cardCon_gets">Get in touch with us <br/> today</div>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut  aliquam <br/>
                                   purus sit amet luctus venenatis lectus.</p>

                               <div className="contact_boxCon_cardCon_iconsCon">
                                   <img className="contact_boxCon_cardCon_iconsCon_phone" src={phone} alt="phone"/>
                                   <div className="contact_boxCon_cardCon_iconsCon_mon">
                                       Monday-Friday: 08am-9pm
                                       <p style={{fontSize:"15px", fontWeight:"400"}}>+(1) 123 456 7890</p>
                                   </div>

                               </div>
                               <div className="contact_boxCon_cardCon_iconsCon">
                                   <img className="contact_boxCon_cardCon_iconsCon_phone" src={message} alt="message"/>
                                   <div className="contact_boxCon_cardCon_iconsCon_mon">
                                       Need help with your order?
                                       <p style={{fontSize: "15px", fontWeight: "400"}}>support@zeomart.com</p>
                                   </div>
                               </div>
                                   <div className="contact_boxCon_cardCon_ges">Follow us</div>
                               <div className="contact_boxCon_cardCon_social">
                                   <img width="14px" height="14px" style={{cursor:"pointer"}} src={instagram} alt="instagram"/>
                                   <img width="14px" height="14px" style={{cursor:"pointer"}} src={twitter} alt="twitter"/>
                                   <img width="14px" height="14px" style={{cursor:"pointer"}} src={facebook} alt="facebook"/>
                                   <img width="14px" height="14px" style={{cursor:"pointer"}} src={linkedin} alt="linkedin"/>
                               </div>
                           </div>
                           <form className="contact_boxCon_cardCon">
                               <div style={{width:"100%", display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                                   <div style={{width:"48%"}}>
                                       <div className="input-wrapper">
                                           <input className="inputs" type='firstName' id='name' required/>
                                           <label
                                               htmlFor='name'
                                               className='placeholder'>
                                               ИМЯ
                                           </label>
                                       </div>
                                   </div>
                                   <div style={{width: "48%"}}>
                                       <div className="input-wrapper">
                                           <input className="inputs" type='email' id='email' required/>
                                           <label
                                               htmlFor='email'
                                               className='placeholder'>
                                               EMAIL
                                           </label>
                                       </div>
                                   </div>
                               </div>
                               <div className="input-wrapper">
                                   <input className="inputs" type='text' id='text' required/>
                                   <label
                                       htmlFor='text'
                                       className='placeholder'>
                                       Subject
                                   </label>
                               </div>
                               <div className="input-wrapper">
                                   <textarea className="inputs" type='text' id='text' placeholder="Write your comments here" style={{height:"301px"}} required/>

                               </div>
                               <button type="submit" className="hoverButton">Send Message</button>
                           </form>
                       </div>
                    </div></div>

            </div>
        </>
    );
}

export default Contact;