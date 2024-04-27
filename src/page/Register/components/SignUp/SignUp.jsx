import React, {useState} from 'react';
import Close from "../../../../assets/images/icon/close.png";
import Modal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../../../reduxToolkit/authSlice/extraReducer";
import Spinner from "../../../../components/Spinner";
import "./style.scss"
function SignUp({isRegisterOpen, setIsRegisterOpen}) {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authSlice.registerLoading);
    const openRegisterModal = () => setIsRegisterOpen(true);
    const closeRegisterModal = () => setIsRegisterOpen(false);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone: "",


    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("first_name", formData.first_name);
        data.append("last_name", formData.last_name);
        data.append("phone", formData.phone);
        dispatch(registerUser(data));
        console.log(data)
    }


    if (loading) {
        return <Spinner position="full"/>;
    }
    return (

          <div className="container">
             <div className="registerCard">
                 <header className="ModalHeader">
                     Create Your Account

                 </header>
                 <hr style={{marginTop: "30px", border: "1px solid #eaeaea"}}/>
                 <content>
                     <form autoComplete="off"
                           method="post"
                           onSubmit={handleSubmit}
                           className="ModalHeader_formMod">
                         <label htmlFor="first_name" className="ModalHeader_formMod_modLabel">
                             First Name
                             <input
                                 required
                                 id="outlined-basic"
                                 className="ModalHeader_formMod_modLabel_modInput"
                                 value={formData.first_name}
                                 onChange={handleInputChange}
                                 placeholder="First Name"/>
                         </label>
                         <label htmlFor="last_name" className="ModalHeader_formMod_modLabel">
                             Last Name
                             <input
                                 id="outlined-basic"
                                 className="ModalHeader_formMod_modLabel_modInput"
                                 name="last_name"
                                 value={formData.last_name}
                                 onChange={handleInputChange}
                                 placeholder="Last Name"/>
                         </label>
                         <label htmlFor="phone" className="ModalHeader_formMod_modLabel">
                             Phone Number
                             <input
                                 id="outlined-basic"
                                 className="ModalHeader_formMod_modLabel_modInput"
                                 type="tel"
                                 value={formData.phone}
                                 onChange={handleInputChange.value}
                                 placeholder="998 (XX) XXX XX XX"/>
                         </label>

                         <button type="submit" className="hoverButton">ОТПРАВИТЬ</button>
                     </form>
                     {/*<a href="/profile" className="ModalHeader_account">Don't have an account?<span*/}
                     {/*    className="ModalHeader_account_del">Create account</span></a>*/}
                     {/*<div style={{display: "flex", justifyContent: "space-between"}}>*/}
                     {/*    <hr style={{marginTop: "30px", border: "1px solid #eaeaea"}}/>*/}
                     {/*    or*/}
                     {/*    <hr style={{marginTop: "30px", border: "1px solid #eaeaea"}}/>*/}
                     {/*</div>*/}
                 </content>
             </div>
          </div>


    );
}

export default SignUp;