import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../../components/Spinner";
import "./style.scss";
import { registerUser } from "../../../../reduxToolkit/authSlice/extraReducer";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.authSlice.registerLoading);
  const registrationStatus = useSelector((state) => state.authSlice.registrationStatus);
  const registrationResponse = useSelector((state) => state.authSlice.registrationResponse);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(formData));
  };

  // JSX ni qaytarish funksiyasi
  const renderContent = () => {
    if (loading) {
      return <Spinner position="full" />;
    }

    if (registrationStatus === "succeeded" && registrationResponse?.status === 204) {
      // Ro'yxatdan o'tish muvaffaqiyatli bo'lgan va serverdan 204 status qaytdi
      navigate("/confirm");
      return null; // No content to render while navigating
    }

    // Ro'yxatdan o'tish muvaffaqiyatsiz bo'lgan yoki yuklash jarayoni tugagan holat
    return (
      <form autoComplete="off" method="post" onSubmit={handleSubmit} className="ModalHeader_formMod">
        <label htmlFor="first_name" className="ModalHeader_formMod_modLabel">
          First Name
          <input
            required
            name="first_name"
            className="ModalHeader_formMod_modLabel_modInput"
            onChange={handleInputChange}
            value={formData.first_name}
            placeholder="First Name"
          />
        </label>
        <label htmlFor="last_name" className="ModalHeader_formMod_modLabel">
          Last Name
          <input
            name="last_name"
            className="ModalHeader_formMod_modLabel_modInput"
            value={formData.last_name}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
        </label>
        <label htmlFor="phone" className="ModalHeader_formMod_modLabel">
          Phone Number
          <input
            name="phone"
            className="ModalHeader_formMod_modLabel_modInput"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+998 (XX) XXX XX XX"
          />
        </label>

        <button type="submit" className="hoverButton">
          ОТПРАВИТЬ
        </button>
      </form>
    );
  };

  return (
    <div className="container">
      <div className="registerCard">
        <header className="ModalHeader">Create Your Account</header>
        <hr style={{ marginTop: "30px", border: "1px solid #eaeaea" }} />
        <content>{renderContent()}</content>
      </div>
    </div>
  );
}

export default SignUp;
