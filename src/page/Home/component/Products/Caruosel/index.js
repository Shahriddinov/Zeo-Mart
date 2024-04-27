import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.scss';
import {Autoplay, Pagination} from 'swiper/modules';
import tele from "../../../../../assets/images/dd1.png"
import dd2 from "../../../../../assets/images/dd3.png"
import dd3 from "../../../../../assets/images/dd2.png"
import dd4 from "../../../../../assets/images/dd4.png"
import dd5 from "../../../../../assets/images/dd5.png"
import Heart from "../../../../../assets/images/icon/heart.png"
import Show from "../../../../../assets/images/icon/ic_eye.png"
import Graph from "../../../../../assets/images/icon/ic_graph.png"
import Star from "../../../../../assets/images/icon/ic_star.png"
import {Link} from "react-router-dom";

function Caruosel(props) {
    return (
        <div className="Caruosel">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                slidesPerView={5}
                modules={[Pagination]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="Caruosel_sliders">
                        <img width="230px" height="230px" src={tele} alt=""/>
                        <div className="saved">
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Heart} alt="Heart"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Show} alt="Show"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Graph} alt="Graph"/>
                            </span>

                        </div>
                        <button className="send">Add to Cart</button>
                        <div>
                            <div className="Caruosel_sliders_subTitle">SAMSUNG</div>
                            <Link to="#" className="Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                            </Link>
                            <div className="Caruosel_sliders_star">
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                3,014 reviews
                            </div>
                            <div className="Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>
                            <div className="Caruosel_sliders_line">
                                <div className="Caruosel_sliders_line_goldLine"></div>
                            </div>
                            <div className="Caruosel_sliders_sell">Sold 56</div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Caruosel_sliders">
                        <img width="230px" height="230px" src={dd2} alt="ss2"/>
                        <div className="saved">
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Heart} alt="Heart"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Show} alt="Show"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Graph} alt="Graph"/>
                            </span>

                        </div>
                        <button className="send">Add to Cart</button>
                        <div>
                            <div className="Caruosel_sliders_subTitle">SONY</div>
                            <Link to="#" className="Caruosel_sliders_titleModel">Ozark Trail 6-Person Clip & Camp Dome Tent</Link>
                            <div className="Caruosel_sliders_star">
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                3,014 reviews
                            </div>
                            <div className="Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>
                            <div className="Caruosel_sliders_line">
                                <div className="Caruosel_sliders_line_goldLine"></div>
                            </div>
                            <div className="Caruosel_sliders_sell">Sold 56</div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Caruosel_sliders">
                        <img width="230px" height="230px" src={dd3} alt="dd3"/>
                        <div className="saved">
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Heart} alt="Heart"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Show} alt="Show"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Graph} alt="Graph"/>
                            </span>

                        </div>
                        <button className="send">Add to Cart</button>
                        <div>
                            <div className="Caruosel_sliders_subTitle">SONY</div>
                            <Link to="#" className="Caruosel_sliders_titleModel">Beats by Dr. Dre Studio3 Skyline Over-Ear Noise
                            </Link>
                            <div className="Caruosel_sliders_star">
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                3,014 reviews
                            </div>
                            <div className="Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>
                            <div className="Caruosel_sliders_line">
                                <div className="Caruosel_sliders_line_goldLine"></div>
                            </div>
                            <div className="Caruosel_sliders_sell">Sold 56</div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Caruosel_sliders">
                        <img width="230px" height="230px" src={dd4} alt="dd4"/>
                        <div className="saved">
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Heart} alt="Heart"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Show} alt="Show"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Graph} alt="Graph"/>
                            </span>

                        </div>
                        <button className="send">Add to Cart</button>
                        <div>
                            <div className="Caruosel_sliders_subTitle">Eastsport</div>
                            <Link to="#" className="Caruosel_sliders_titleModel">Eastsport Unisex Campus Tech Backpack Charcoal
                            </Link>
                            <div className="Caruosel_sliders_star">
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                3,014 reviews
                            </div>
                            <div className="Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>
                            <div className="Caruosel_sliders_line">
                                <div className="Caruosel_sliders_line_goldLine"></div>
                            </div>
                            <div className="Caruosel_sliders_sell">Sold 56</div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Caruosel_sliders">
                        <img width="230px" height="230px" src={dd5} alt="dd5"/>
                        <div className="saved">
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Heart} alt="Heart"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Show} alt="Show"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Graph} alt="Graph"/>
                            </span>

                        </div>
                        <button className="send">Add to Cart</button>
                        <div>
                            <div className="Caruosel_sliders_subTitle">rolex</div>
                            <Link to="#" className="Caruosel_sliders_titleModel">Pre-Owned Rolex Day-date 1802 Gold Watch
                            </Link>
                            <div className="Caruosel_sliders_star">
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                3,014 reviews
                            </div>
                            <div className="Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>
                            <div className="Caruosel_sliders_line">
                                <div className="Caruosel_sliders_line_goldLine"></div>
                            </div>
                            <div className="Caruosel_sliders_sell">Sold 56</div>
                        </div>


                    </div>
                </SwiperSlide> <SwiperSlide>
                <div className="Caruosel_sliders">
                    <img width="230px" height="230px" src={tele} alt=""/>
                    <div className="saved">
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Heart} alt="Heart"/>
                            </span>
                        <span className="saved_icons">
                                <img className="saved_icons_ic" src={Show} alt="Show"/>
                            </span>
                        <span className="saved_icons">
                                <img className="saved_icons_ic" src={Graph} alt="Graph"/>
                            </span>

                    </div>
                    <button className="send">Add to Cart</button>
                    <div>
                        <div className="Caruosel_sliders_subTitle">SAMSUNG</div>
                        <Link to="#" className="Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                        </Link>
                        <div className="Caruosel_sliders_star">
                            <img width="11px" src={Star} alt="star"/>
                            <img width="11px" src={Star} alt="star"/>
                            <img width="11px" src={Star} alt="star"/>
                            <img width="11px" src={Star} alt="star"/>
                            <img width="11px" src={Star} alt="star"/>
                            3,014 reviews
                        </div>
                        <div className="Caruosel_sliders_price">$399.00 <small>
                            <del>$45</del>
                        </small></div>
                        <div className="Caruosel_sliders_line">
                            <div className="Caruosel_sliders_line_goldLine"></div>
                        </div>
                        <div className="Caruosel_sliders_sell">Sold 56</div>
                    </div>


                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className="Caruosel_sliders">
                        <img width="230px" height="230px" src={dd2} alt="ss2"/>
                        <div className="saved">
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Heart} alt="Heart"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Show} alt="Show"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Graph} alt="Graph"/>
                            </span>

                        </div>
                        <button className="send">Add to Cart</button>
                        <div>
                            <div className="Caruosel_sliders_subTitle">SONY</div>
                            <Link to="#" className="Caruosel_sliders_titleModel">Ozark Trail 6-Person Clip & Camp Dome
                                Tent</Link>
                            <div className="Caruosel_sliders_star">
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                3,014 reviews
                            </div>
                            <div className="Caruosel_sliders_price">$399.00 <small>
                                <del>$45</del>
                            </small></div>
                            <div className="Caruosel_sliders_line">
                                <div className="Caruosel_sliders_line_goldLine"></div>
                            </div>
                            <div className="Caruosel_sliders_sell">Sold 56</div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Caruosel_sliders">
                        <img width="230px" height="230px" src={dd3} alt="dd3"/>
                        <div className="saved">
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Heart} alt="Heart"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Show} alt="Show"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Graph} alt="Graph"/>
                            </span>

                        </div>
                        <button className="send">Add to Cart</button>
                        <div>
                            <div className="Caruosel_sliders_subTitle">SONY</div>
                            <Link to="#" className="Caruosel_sliders_titleModel">Beats by Dr. Dre Studio3 Skyline
                                Over-Ear Noise
                            </Link>
                            <div className="Caruosel_sliders_star">
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                3,014 reviews
                            </div>
                            <div className="Caruosel_sliders_price">$399.00 <small>
                                <del>$45</del>
                            </small></div>
                            <div className="Caruosel_sliders_line">
                                <div className="Caruosel_sliders_line_goldLine"></div>
                            </div>
                            <div className="Caruosel_sliders_sell">Sold 56</div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Caruosel_sliders">
                        <img width="230px" height="230px" src={dd4} alt="dd4"/>
                        <div className="saved">
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Heart} alt="Heart"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Show} alt="Show"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Graph} alt="Graph"/>
                            </span>

                        </div>
                        <button className="send">Add to Cart</button>
                        <div>
                            <div className="Caruosel_sliders_subTitle">Eastsport</div>
                            <Link to="#" className="Caruosel_sliders_titleModel">Eastsport Unisex Campus Tech Backpack
                                Charcoal
                            </Link>
                            <div className="Caruosel_sliders_star">
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                3,014 reviews
                            </div>
                            <div className="Caruosel_sliders_price">$399.00 <small>
                                <del>$45</del>
                            </small></div>
                            <div className="Caruosel_sliders_line">
                                <div className="Caruosel_sliders_line_goldLine"></div>
                            </div>
                            <div className="Caruosel_sliders_sell">Sold 56</div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Caruosel_sliders">
                        <img width="230px" height="230px" src={dd5} alt="dd5"/>
                        <div className="saved">
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Heart} alt="Heart"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Show} alt="Show"/>
                            </span>
                            <span className="saved_icons">
                                <img className="saved_icons_ic" src={Graph} alt="Graph"/>
                            </span>

                        </div>
                        <button className="send">Add to Cart</button>
                        <div>
                            <div className="Caruosel_sliders_subTitle">rolex</div>
                            <Link to="#" className="Caruosel_sliders_titleModel">Pre-Owned Rolex Day-date 1802 Gold
                                Watch
                            </Link>
                            <div className="Caruosel_sliders_star">
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                <img width="11px" src={Star} alt="star"/>
                                3,014 reviews
                            </div>
                            <div className="Caruosel_sliders_price">$399.00 <small>
                                <del>$45</del>
                            </small></div>
                            <div className="Caruosel_sliders_line">
                                <div className="Caruosel_sliders_line_goldLine"></div>
                            </div>
                            <div className="Caruosel_sliders_sell">Sold 56</div>
                        </div>


                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default Caruosel;