import React, {useState} from 'react';
import {CaretDownFilled} from '@ant-design/icons';
import {Dropdown, Space} from 'antd';
import Search from "../../../assets/images/icon/search.png"
import Shopping_Cart from "../../../assets/images/icon/ic_shopping_cart.svg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HeaderCategory from "./component/headerCategory";
import {Link} from "react-router-dom"
import ModalSignIn from "../../../page/Register/components/ModalSignIn/modalSignIn";



function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);


    return (
        <div className="hea">
            <div className="hea_header">
                <div className="hea_header_head container">
                    <div className="hea_header_head_logo">Zeomart <span>.</span></div>
                    <div className="hea_header_head_search">
                        <input
                            className="hea_header_head_search_inputs"
                            type="text"
                            placeholder="Search products…"
                            name="search"
                        />
                        <div className="hea_header_head_search_iconSearch">
                            <img src={Search} alt="Search"/>
                        </div>
                    </div>
                    <div className="hea_header_head_infos">
                        <Link to="/profile/favorites" className="hea_header_head_infos_heart">
                            <div className="hea_header_head_infos_heart_iconsBox">
                                <FavoriteBorderIcon style={{color: "white"}}/>
                            </div>
                            <div>
                                <p className="hea_header_head_infos_heart_littleTitle">Wishlist</p>
                                <h5 className="hea_header_head_infos_heart_title">My Items</h5>
                            </div>
                        </Link>
                        <div  onClick={openModal} className="hea_header_head_infos_heart">
                            <div  className="hea_header_head_infos_heart_iconsBox">
                                <PersonOutlineIcon style={{color: "white"}}/>
                            </div>
                            <div>
                                <p className="hea_header_head_infos_heart_littleTitle">Sign In</p>
                                <h5 className="hea_header_head_infos_heart_title">Account</h5>
                            </div>
                        </div>
                        <div className="hea_header_head_infos_heart">
                            <div className="hea_header_head_infos_heart_iconsBox">
                                {/*<div className="header_head_infos_heart_iconsBox_showNumber">0</div>*/}
                                <img src={Shopping_Cart} align="Shopping_Cart" style={{color: "white"}}/>
                            </div>
                            <div>
                                <p className="hea_header_head_infos_heart_littleTitle">$200.99</p>
                                <h5 className="hea_header_head_infos_heart_title">Total</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalSignIn isOpen={isOpen} setIsOpen={setIsOpen}/>
            <HeaderCategory/>
        </div>
    );
}

export default Header;