import React from 'react';
import "./order.scss"
import LayoutAccount from "../LayoutAccount/layoutAccount";
import search_icon from "../../../../assets/images/icon/search.png"
import manClose from "../../../../assets/images/75834.webp"

function Order(props) {
    return (
        <LayoutAccount>
            <div className="Order">
                <div className="Order_otitle">МОИ ЗАКАЗЫ</div>
                <div className="Order_searchInput">
                    <img className="Order_searchInput_IconSearch" src={search_icon} alt="search_icon"/>
                    <input className="Order_searchInput_writes" type="text" placeholder="Поиск"/>
                </div>
                <div className="Order_card">
                    <div className="Order_card_flex">
                        <b>№ 16162174</b>
                        <p> +Uzbekistan, дом Ташкент</p>
                    </div>
                    <div className="Order_card_colors">
                        <span className="Order_card_colors_reds"></span>
                        <b>В обработке</b>
                    </div>

                    <div className="Order_card_orderProduct">
                        <div className="Order_card_orderProduct_allP">
                            <img className="Order_card_orderProduct_allP_PImg" src={manClose} alt="manClose"/>
                            <div>
                                <p>Zara</p>
                                <b className="Order_card_orderProduct_allP_PName">CONTRAST PRINTED SWEATSHIRT Ecru</b>
                                <p>Размер: Xl (Us Xl)</p>
                                <strong className="Order_card_orderProduct_allP_PName">560,132 UZS</strong>

                            </div>
                        </div>
                        <div className="Order_card_orderProduct_Pprice">
                           <div className="Order_card_orderProduct_Pprice_fl">
                               <div style={{color:"#808080"}}>КОЛИЧЕСТВО</div>
                               <div>25</div>
                           </div>
                            <div className="Order_card_orderProduct_Pprice_fl">
                                <div style={{color: "#808080"}}>СТОИМОСТЬ</div>
                                <div>560,132  сум</div>
                            </div>
                            <div className="Order_card_orderProduct_Pprice_fl">
                                <div style={{color: "#808080"}}>ДОСТАВКА</div>
                                <div>1 333 сум</div>
                            </div>
                            <div className="Order_card_orderProduct_Pprice_fl">
                                <div style={{color: "#808080"}}>К ОПЛАТЕ</div>
                                <strong>14,003,300 сум</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{marginTop:"20px"}}/>
                <div className="Order_card">
                    <div className="Order_card_flex">
                        <b>№ 16162174</b>
                        <p> +Uzbekistan, дом Ташкент</p>
                    </div>
                    <div className="Order_card_colors">
                        <span className="Order_card_colors_reds"></span>
                        <b>В обработке</b>
                    </div>

                    <div className="Order_card_orderProduct">
                        <div className="Order_card_orderProduct_allP">
                            <img className="Order_card_orderProduct_allP_PImg" src={manClose} alt="manClose"/>
                            <div>
                                <p>Zara</p>
                                <b className="Order_card_orderProduct_allP_PName">CONTRAST PRINTED SWEATSHIRT Ecru</b>
                                <p>Размер: Xl (Us Xl)</p>
                                <strong className="Order_card_orderProduct_allP_PName">560,132 UZS</strong>

                            </div>
                        </div>
                        <div className="Order_card_orderProduct_Pprice">
                            <div className="Order_card_orderProduct_Pprice_fl">
                                <div style={{color: "#808080"}}>КОЛИЧЕСТВО</div>
                                <div>25</div>
                            </div>
                            <div className="Order_card_orderProduct_Pprice_fl">
                                <div style={{color: "#808080"}}>СТОИМОСТЬ</div>
                                <div>560,132 сум</div>
                            </div>
                            <div className="Order_card_orderProduct_Pprice_fl">
                                <div style={{color: "#808080"}}>ДОСТАВКА</div>
                                <div>1 333 сум</div>
                            </div>
                            <div className="Order_card_orderProduct_Pprice_fl">
                                <div style={{color: "#808080"}}>К ОПЛАТЕ</div>
                                <strong>14,003,300 сум</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{marginTop: "20px"}}/>
            </div>
        </LayoutAccount>
    );
}

export default Order;