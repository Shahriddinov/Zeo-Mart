import React from 'react';
import "./topSelling.scss";
import Blm from "../../../../assets/images/bslm.png";
import Bl from "../../../../assets/images/bslm2.png";
import Bl3 from "../../../../assets/images/bslm3.png";
import Heart from "../../../../assets/images/icon/heart.png";
import Show from "../../../../assets/images/icon/ic_eye.png";
import Graph from "../../../../assets/images/icon/ic_graph.png";
import {Link} from "react-router-dom";
import Star from "../../../../assets/images/icon/ic_star.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import "../../../Home/component/Products/Caruosel/styles.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation} from 'swiper/modules';
function TopSelling(props) {
    return (
        <div className="TopSelling">
            <div className="container">
                <div className="TopSelling_bestTitle">
                    <div className="title">Top Selling Products</div>
                    <div className="TopSelling_bestTitle_sub">
                        <div className="all">
                            <a className="all_a" href="#">Top 20</a>
                        </div>
                        <div className="all">
                            <a className="all_a" href="#">Baby</a>
                        </div>
                        <div className="all">
                            <a className="all_a" href="#">Furniture
                            </a>
                        </div>
                        <div className="all">
                            <a className="all_a" href="#">Electronic
                            </a>
                        </div>
                        <div className="all">
                            <a className="all_a" href="#">All
                            </a>
                        </div>


                    </div>
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}

                    modules={[Pagination, Navigation]}
                    navigation={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="Caruosel_sliders">
                            <img width="230px" height="230px" src={Blm} alt=""/>
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

                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Caruosel_sliders">
                            <img width="230px" height="230px" src={Bl} alt=""/>
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

                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Caruosel_sliders">
                            <img width="230px" height="230px" src={Bl3} alt=""/>
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

                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Caruosel_sliders">
                            <img width="230px" height="230px" src={Blm} alt=""/>
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

                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Caruosel_sliders">
                            <img width="230px" height="230px" src={Blm} alt=""/>
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

                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
}

export default TopSelling;