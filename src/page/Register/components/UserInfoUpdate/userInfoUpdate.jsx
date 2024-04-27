import React, {useState} from 'react';
import LayoutAccount from "../LayoutAccount/layoutAccount";
import "./userInfoUpdate.scss"
import {Link} from "react-router-dom";


function UserInfoUpdate(props) {


    return (
        <LayoutAccount>
            <div className="userInfoUpdate">
                <div  className="userInfoUpdate_UpTitle">Account Details</div>
                <form className="userInfoUpdate_form">
                    <div className="userInfoUpdate_form_justify">
                        <div className="input-wrapper">
                            <input className="inputs" type='firstName' id='name' required/>
                            <label
                                htmlFor='name'
                                className='placeholder'>
                                ИМЯ
                            </label>
                        </div>
                        <div className="userInfoUpdate_form_justify_selects">

                                <select name="gender" className="userInfoUpdate_form_justify_selects_sValue">
                                    <option disabled selected >  ПОЛ</option>
                                    <option value="apple">МУЖСКОЙ</option>
                                    <option value="banana">ЖЕНСКИЙ</option>

                                </select>
                            <div className="input-wrapper">
                                <input className="inputs" type='date' id='birthday' name="birthday" required/>
                                <label
                                    htmlFor='birthday'
                                    className='placeholder'>
                                    ДАТА РОЖДЕНИЯ
                                </label>
                            </div>

                        </div>

                    </div>
                    <div className="userInfoUpdate_form_justify">
                        <div className="input-wrapper">
                            <input className="inputs" type='lastName' id='surname' required/>
                            <label
                                htmlFor='surname'
                                className='placeholder'>
                                ФАМИЛИЯ
                            </label>
                        </div>
                           <div className="input-wrapper" >
                               <input className="inputs"  type='phone' id='phone' required/>
                               <label
                                   htmlFor='phone'

                                   className='placeholder'>
                                   ТЕЛЕФОН
                               </label>
                           </div>
                        <button className="userInfoUpdate_form_justify_submit" type="submit">СОХРАНИТЬ</button>
                    </div>


                </form>
            </div>

        </LayoutAccount>
    );
}

export default UserInfoUpdate;