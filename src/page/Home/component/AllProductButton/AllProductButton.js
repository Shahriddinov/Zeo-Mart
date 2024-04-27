import React from 'react';
import "./style.scss";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation} from 'swiper/modules';
function AllProductButton(props) {
    return (
        <div className="AllProductButton">
            <div className="container">
                <div className="AllProductButton_linkBut">
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={30}

                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="AllProductButton_linkBut_swi">Wireless Networks</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="AllProductButton_linkBut_swi">Accessories</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="AllProductButton_linkBut_swi">Gaming Monitors</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="AllProductButton_linkBut_swi">Virtual Reality</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="AllProductButton_linkBut_swi">Cell Phones</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="AllProductButton_linkBut_swi">Cameras</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="AllProductButton_linkBut_swi">Head Phones</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="AllProductButton_linkBut_swi">Gaming Monitors</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="AllProductButton_linkBut_swi">Cameras</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="AllProductButton_linkBut_swi">Virtual Reality</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default AllProductButton;