import React from 'react';
import "./popularBrand.scss"
import {motion} from "framer-motion";
import Electronic from "../../../../assets/images/electronic.png";
import Clothis from "../../../../assets/images/clothis.png";
import Health from "../../../../assets/images/ct3.png";
import Home from "../../../../assets/images/ct4.png";
import Furniture from "../../../../assets/images/ct5.png";
import Grocery from "../../../../assets/images/ct6.png";
import Toy from "../../../../assets/images/ct7.png";
import Babies from "../../../../assets/images/ct8.png";
import epb from "../../../../assets/images/epb1.png";
import epb2 from "../../../../assets/images/epb2.png";
import smart from "../../../../assets/images/smartdevice.png";
import SmatWatch from "../../../../assets/images/smartwatch.png";
const button = {
    rest: {scale: 1},
    hover: {scale: 1.1},
    pressed: {scale: 0.95}
};
const arrow = {
    rest: {rotate: 0},
    hover: {rotate: 360, transition: {duration: 0.4}}
};
function PopularBrand({onClick}) {
    return (
        <div className="popularBrand ">
            <div className="popularBrand_main container">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div className="popularBrand_main_shop">Explore popular brands</div>
                    <div className="products_view_all">
                        <a className="products_view_all_a">See All</a>
                    </div>
                </div>
                <div className="popularBrand_main_categorys">
                    <div className="popularBrand_main_categorys_iconbox">
                        <div className="popularBrand_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="70px" height="80px" src={epb} alt=""/>
                        </div>
                        <div className="popularBrand_main_categorys_iconbox_details">
                            <div className="popularBrand_main_categorys_iconbox_details_title">Apple</div>
                            <div className="popularBrand_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="popularBrand_main_categorys_iconbox">
                        <div className="popularBrand_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={epb2} alt=""/>
                        </div>
                        <div className="popularBrand_main_categorys_iconbox_details">
                            <div className="popularBrand_main_categorys_iconbox_details_title">Samsung</div>
                            <div className="popularBrand_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="popularBrand_main_categorys_iconbox">
                        <div className="popularBrand_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Health} alt=""/>
                        </div>
                        <div className="popularBrand_main_categorys_iconbox_details">
                            <div className="popularBrand_main_categorys_iconbox_details_title">Health & Beauty</div>
                            <div className="popularBrand_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="popularBrand_main_categorys_iconbox">
                        <div className="popularBrand_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Home} alt=""/>
                        </div>
                        <div className="popularBrand_main_categorys_iconbox_details">
                            <div className="popularBrand_main_categorys_iconbox_details_title">Home & Kitchen</div>
                            <div className="popularBrand_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="popularBrand_main_categorys_iconbox">
                        <div className="popularBrand_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Furniture} alt=""/>
                        </div>
                        <div className="popularBrand_main_categorys_iconbox_details">
                            <div className="popularBrand_main_categorys_iconbox_details_title">Home & Furniture</div>
                            <div className="popularBrand_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="popularBrand_main_categorys_iconbox">
                        <div className="popularBrand_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Grocery} alt=""/>
                        </div>
                        <div className="popularBrand_main_categorys_iconbox_details">
                            <div className="popularBrand_main_categorys_iconbox_details_title">Grocery & Market</div>
                            <div className="popularBrand_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="popularBrand_main_categorys_iconbox">
                        <div className="popularBrand_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Toy} alt=""/>
                        </div>
                        <div className="popularBrand_main_categorys_iconbox_details">
                            <div className="popularBrand_main_categorys_iconbox_details_title">Toy & Video Games</div>
                            <div className="popularBrand_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="popularBrand_main_categorys_iconbox">
                        <div className="popularBrand_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Babies} alt=""/>
                        </div>
                        <div className="popularBrand_main_categorys_iconbox_details">
                            <div className="popularBrand_main_categorys_iconbox_details_title">Babies & Moms</div>
                            <div className="popularBrand_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default PopularBrand;