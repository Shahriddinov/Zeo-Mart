import React, {useState} from 'react';
import Close from "../../../../assets/images/icon/close.png";
import Modal from "react-modal";

import "../SignUp/style.scss"
function ModalSignIn({isOpen, setIsOpen}) {

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
                    right: '0',
                    left: 'auto',
                    zIndex: '999',

                }
            }}
        >
            <header className="ModalHeader">
                Sign In
                <button className="ModalHeader_buttons" onClick={closeModal}>
                    <img width="30%" src={Close} alt=""/>
                </button>
            </header>
            <hr style={{marginTop: "30px", border: "1px solid #eaeaea"}}/>
            <h1 style={{display:"flex",  justifyContent: "center"}}>Номер телефона</h1>
            <content>
                <form autoComplete="off"
                      method="post"

                      className="ModalHeader_formMod">

                    <label htmlFor="phone" className="ModalHeader_formMod_modLabel">
                        Phone Number
                        <input
                            id="outlined-basic"
                            className="ModalHeader_formMod_modLabel_modInput"
                            type="tel"
                            placeholder="998 (XX) XXX XX XX"/>
                    </label>
                    <div className="ModalHeader_account">На введеный вами номер придет код</div>
                    <button type="submit" className="hoverButton">ОТПРАВИТЬ</button>
                </form>
            </content>
            <footer>
                <a href="/register" className="ModalHeader_account">Don't have an account?<span
                    className="ModalHeader_account_del">Create account</span></a>
            </footer>
        </Modal>
    );
}

export default ModalSignIn;