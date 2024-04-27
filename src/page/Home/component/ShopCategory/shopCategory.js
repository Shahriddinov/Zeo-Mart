import React from 'react';
import {motion} from "framer-motion";
import "./shopCategory.scss"
import Electronic from "../../../../assets/images/electronic.png"
import Clothis from "../../../../assets/images/clothis.png"
import Health from "../../../../assets/images/ct3.png"
import Home from "../../../../assets/images/ct4.png"
import Furniture from "../../../../assets/images/ct5.png"
import Grocery from "../../../../assets/images/ct6.png"
import Toy from "../../../../assets/images/ct7.png"
import Babies from "../../../../assets/images/ct8.png"
import SmatWatch from "../../../../assets/images/smartwatch.png"
import eia from "../../../../assets/images/earphone.png"
import smart from "../../../../assets/images/smartdevice.png"

const button = {
    rest: {scale: 1},
    hover: {scale: 1.1},
    pressed: {scale: 0.95}
};
const arrow = {
    rest: {rotate: 0},
    hover: {rotate: 360, transition: {duration: 0.4}}
};

function ShopCategory({onClick}) {
    return (
        <div className="shopCategory ">
            <div className="shopCategory_main container">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div className="shopCategory_main_shop">Shop by Category</div>
                    <div className="products_view_all">
                        <a className="products_view_all_a">View All Category</a>
                    </div>
                </div>
                <div className="shopCategory_main_categorys">
                    <div className="shopCategory_main_categorys_iconbox">
                        <div className="shopCategory_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Electronic} alt=""/>
                        </div>
                        <div className="shopCategory_main_categorys_iconbox_details">
                            <div className="shopCategory_main_categorys_iconbox_details_title">Electronics</div>
                            <div className="shopCategory_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="shopCategory_main_categorys_iconbox">
                        <div className="shopCategory_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Clothis} alt=""/>
                        </div>
                        <div className="shopCategory_main_categorys_iconbox_details">
                            <div className="shopCategory_main_categorys_iconbox_details_title">Clothings</div>
                            <div className="shopCategory_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="shopCategory_main_categorys_iconbox">
                        <div className="shopCategory_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Health} alt=""/>
                        </div>
                        <div className="shopCategory_main_categorys_iconbox_details">
                            <div className="shopCategory_main_categorys_iconbox_details_title">Health & Beauty</div>
                            <div className="shopCategory_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="shopCategory_main_categorys_iconbox">
                        <div className="shopCategory_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Home} alt=""/>
                        </div>
                        <div className="shopCategory_main_categorys_iconbox_details">
                            <div className="shopCategory_main_categorys_iconbox_details_title">Home & Kitchen</div>
                            <div className="shopCategory_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="shopCategory_main_categorys_iconbox">
                        <div className="shopCategory_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Furniture} alt=""/>
                        </div>
                        <div className="shopCategory_main_categorys_iconbox_details">
                            <div className="shopCategory_main_categorys_iconbox_details_title">Home & Furniture</div>
                            <div className="shopCategory_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="shopCategory_main_categorys_iconbox">
                        <div className="shopCategory_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Grocery} alt=""/>
                        </div>
                        <div className="shopCategory_main_categorys_iconbox_details">
                            <div className="shopCategory_main_categorys_iconbox_details_title">Grocery & Market</div>
                            <div className="shopCategory_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="shopCategory_main_categorys_iconbox">
                        <div className="shopCategory_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Toy} alt=""/>
                        </div>
                        <div className="shopCategory_main_categorys_iconbox_details">
                            <div className="shopCategory_main_categorys_iconbox_details_title">Toy & Video Games</div>
                            <div className="shopCategory_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>
                    <div className="shopCategory_main_categorys_iconbox">
                        <div className="shopCategory_main_categorys_iconbox_icon">
                            <motion.img onClick={onClick}
                                        variants={button}
                                        initial="rest"
                                        whileHover="hover"
                                        whileTap="pressed"
                                        width="90px" height="90px" src={Babies} alt=""/>
                        </div>
                        <div className="shopCategory_main_categorys_iconbox_details">
                            <div className="shopCategory_main_categorys_iconbox_details_title">Babies & Moms</div>
                            <div className="shopCategory_main_categorys_iconbox_details_subTitle">29 items</div>
                        </div>
                    </div>


                </div>
                <div className="shopCategory_main_categorys_product">
                    <div className="shopCategory_main_categorys_product_clock">
                        <div className="shopCategory_main_categorys_product_clock_sales">
                            <span className="shopCategory_main_categorys_product_clock_sales_blue">Starting from $899.</span>
                            <span className="shopCategory_main_categorys_product_clock_sales_name">Health Care Monitor</span>
                            <div className="shopCategory_main_categorys_product_clock_sales_before">
                                Shop Now
                            </div>
                        </div>
                        <img src={eia} alt=""/>
                    </div>
                    <div className="shopCategory_main_categorys_product_clock">
                        <div className="shopCategory_main_categorys_product_clock_sales">
                            <span className="shopCategory_main_categorys_product_clock_sales_blue">Starting from $899.</span>
                            <span className="shopCategory_main_categorys_product_clock_sales_name">Stainless Steel Scissors</span>
                            <div className="shopCategory_main_categorys_product_clock_sales_before">
                                Shop Now
                            </div>
                        </div>
                        <img src={smart} alt=""/>
                    </div>
                    <div className="shopCategory_main_categorys_product_clock">
                        <div className="shopCategory_main_categorys_product_clock_sales">
                            <span className="shopCategory_main_categorys_product_clock_sales_blue">Starting from $899.</span>
                            <span className="shopCategory_main_categorys_product_clock_sales_name">Stainless Steel Scissors</span>
                            <div className="shopCategory_main_categorys_product_clock_sales_before">
                               Shop Now
                            </div>
                        </div>
                        <img src={SmatWatch} alt=""/>
                        <div className="positions"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ShopCategory;