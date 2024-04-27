import React from 'react';
import "./partner.scss";
import 'swiper/css';
import {Navigation, Pagination, Scrollbar, A11y, AutoPlay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider1 from "../../assets/images/1.png"
import slider2 from "../../assets/images/2.png"
import slider3 from "../../assets/images/3.png"
import slider4 from "../../assets/images/4.png"
import slider5 from "../../assets/images/5.png"
import slider6 from "../../assets/images/6.png"
function Partner(props) {
    return (
        <div className="partner">
            <div className="row">
                <div>
                    <div className="partner_partnerTitle">Trusted by the world’s best</div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={6}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        style={{marginTop:"5%"}}
                        // navigation
                        // pagination={{clickable: true}}
                        // scrollbar={{draggable: true}}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide><img  src={slider1} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider2} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider3} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider4} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider5} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider6} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider1} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider2} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider3} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider4} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider5} alt=""/></SwiperSlide>
                        <SwiperSlide><img  src={slider6} alt=""/></SwiperSlide>

                    </Swiper>
                </div>
            </div>
            <hr style={{marginTop:"40px"}}/>
        </div>
    );
}

export default Partner;