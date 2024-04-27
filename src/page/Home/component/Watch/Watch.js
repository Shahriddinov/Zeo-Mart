import React from 'react';
import "./watch.scss";
import Banner_img from "../../../../assets/images/banner-img1.png"
import { motion } from "framer-motion";

function Watch(props) {
    return (
        <div className="watch">
            <div className="container">
                <div className="watch_banner">
                    <div className="watch_banner_banTitle">
                        <div className="watch_banner_banTitle_titles">Apple Watch</div>
                        <div className="watch_banner_banTitle_para">Now up to $70 off. Give Mom a gift that shows off your love.</div>
                        <button className="hoverButton">Show Now</button>
                    </div>
                       <motion.div animate={{
                           scale: [1, 1, 1, 1, 1],
                           rotate: [0, 30, 60, 240, 360],
                       }} className="watch_banner_widget">
                           <motion.img className="watch_banner_widget_animation"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                transition={{ duration: 2 }} src={Banner_img} alt="Banner_img"/>
                       </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Watch;