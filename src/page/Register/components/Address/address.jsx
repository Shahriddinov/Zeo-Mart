import React, {useState} from 'react';
import LayoutAccount from "../LayoutAccount/layoutAccount";
import "./address.scss";
import Location from "../../../../assets/images/location.svg"
import Modal from "react-modal";
import SignUp from "../SignUp/SignUp";
import AddAddress from "./AddAddress/addAddreess";

function Address(props) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);

    return (
        <LayoutAccount>
            <div className="address">
                <div className="address_Atitle">МОИ АДРЕСА</div>
                <div className="address_locations">
                    <AddAddress isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <div className="address_locations_iconsL">
                        <img src={Location} alt="Location"/>
                        <p>У ВАС НЕТ АДРЕСОВ</p>
                        <button type="submit" onClick={openModal} className="address_locations_iconsL_btns">ДОБАВИТЬ АДРЕС</button>
                    </div>
                </div>
            </div>
        </LayoutAccount>
    );
}

export default Address;