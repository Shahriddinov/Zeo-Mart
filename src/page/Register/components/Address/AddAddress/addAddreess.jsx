import React, {useState} from 'react';
import Close from "../../../../../assets/images/icon/close.png";
import Modal from "react-modal";

import "./style.scss"

function AddAddress({isOpen, setIsOpen}) {

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"

            style={{
                zIndex: '99',
                marginTop: '7%',
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                    width: '28%',
                    right: 'auto',
                    left: '40%',
                    zIndex: '999',

                }
            }}
        >
            <header className="ModalHeader">
                ДОБАВИТЬ АДРЕС
                <button className="ModalHeader_buttons" onClick={closeModal}>
                    <img width="30%" src={Close} alt=""/>
                </button>
            </header>
            <hr style={{marginTop: "30px", border: "1px solid #eaeaea"}}/>
            <content>
                <form autoComplete="off"


                      className="ModalHeader_formMod">
                    <label htmlFor="first_name" className="ModalHeader_formMod_modLabel">
                        First Name
                        <input
                            id="outlined-basic"
                            className="ModalHeader_formMod_modLabel_modInput"

                            placeholder="First Name"/>
                    </label>
                    <label htmlFor="last_name" className="ModalHeader_formMod_modLabel">
                        Last Name
                        <input
                            id="outlined-basic"
                            className="ModalHeader_formMod_modLabel_modInput"
                            name="last_name"

                            placeholder="Last Name"/>
                    </label>
                    <label htmlFor="address" className="ModalHeader_formMod_modLabel">
                        Адрес
                        <input
                            id="outlined-basic"
                            className="ModalHeader_formMod_modLabel_modInput"
                            type="address"

                            placeholder="Address"/>
                    </label>
                    <label htmlFor="building" className="ModalHeader_formMod_modLabel">
                        Дом
                        <input
                            id="building"
                            className="ModalHeader_formMod_modLabel_modInput"
                            type="building"
                            name="building"
                            placeholder="Дом"/>
                    </label>
                    <label htmlFor="flat" className="ModalHeader_formMod_modLabel">
                        Квартира
                        <input
                            id="flat"
                            className="ModalHeader_formMod_modLabel_modInput"
                            type="flat"
                            name="flat"
                            placeholder="Квартира"/>
                    </label>
                    <label htmlFor="city" className="ModalHeader_formMod_modLabel">
                        Город
                        <input
                            id="city"
                            className="ModalHeader_formMod_modLabel_modInput"
                            type="city"
                            name="city"
                            placeholder="Город"/>
                    </label>
                    <button type="submit" className="hoverButton">ДОБАВИТЬ</button>
                </form>

            </content>
            <footer></footer>
        </Modal>
    );
}

export default AddAddress;