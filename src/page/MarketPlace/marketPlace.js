import React from 'react';
import "./martketPlace.scss";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import home3 from "../../assets/images/home2-banner-item1.png"
import home4 from "../../assets/images/home2-banner-item2.png"
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PopularBrand from "./components/PopularBrand/popularBrand";
import FurnitureProduct from "../Home/component/ShopCategory/FurnitureProduct/furnitureProduct";
import TopSelling from "./components/TopSelling/topSelling";
import SaleProduct from "./components/SaleProduct/saleProduct";
import ExplorePopular from "./components/ExplorePopular/explorePopular";

function MarketPlace(props) {
    return (
        <>
            <div className="marketPlace">
                <div className="container">
                    <div className='marketPlace_marketHead'>
                        <div className='marketPlace_marketHead_counts'>
                            <div className="marketPlace_marketHead_counts_cImg">
                                <div className="marketPlace_marketHead_counts_cImg_absa">
                                    <span className="marketPlace_marketHead_counts_cImg_absa_tag">Limited Edition</span>
                                    <h3 className="marketPlace_marketHead_counts_cImg_absa_titled">
                                        <span className="fw400">Game Consoles and</span>
                                        <br/>
                                        Accessories Super Deals
                                    </h3>
                                    <button className="hoverButton">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='marketPlace_marketHead_countSlider'>
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                // pagination={{clickable: true}}
                                // scrollbar={{draggable: true}}
                                // onSwiper={(swiper) => console.log(swiper)}
                                // onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide>
                                    <div className="marketPlace_marketHead_countSlider_countImg">
                                        <div className="marketPlace_marketHead_countSlider_countImg_para">Starting
                                            from<span
                                                className="marketPlace_marketHead_countSlider_countImg_para_fw">$899.</span>
                                        </div>
                                        <h3 className="marketPlace_marketHead_countSlider_countImg_Stitle">Health Care
                                            Monitor</h3>
                                        <div className="all">
                                            <div className="all_a" style={{padding: "10px"}}>Show Now</div>
                                        </div>
                                        <img src={home3} alt=""/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="marketPlace_marketHead_countSlider_countImg">
                                        <div className="marketPlace_marketHead_countSlider_countImg_para">Starting
                                            from<span
                                                className="marketPlace_marketHead_countSlider_countImg_para_fw">$899.</span>
                                        </div>
                                        <h3 className="marketPlace_marketHead_countSlider_countImg_Stitle">Health Care
                                            Monitor</h3>
                                        <div className="all">
                                            <div className="all_a" style={{padding: "10px"}}>Show Now</div>
                                        </div>
                                        <img src={home4} alt=""/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="marketPlace_marketHead_countSlider_countImg">
                                        <div className="marketPlace_marketHead_countSlider_countImg_para">Starting
                                            from<span
                                                className="marketPlace_marketHead_countSlider_countImg_para_fw">$899.</span>
                                        </div>
                                        <h3 className="marketPlace_marketHead_countSlider_countImg_Stitle">Health Care
                                            Monitor</h3>
                                        <div className="all">
                                            <div className="all_a" style={{padding: "10px"}}>Show Now</div>
                                        </div>
                                        <img src={home4} alt=""/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="marketPlace_marketHead_countSlider_countImg">
                                        <div className="marketPlace_marketHead_countSlider_countImg_para">Starting
                                            from<span
                                                className="marketPlace_marketHead_countSlider_countImg_para_fw">$899.</span>
                                        </div>
                                        <h3 className="marketPlace_marketHead_countSlider_countImg_Stitle">Health Care
                                            Monitor</h3>
                                        <div className="all">
                                            <div className="all_a" style={{padding: "10px"}}>Show Now</div>
                                        </div>
                                        <img src={home3} alt=""/>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <PopularBrand/>
            <TopSelling/>
            <SaleProduct/>
            <ExplorePopular/>
        </>
    );
}

export default MarketPlace;