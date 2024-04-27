import React, {useState} from 'react';
import  "./addCard.scss"
import LayoutAccount from "../LayoutAccount/layoutAccount";
import card from "../../../../assets/images/card.svg"
import ModalCard from "./modalCard/modalCard";


function AddCard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    return (
        <LayoutAccount>
            <div className="addCard">
                <div className="addCard_Ctitle">Add Card</div>
                <div className="addCard_cardNum">
                    <div className="addCard_cardNum_cardIcon">
                        <img loading="lazy" className="addCard_cardNum_cardIcon_imgCard" src={card} alt="card"/>
                        <ModalCard isOpen={isOpen} setIsOpen={setIsOpen}/>
                        <p>У ВАС НЕТ КАРТ</p>
                        <p><small>Чтобы быстро оформлять заказы нужно добавить карту</small></p>
                        <button type="submit" onClick={openModal} className="addCard_cardNum_cardIcon_Cbtn">ДОБАВИТЬ АДРЕС</button>

                    </div>
                </div>
            </div>
        </LayoutAccount>
    );
}

export default AddCard;