import React, {useEffect} from 'react';
import {Navigation, Pagination, Scrollbar, A11y, AutoPlay} from 'swiper/modules';
import Aos from "aos";

import {Swiper, SwiperSlide} from 'swiper/react';

import home2 from "../../assets/images/2.jpg"
import home3 from "../../assets/images/1.jpg"
import home1 from "../../assets/images/5.jpg"
import Fast_Delivery from "../../assets/images/icon/ic_fast-delivery.png"
import Shield from "../../assets/images/icon/ic_shield.png"
import Headphones from "../../assets/images/icon/ic_headphone.png"
import Credit_Cart from "../../assets/images/icon/ic_credit-card.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./sleder.scss"

function Slider(props) {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
        <div className="Slider container">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{clickable: true}}
                // scrollbar={{draggable: true}}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="Slider_image">
                        <img
                            data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="Slider_image_nextImg" src={home2} alt=""/>
                        <div className="Slider_image_ImgTitle">
                            <button
                                data-aos="zoom-in-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="Slider_image_ImgTitle_posButton">Limited Edition
                            </button>
                            <div
                                data-aos="zoom-in-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="Slider_image_ImgTitle_banner">
                                <span className="Slider_image_ImgTitle_banner_ones">Game Consoles and</span>
                                <br/>
                                Accessories Super <br/> Deals

                            </div>
                            <p
                                data-aos="fade-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                            >Discover our new items. Up to
                                <span style={{fontWeight: "500"}}>25% Off !</span></p>
                            <button
                                data-aos="zoom-in-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="hoverButton">Shop Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider_image">
                        <img
                            data-aos="flip-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="Slider_image_nextImg" src={home1} alt=""/>
                        <div className="Slider_image_ImgTitle">
                            <button
                                data-aos="zoom-in-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="Slider_image_ImgTitle_posButton">New Arrivals
                            </button>
                            <div
                                data-aos="zoom-in-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="Slider_image_ImgTitle_banner">
                                <span className="Slider_image_ImgTitle_banner_ones">Wall clock</span>
                                <br/>
                                renaissance

                            </div>
                            <p
                                data-aos="fade-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                            >Discover our new items. Up to
                                <span style={{fontWeight: "500"}}>25% Off !</span></p>
                            <button className="Slider_image_ImgTitle_btn">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider_image">
                        <img
                            data-aos="flip-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="Slider_image_nextImg" src={home3} alt=""/>
                        <div className="Slider_image_ImgTitle">
                            <button
                                data-aos="zoom-in-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="Slider_image_ImgTitle_posButton">Limited Edition
                            </button>
                            <div
                                data-aos="zoom-in-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="Slider_image_ImgTitle_banner">
                                <span className="Slider_image_ImgTitle_banner_ones">Sport Essentials</span>
                                <br/>
                                Yoga Mats, Weights <br/> & more

                            </div>
                            <p
                                data-aos="fade-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                            >Discover our new items. Up to
                                <span style={{fontWeight: "500"}}>25% Off !</span></p>
                            <button className="Slider_image_ImgTitle_btn">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
            <div className="Slider_serves">
                <div data-aos="zoom-in-up"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000"
                     className="Slider_serves_deli">
                    <img width="35px" height="35px" src={Fast_Delivery} alt=""/>
                    <div>
                        <p>Free Shipping<br/>
                            <span className="Slider_serves_deli_para">Free Shipping for orders over $200
                            </span></p>

                    </div>
                </div>
                <div data-aos="zoom-in-up"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000"
                     className="Slider_serves_deli">
                    <img width="35px" height="35px" src={Shield} alt=""/>
                    <div>
                        <p>Money Guarantee
                            <br/>
                            <span className="Slider_serves_deli_para">Within 30 days for an exchange.
                            </span></p>

                    </div>
                </div>
                <div data-aos="zoom-in-up"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000"
                     className="Slider_serves_deli">
                    <img width="35px" height="35px" src={Headphones} alt=""/>
                    <div>
                        <p>Online Support
                            <br/>
                            <span className="Slider_serves_deli_para">24 hours a day, 7 days a week</span></p>

                    </div>
                </div>
                <div data-aos="zoom-in-up"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000"
                     className="Slider_serves_deli">
                    <img width="35px" height="35px" src={Credit_Cart} alt=""/>
                    <div>
                        <p>Flexible Payment
                            <br/>
                            <span className="Slider_serves_deli_para">Pay with Multiple Credit Cards</span></p>

                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Slider;