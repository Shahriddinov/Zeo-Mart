import React from 'react';
import Close from "../../../../../assets/images/icon/close.png";
import Modal from "react-modal";
import "./modalCard.scss"

function ModalCard({isOpen, setIsOpen}) {
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
                ДОБАВИТЬ КАРТУ
                <button className="ModalHeader_buttons" onClick={closeModal}>
                    <img width="30%" src={Close} alt=""/>
                </button>
            </header>
            <hr style={{marginTop: "30px", border: "1px solid #eaeaea"}}/>
            <content>
                <form autoComplete="off"
                      className="ModalHeader_formMod">
                    <label htmlFor="number" className="ModalHeader_formMod_modLabel">
                        НОМЕР КАРТЫ
                        <input
                            id="number"
                            className="ModalHeader_formMod_modLabel_modInput"
                            name="number"
                            placeholder="XXXX XXXX XXXX XXXX"/>
                    </label>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <label htmlFor="month" className="ModalHeader_formMod_modLabel">
                        ММ
                        <input
                            id="month"
                            className="ModalHeader_formMod_modLabel_modInputAdd"
                            name="expire.month"
                            type="number"
                            placeholder="XX"/>
                    </label>
                        <label htmlFor="year" className="ModalHeader_formMod_modLabel">
                            ГГ
                        <input
                            id="year"
                            className="ModalHeader_formMod_modLabel_modInputAdd"
                            name="expire.year"
                            type="number"
                            placeholder="XX"/>
                    </label>
                    </div>
                    <p>
                        <small>
                            Нажимая на кнопку «Добавить», вы соглашаетесь с условиями добавления карты
                        </small>
                    </p>
                    <button type="submit" className="hoverButton">ДОБАВИТЬ</button>
                </form>

            </content>
            <footer></footer>
        </Modal>
    );
}

export default ModalCard;