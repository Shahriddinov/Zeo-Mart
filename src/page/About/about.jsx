import React from 'react';
import "./about.scss"
import sex from "../../assets/images/6.jpg"
import seven from "../../assets/images/seven.jpg"
import eight from "../../assets/images/eight.jpg"
import nine from "../../assets/images/9.jpg"
import ten from "../../assets/images/ten.jpg"
import eleven from "../../assets/images/eleven.jpg"
import instagram from "../../assets/images/instagram.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import linkedin from "../../assets/images/linkedin.png"
import teamGril from "../../assets/images/teamgril.jpg"
import teamMan from "../../assets/images/teamman.jpg"
import teamBlackGril from "../../assets/images/teamblackgril.jpg"
import teamManCrezy from "../../assets/images/teamcrezy.jpg"
import CountUp from 'react-countup';

function About(props) {
    return (
        <div className="about">
            <div className="container">
                <div className="about_lines1">
                    <li>
                        <ul>
                            <a href="#">Home</a>
                        </ul>
                    </li>

                    <li>
                        <ul className="about_lines1_lines">
                            <a href="#">Electronics</a>
                        </ul>
                    </li>
                    <li>
                        <ul className="about_lines1_lines">
                            <a href="#">Computers</a>
                        </ul>
                    </li>
                    <li>
                        <ul className="about_lines1_lines">
                            <a href="#">Desktop Computers</a>
                        </ul>
                    </li>

                </div>
                <div className="about_imgCard">
                    <div className="about_imgCard_boxesAbout">
                        <img width="100%" height="100%" src={sex} alt="sex"/>
                    </div>
                    <div className="about_imgCard_boxesAbout">
                        <div className="about_imgCard_boxesAbout_imgIn">
                            <img width="100%" height="100%" src={seven} alt="seven"/>
                        </div>
                        <div className="about_imgCard_boxesAbout_imgIn">
                            <img width="100%" height="100%" src={eight} alt="eight"/>
                        </div>
                    </div>
                    <div className="about_imgCard_boxesAbout">
                        <img width="100%" height="100%" src={nine} alt="nine"/>
                    </div>
                    <div className="about_imgCard_boxesAbout">
                        <div className="about_imgCard_boxesAbout_imgIn">
                            <img width="100%" height="100%" src={ten} alt="ten"/>
                        </div>
                        <div className="about_imgCard_boxesAbout_imgIn">
                            <img width="100%" height="100%" src={eleven} alt="eleven"/>
                        </div>
                    </div>
                </div>
                <div className="about_information">
                    <div className="about_information_stores">About Our Store</div>
                    <div className="about_information_content">
                        Since 1985, we’re creating the awesome products & promise to give high quality in the eCommerce
                        market for all our customers residing any part of the world.
                    </div>
                    <p className="about_information_p">
                        Ut enim nunc, luctus vel nulla id, lacinia ultrices libero. Maecenas quis interdum nibh.
                        Suspendisse purus nibh, vestibulum porttitor orci et, egestas maximus ligula. Proin pharetra
                        convallis est, ut aliquam nisl consequat cursus. Donec ut finibus dui. felis urna, feugiat ac
                        auctor in, euismod ut sapien. Cras nulla felis, faucibus sit amet aliquet a, vestibulum vitae
                        turpis. Sed a interdum lectus, in varius purus. Cras maximus nulla in felis semper hendrerit.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="about_information_mission">
                        <div className="about_information_mission_version">
                            <div className="about_information_mission_version_titleVersion">Our Mission</div>
                            <p className="about_information_p">Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                        <div className="about_information_mission_version">
                            <div className="about_information_mission_version_titleVersion">Our Vision</div>
                            <p className="about_information_p">Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.</p>
                        </div>

                    </div>
                    <hr style={{marginTop: "50px", marginBottom: "50px"}}/>
                    <div className="about_information_users">
                        <div className="about_information_stores">We Reached So Far</div>
                        <div className="about_information_users_numbers">
                            <div className="about_information_users_numbers_NumCard">
                                <CountUp start={0} end={120} duration={5}>
                                    {({countUpRef, start}) => (
                                        <div>
                                            <span ref={countUpRef}/>+
                                            <h5 style={{fontSize: "16px", lineHeight: "1.4"}}>Stores around the
                                                world</h5>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="about_information_users_numbers_NumCard">
                                <CountUp start={0} end={15} duration={5}>
                                    {({countUpRef, start}) => (
                                        <div>
                                            <span ref={countUpRef}/>M
                                            <h5 style={{fontSize: "16px", lineHeight: "1.4"}}>Products sold till
                                                date</h5>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="about_information_users_numbers_NumCard">
                                <CountUp start={0} end={200} duration={5}>
                                    {({countUpRef, start}) => (
                                        <div>
                                            <span ref={countUpRef}/>K
                                            <h5 style={{fontSize: "16px", lineHeight: "1.4"}}>Registered users</h5>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="about_information_users_numbers_NumCard">
                                <CountUp start={0} end={300} duration={5}>
                                    {({countUpRef, start}) => (
                                        <div>
                                            <span ref={countUpRef}/>+
                                            <h5 style={{fontSize: "16px", lineHeight: "1.4"}}>Brands available in
                                                store</h5>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                        </div>
                    </div>
                    <hr style={{marginTop: "50px", marginBottom: "50px"}}/>
                   <div style={{height:"400px"}}>
                       <div className="about_information_teams">
                           <div className="team_member">
                               <div className="thumb">
                                   <img width="100%" height="100%" src={teamBlackGril} alt="1.jpg"/>
                                   <div className="overylay">
                                       <ul className="social_icon text-center">
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={instagram} alt="instagram"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={facebook} alt="facebook"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={twitter} alt="twitter"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={linkedin} alt="linkedin"/>
                                               </a>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="details">
                                   <h4>Annette Black</h4>
                                   <p>CEO Fouder</p>
                               </div>
                           </div>
                           <div className="team_member">
                               <div className="thumb">
                                   <img width="100%" height="100%" src={teamMan} alt="1.jpg"/>
                                   <div className="overylay">
                                       <ul className="social_icon text-center">
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={instagram} alt="instagram"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={facebook} alt="facebook"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={twitter} alt="twitter"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={linkedin} alt="linkedin"/>
                                               </a>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="details">
                                   <h4>Annette Black</h4>
                                   <p>CEO Fouder</p>
                               </div>
                           </div>
                           <div className="team_member">
                               <div className="thumb">
                                   <img width="100%" height="100%" src={teamGril} alt="1.jpg"/>
                                   <div className="overylay">
                                       <ul className="social_icon text-center">
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={instagram} alt="instagram"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={facebook} alt="facebook"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={twitter} alt="twitter"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={linkedin} alt="linkedin"/>
                                               </a>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="details">
                                   <h4>Annette Black</h4>
                                   <p>CEO Fouder</p>
                               </div>
                           </div>
                           <div className="team_member">
                               <div className="thumb">
                                   <img width="100%" height="100%" src={teamManCrezy} alt="1.jpg"/>
                                   <div className="overylay">
                                       <ul className="social_icon text-center">
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={instagram} alt="instagram"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={facebook} alt="facebook"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={twitter} alt="twitter"/>
                                               </a>
                                           </li>
                                           <li className="list-inline-item">
                                               <a href="#">
                                                   <img width="24px" height="24px" src={linkedin} alt="linkedin"/>
                                               </a>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="details">
                                   <h4>Annette Black</h4>
                                   <p>CEO Fouder</p>
                               </div>
                           </div>
                       </div>
                   </div>
                    <hr style={{marginTop: "50px", marginBottom: "50px"}}/>
                </div>
            </div>
        </div>
    );
}

export default About;