import React from 'react';
import "./saleProduct.scss"
import Blm from "../../../../assets/images/sale-product1.png";
import Bl from "../../../../assets/images/si-cap1.png";
import Sl from "../../../../assets/images/si-clock1.png";
import Printer from "../../../../assets/images/si-printer1.png";
import Heart from "../../../../assets/images/icon/heart.png";
import Show from "../../../../assets/images/icon/ic_eye.png";
import Graph from "../../../../assets/images/icon/ic_graph.png";
import {Link} from "react-router-dom";
import Star from "../../../../assets/images/icon/ic_star.png";

function SaleProduct(props) {
    return (
        <div className="saleProduct">
            <div className="container">
                <div className="saleProduct_sales">
                    <div className="saleProduct_sales_salesLeft">
                        <div className="title">Sale Products</div>
                        <div className="saleProduct_sales_salesLeft_lined">
                            <div className="saleProduct_sales_salesLeft_lined_Caruosel_sliders">
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
                                    <div
                                        className="saleProduct_sales_salesLeft_lined_Caruosel_sliders_subTitle">SAMSUNG
                                    </div>
                                    <Link to="#"
                                          className="saleProduct_sales_salesLeft_lined_Caruosel_sliders_titleModel">MOBI
                                        DualScan Prime Ear and Forehead Digital Thermometer with Memory
                                    </Link>
                                    <div className="saleProduct_sales_salesLeft_lined_Caruosel_sliders_star">
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        3,014 reviews
                                    </div>
                                    <div
                                        className="saleProduct_sales_salesLeft_lined_Caruosel_sliders_price">$399.00 <small>
                                        <del>$45</del>
                                    </small></div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="saleProduct_sales_bestTitle">
                        <div className="saleProduct_sales_bestTitle_dev">
                            <div className="title">Best Seller</div>
                            <div className="saleProduct_sales_bestTitle_dev_sub">
                                <div className="all">
                                    <a className="all_a" href="#">New Arrivals</a>
                                </div>
                                <div className="all">
                                    <a className="all_a" href="#">Featured</a>
                                </div>
                                <div className="all">
                                    <a className="all_a" href="#">Sale
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex"}}>
                            <div className="saleProduct_sales_bestTitle_Caruosel_sliders">
                                <img width="190px" height="190px" src={Bl} alt=""/>
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
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_subTitle">SAMSUNG</div>
                                    <Link to="#" className="saleProduct_sales_bestTitle_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                                    </Link>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_star">
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        3,014 reviews
                                    </div>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>

                                </div>


                            </div>
                            <div className="saleProduct_sales_bestTitle_Caruosel_sliders">
                                <img width="190px" height="190px" src={Sl} alt=""/>
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
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_subTitle">SAMSUNG</div>
                                    <Link to="#" className="saleProduct_sales_bestTitle_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                                    </Link>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_star">
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        3,014 reviews
                                    </div>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>

                                </div>


                            </div>
                            <div className="saleProduct_sales_bestTitle_Caruosel_sliders">
                                <img width="190px" height="190px" src={Printer} alt=""/>
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
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_subTitle">SAMSUNG</div>
                                    <Link to="#" className="saleProduct_sales_bestTitle_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                                    </Link>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_star">
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        3,014 reviews
                                    </div>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>

                                </div>


                            </div>

                        </div>
                        <div style={{display:"flex"}}>
                            <div className="saleProduct_sales_bestTitle_Caruosel_sliders">
                                <img width="190px" height="190px" src={Bl} alt=""/>
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
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_subTitle">SAMSUNG</div>
                                    <Link to="#" className="saleProduct_sales_bestTitle_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                                    </Link>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_star">
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        3,014 reviews
                                    </div>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>

                                </div>


                            </div>
                            <div className="saleProduct_sales_bestTitle_Caruosel_sliders">
                                <img width="190px" height="190px" src={Sl} alt=""/>
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
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_subTitle">SAMSUNG</div>
                                    <Link to="#" className="saleProduct_sales_bestTitle_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                                    </Link>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_star">
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        3,014 reviews
                                    </div>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>

                                </div>


                            </div>
                            <div className="saleProduct_sales_bestTitle_Caruosel_sliders">
                                <img width="190px" height="190px" src={Printer} alt=""/>
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
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_subTitle">SAMSUNG</div>
                                    <Link to="#" className="saleProduct_sales_bestTitle_Caruosel_sliders_titleModel">Samsung 65" 4K UHD HDR QLED Tizen Smart TV
                                    </Link>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_star">
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        <img width="11px" src={Star} alt="star"/>
                                        3,014 reviews
                                    </div>
                                    <div className="saleProduct_sales_bestTitle_Caruosel_sliders_price">$399.00 <small><del>$45</del></small></div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleProduct;