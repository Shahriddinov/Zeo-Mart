import React from 'react';
import "./explorePopular.scss"
import ctb from "../../../../assets/images/ctb1.png"
import homeBg from "../../../../assets/images/home2-bg2.png"
import Blm from "../../../../assets/images/bslm.png";
import Heart from "../../../../assets/images/icon/heart.png";
import Show from "../../../../assets/images/icon/ic_eye.png";
import Graph from "../../../../assets/images/icon/ic_graph.png";
import {Link} from "react-router-dom";
import Star from "../../../../assets/images/icon/ic_star.png";
import Bl from "../../../../assets/images/bslm2.png";
import Bl3 from "../../../../assets/images/bslm3.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation} from 'swiper/modules';
function ExplorePopular(props) {
    return (
        <>
            <div className="ExplorePopular">
                <div className="container">
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom:"40px"}}>
                        <div className="ExplorePopular_shop">Explore popular brands</div>
                        <div className="ExplorePopular_view_all">
                            <a className="ExplorePopular_view_all_a">See All</a>
                        </div>
                    </div>
                    <div className="ExplorePopular_dlf">
                        <div className="ExplorePopular_dlf_prodPo">
                            <div className="ExplorePopular_dlf_prodPo_proBox">
                                Electronics<br/>
                                <span className="spans">TV Televisions</span> <br/>
                                <span className="spans">Air Conditioners</span><br/>
                                <span className="spans">Washing Machines</span><br/>
                                <span className="spans">Audio & Theaters</span>
                                <span className="spans">Office Electronics</span>
                            </div>
                            <img src={ctb} alt=""/>
                        </div>
                        <div className="ExplorePopular_dlf_prodPo">
                            <div className="ExplorePopular_dlf_prodPo_proBox">
                                Electronics<br/>
                                <span className="spans">TV Televisions</span> <br/>
                                <span className="spans">Air Conditioners</span><br/>
                                <span className="spans">Washing Machines</span><br/>
                                <span className="spans">Audio & Theaters</span>
                                <span className="spans">Office Electronics</span>
                            </div>
                            <img src={ctb} alt=""/>
                        </div>
                        <div className="ExplorePopular_dlf_prodPo">
                            <div className="ExplorePopular_dlf_prodPo_proBox">
                                Electronics<br/>
                                <span className="spans">TV Televisions</span> <br/>
                                <span className="spans">Air Conditioners</span><br/>
                                <span className="spans">Washing Machines</span><br/>
                                <span className="spans">Audio & Theaters</span>
                                <span className="spans">Office Electronics</span>
                            </div>
                            <img src={ctb} alt=""/>
                        </div>
                    </div>
                    <div className="ExplorePopular_dlf">
                        <div className="ExplorePopular_dlf_prodPo">
                            <div className="ExplorePopular_dlf_prodPo_proBox">
                                Electronics<br/>
                                <span className="spans">TV Televisions</span> <br/>
                                <span className="spans">Air Conditioners</span><br/>
                                <span className="spans">Washing Machines</span><br/>
                                <span className="spans">Audio & Theaters</span>
                                <span className="spans">Office Electronics</span>
                            </div>
                            <img src={ctb} alt=""/>
                        </div>
                        <div className="ExplorePopular_dlf_prodPo">
                            <div className="ExplorePopular_dlf_prodPo_proBox">
                                Electronics<br/>
                                <span className="spans">TV Televisions</span> <br/>
                                <span className="spans">Air Conditioners</span><br/>
                                <span className="spans">Washing Machines</span><br/>
                                <span className="spans">Audio & Theaters</span>
                                <span className="spans">Office Electronics</span>
                            </div>
                            <img src={ctb} alt=""/>
                        </div>
                        <div className="ExplorePopular_dlf_prodPo">
                            <div className="ExplorePopular_dlf_prodPo_proBox">
                                Electronics<br/>
                                <span className="spans">TV Televisions</span> <br/>
                                <span className="spans">Air Conditioners</span><br/>
                                <span className="spans">Washing Machines</span><br/>
                                <span className="spans">Audio & Theaters</span>
                                <span className="spans">Office Electronics</span>
                            </div>
                            <img src={ctb} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ExplorePopularBg">
                <div className="container" style={{display:"flex"}}>
                    <div className="ExplorePopularBg_exCard">
                        <div className="ExplorePopularBg_exCard_exTitle">Latest and Greatest Tech.
                            <div className="ExplorePopularBg_exCard_exTitle_exText">Check out the latest product launches and get <br/>
                                inspired by the tech of tomorrow.</div>
                        <button className="hoverButton">Show Now</button>
                        </div>

                    </div>
                    <div className="ExplorePopularBg_exCardBig">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}

                            modules={[Pagination, Navigation]}
                            navigation={true}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="ExplorePopularBg_exCardBig_Caruosel_sliders">
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
                                        <div className="ExplorePopularBg_exCardBig_Caruosel_sliders_subTitle">SAMSUNG</div>
                                        <Link to="#" className="ExplorePopularBg_exCardBig_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
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
                                <div className="ExplorePopularBg_exCardBig_Caruosel_sliders">
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
                                        <div className="ExplorePopularBg_exCardBig_Caruosel_sliders_subTitle">SAMSUNG</div>
                                        <Link to="#" className="ExplorePopularBg_exCardBig_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                                        </Link>
                                        <div className="ExplorePopularBg_exCardBig_Caruosel_sliders_star">
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            3,014 reviews
                                        </div>
                                        <div className="ExplorePopularBg_exCardBig_Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>

                                    </div>


                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ExplorePopularBg_exCardBig_Caruosel_sliders">
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
                                        <div className="ExplorePopularBg_exCardBig_Caruosel_sliders_subTitle">SAMSUNG</div>
                                        <Link to="#" className="ExplorePopularBg_exCardBig_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                                        </Link>
                                        <div className="Caruosel_sliders_star">
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            3,014 reviews
                                        </div>
                                        <div className="ExplorePopularBg_exCardBig_Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>

                                    </div>


                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ExplorePopularBg_exCardBig_Caruosel_sliders">
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
                                        <div className="ExplorePopularBg_exCardBig_Caruosel_sliders_subTitle">SAMSUNG</div>
                                        <Link to="#" className="ExplorePopularBg_exCardBig_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                                        </Link>
                                        <div className="Caruosel_sliders_star">
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            3,014 reviews
                                        </div>
                                        <div className="ExplorePopularBg_exCardBig_Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>

                                    </div>


                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ExplorePopularBg_exCardBig_Caruosel_sliders">
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
                                        <div className="ExplorePopularBg_exCardBig_Caruosel_sliders_subTitle">SAMSUNG</div>
                                        <Link to="#" className="ExplorePopularBg_exCardBig_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                                        </Link>
                                        <div className="Caruosel_sliders_star">
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            <img width="11px" src={Star} alt="star"/>
                                            3,014 reviews
                                        </div>
                                        <div className="ExplorePopularBg_exCardBig_Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>

                                    </div>


                                </div>
                            </SwiperSlide>
                          
                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ExplorePopular;