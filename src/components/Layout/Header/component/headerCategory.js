import React, {useState} from 'react';
import "./headerCategory.scss";
import {Button, Dropdown, Space, Menu} from 'antd';
import menus from "../../../../assets/images/icon/ic_menu.svg"
import {DownOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const handleMenuClick = (e) => {
    // console.log(`Clicked on menu item ${e.key}`);
};
const menu = (
    <Menu onClick={handleMenuClick}>
        <div className="MenuName">Basic Pages

            <Menu.Item key="about">
                <Link to="/about" className="menu_style">About</Link>
            </Menu.Item>
            <Menu.Item key="become-vendor">
                <Link to="/become-vendor" className="menu_style">Become Vendor</Link>
            </Menu.Item>
            <Menu.Item key="contact">
                <Link to="/contact" className="menu_style">Contact</Link>
            </Menu.Item>
            <Menu.Item key="register">
                <Link to="/register" className="menu_style">Register</Link>
            </Menu.Item>
            <Menu.Item key="faq">
                <Link to="/faq" className="menu_style">Faq</Link>
            </Menu.Item>
            <Menu.Item key="brands">
                <Link to="/brands" className="menu_style">Brands</Link>
            </Menu.Item>
            <Menu.Item key="terms">
                <Link to="/terms" className="menu_style">Terms and Conditions</Link>
            </Menu.Item>
            <Menu.Item key="help">
                <Link to="/help" className="menu_style">Help</Link>
            </Menu.Item>
            <Menu.Item key="coming">
                <Link to="/coming" className="menu_style">Coming Soon</Link>
            </Menu.Item>
            <Menu.Item key="404">
                <Link to="/NotFound" className="menu_style">404 Page</Link>
            </Menu.Item>
        </div>
        <div className="MenuName">
            Vendor Pages
            <Menu.Item key="dashboard">
                <Link to="/dashboard" className="menu_style">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="products">
                <Link to="/products" className="menu_style">Products</Link>
            </Menu.Item>
            <Menu.Item key="order">
                <Link to="/order" className="menu_style">Order</Link>
            </Menu.Item>
            <Menu.Item key="customer">
                <Link to="/customer" className="menu_style">Customer</Link>
            </Menu.Item>
            <Menu.Item key="settings">
                <Link to="/settings" className="menu_style">Settings</Link>
            </Menu.Item>
        </div>
        <div className="MenuName">
            Account Dashboard
            <Menu.Item key="edit-account">
                <Link to="/edit-account" className="menu_style">Account Details</Link>
            </Menu.Item>
            <Menu.Item key="orders">
                <Link to="/orders" className="menu_style">Orders</Link>
            </Menu.Item>
            <Menu.Item key="address">
                <Link to="/address" className="menu_style">Address</Link>
            </Menu.Item>
            <Menu.Item key="wishlist">
                <Link to="/wishlist" className="menu_style">Wishlist</Link>
            </Menu.Item>

        </div>

    </Menu>
);


function HeaderCategory() {

    return (
        <div className="HeaderCategory  container">
            <div className="line"/>
            <div className="HeaderCategory_box">


                <div className="HeaderCategory_box_titles">
                    <div className="HeaderCategory_box_titles_drop">

                        <a>
                            <Space className="HeaderCategory_box_titles_drop">
                                <img width="20px" height="22px" src={menus} alt=""/>
                                Browse Categories
                                <p className="HeaderCategory_box_titles_drop_lin_lines"/>
                            </Space>

                        </a>


                    </div>
                    <div className="HeaderCategory_box_titles_drop">
                        <Button className="HeaderCategory_box_titles_drop">
                            <div className="HeaderCategory_box_titles_drop_hover"> Дети</div>
                        </Button>

                    </div>
                    <div className="HeaderCategory_box_titles_drop">
                        <Button className="HeaderCategory_box_titles_drop">
                            <div className="HeaderCategory_box_titles_drop_hover"> Мужчины</div>
                        </Button>

                    </div>
                    <div className="HeaderCategory_box_titles_drop">
                        <Button className="HeaderCategory_box_titles_drop">
                            <div className="HeaderCategory_box_titles_drop_hover"> Женщины</div>
                        </Button>

                    </div>
                    <div>
                        <Dropdown
                            className="HeaderCategory_box_titles_drop"
                            overlay={menu}
                            trigger={['click']}
                            placement="bottom"
                            arrow
                        >
                            <Button onClick={(e) => e.preventDefault()}
                                    className="HeaderCategory_box_titles_drop_hover ant-dropdown-link">
                                Pages
                                <DownOutlined/>
                            </Button>

                        </Dropdown>
                    </div>

                </div>
                <div className="HeaderCategory_box_right">
                    <div className="HeaderCategory_box_right_text"> Одежда</div>
                    <div className="HeaderCategory_box_right_text">Обувь</div>
                    <div className="HeaderCategory_box_right_text"> Красота</div>
                    <div className="HeaderCategory_box_right_text">Аксессуары</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderCategory;