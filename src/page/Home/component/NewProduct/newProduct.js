import React from 'react';
import "./newProduct.scss"
import Phan from "../../../../assets/images/hnap1.png"
import Hpan2 from "../../../../assets/images/hnap2.png"
import Hpan3 from "../../../../assets/images/hnap3.png"
function NewProduct(props) {
    return (
        <div className="newProduct">
            <div className="container">
                <div className="BestSeller_bestTitle">
                    <div className="title">Hot New Arrivals</div>
                    <div className="BestSeller_bestTitle_sub">
                        <div className="all">
                            <a className="all_a" href="#">All</a>
                        </div>
                        <div className="all">
                            <a className="all_a" href="#">Top</a>
                        </div>
                        <div className="all">
                            <a className="all_a" href="#">Electronic</a>
                        </div>

                    </div>
                </div>
                <div style={{marginTop:"30px"}} className="newProduct_newCard">
                    <div className="newProduct_newCard_newBox">
                        <img src={Phan} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony DJ Headphones 4334205465, Black, Standard
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                    <div className="newProduct_newCard_newBox">
                        <img src={Hpan2} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony E-Mount Full Frame FE 24-70mm f/2.8 GM II G Master
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                    <div className="newProduct_newCard_newBox">
                        <img src={Hpan3} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony E-Mount Full Frame FE 24-70mm f/2.8 GM II G Master
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                </div>
                <div className="newProduct_newCard">
                    <div className="newProduct_newCard_newBox">
                        <img src={Phan} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony DJ Headphones 4334205465, Black, Standard
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                    <div className="newProduct_newCard_newBox">
                        <img src={Hpan2} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony E-Mount Full Frame FE 24-70mm f/2.8 GM II G Master
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                    <div className="newProduct_newCard_newBox">
                        <img src={Hpan3} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony E-Mount Full Frame FE 24-70mm f/2.8 GM II G Master
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                </div>
                <div className="newProduct_newCard">
                    <div className="newProduct_newCard_newBox">
                        <img src={Phan} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony DJ Headphones 4334205465, Black, Standard
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                    <div className="newProduct_newCard_newBox">
                        <img src={Hpan2} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony E-Mount Full Frame FE 24-70mm f/2.8 GM II G Master
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                    <div className="newProduct_newCard_newBox">
                        <img src={Hpan3} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony E-Mount Full Frame FE 24-70mm f/2.8 GM II G Master
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                </div>
                <div className="newProduct_newCard">
                    <div className="newProduct_newCard_newBox">
                        <img src={Phan} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony DJ Headphones 4334205465, Black, Standard
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                    <div className="newProduct_newCard_newBox">
                        <img src={Hpan2} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony E-Mount Full Frame FE 24-70mm f/2.8 GM II G Master
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                    <div className="newProduct_newCard_newBox">
                        <img src={Hpan3} alt=""/>
                        <div className="newProduct_newCard_newBox_newTitle">Sony E-Mount Full Frame FE 24-70mm f/2.8 GM II G Master
                            <div className="newProduct_newCard_newBox_newTitle_boxText">$32.50</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default NewProduct;