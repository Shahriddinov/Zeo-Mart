import React from 'react';
import "./layoutAccount.scss"
import avatar from "../../../../assets/images/icon/profile.png"
import user from "../../../../assets/images/icon/add-friend.png"
import Checked from "../../../../assets/images/icon/checked-box.png"
import Address from "../../../../assets/images/icon/pin.png"
import Wishlist from "../../../../assets/images/icon/wishlist.png"
import invoice from "../../../../assets/images/icon/bill.png"
import exit from "../../../../assets/images/icon/exit.png"
import {Link} from "react-router-dom";

function LayoutAccount(props) {
    const {children} = props;
    return (
        <div className="LayoutAccount">
            <div className="container df">
                <div className="LayoutAccount_layoutLeft">
                    <div className="LayoutAccount_layoutLeft_avatar">
                        <img className="LayoutAccount_layoutLeft_avatar_Aimg" src={avatar} alt=""/>
                        <div className="LayoutAccount_layoutLeft_avatar_userN">
                            <span>Michael Scofield</span>
                            <span>michael23@gmail.com</span>
                        </div>
                    </div>

                    <div className="LayoutAccount_layoutLeft_menuList">
                        <ul>
                            <li>
                                <Link className="LayoutAccount_layoutLeft_menuList_li" to="/profile">
                                    <img className="LayoutAccount_layoutLeft_menuList_li_users" src={user} alt=""/>
                                    Account Details
                                </Link>

                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/profile/order" className="LayoutAccount_layoutLeft_menuList_li">
                                    <img className="LayoutAccount_layoutLeft_menuList_li_users" src={Checked} alt=""/>
                                    Order
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/profile/address" className="LayoutAccount_layoutLeft_menuList_li">
                                    <img className="LayoutAccount_layoutLeft_menuList_li_users" src={Address} alt=""/>
                                    Address
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li >
                                <Link to="/profile/favorites" className="LayoutAccount_layoutLeft_menuList_li">
                                <img className="LayoutAccount_layoutLeft_menuList_li_users" src={Wishlist} alt=""/>
                                Wishlist
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li >
                                <Link to="/profile/card" className="LayoutAccount_layoutLeft_menuList_li">
                                <img className="LayoutAccount_layoutLeft_menuList_li_users" src={invoice} alt=""/>
                               My Card
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="LayoutAccount_layoutLeft_menuList_li">
                                <img className="LayoutAccount_layoutLeft_menuList_li_users" src={exit} alt=""/>
                                Logout
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="LayoutAccount_layoutRight">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default LayoutAccount;