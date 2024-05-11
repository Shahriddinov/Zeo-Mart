import React, { useState, useEffect } from "react";
import "./confirm.scss";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { requestSMSCode } from "../../../../reduxToolkit/confirm/extraReducer";
import { setToken } from "../../../../reduxToolkit/confirm/confirmSlice";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../../reduxToolkit/authSlice/extraReducer";

function Confirm() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [inputBorderColor, setInputBorderColor] = useState("#ccc");
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  
  useEffect(() => {
    // Load phone number from localStorage if available
    const storedPhoneNumber = localStorage.getItem('registeredPhoneNumber');
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);
  useEffect(() => {
  // Dispatch registerUser action with predefined phone number
  dispatch(registerUser({ phoneNumber }));
}, [dispatch, phoneNumber]);

  const handleVerification = async () => {
    if (otp.trim() === "" || phoneNumber.trim() === "") {
      console.error("Phone number and OTP are required");
      return;
    }

    try {
      const verifyResponse = await dispatch(requestSMSCode({ otp, phoneNumber })); // Pass otp and phoneNumber as an object
      if (verifyResponse) {
        // Assuming requestSMSCode resolves to verifyResponse correctly
        if (verifyResponse.status === 200) {
          const token = verifyResponse.data.token; // Assuming token is returned in response
          dispatch(setToken(token));
          navigate("/next-page");
        } else {
          console.error("Verification failed with status:", verifyResponse.status);
          // Handle other response statuses if needed
        }
      }
    } catch (error) {
      console.error("Verification error:", error);
      // Handle verification error
    }
  };

  const handleResendCode = async () => {
    try {
      if (!phoneNumber.trim()) {
        console.error("Phone number is required for resending SMS");
        return;
      }

      // Make a request to resend SMS code using the phone number
      // Replace "your_sms_endpoint_url" with the actual endpoint URL
      const response = await fetch("your_sms_endpoint_url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        console.log("SMS code sent successfully!");
        setTimer(300); // Reset timer on successful resend
      } else {
        console.error("Failed to send SMS code");
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error("Error sending SMS code:", error);
      // Handle network or other errors
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        clearInterval(intervalId);
        // Handle timer expiration, e.g., allow resending code
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [timer]);

  
  const renderInput = (inputProps, index) => {
    return (
      <input
        {...inputProps}
        key={index}
        style={{
          width: "50px",
          height: "50px",
          fontSize: "16px",
          textAlign: "center",
          marginRight: "10px",
          border: `1px solid ${inputBorderColor}`,
          borderRadius: "4px",
        }}
      />
    );
  };

  return (
    <div className="container">
      <div className="confirm">
        <div className="confirm_Ccard">
          {/* <label htmlFor="phoneNumber" className="confirm_Ccard_labels">
            Enter phone number
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label> */}
          <label htmlFor="otp" className="confirm_Ccard_labels">
            Enter verification code
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                inputType="text"
                isInputNum
                containerStyle={{ justifyContent: "center" }}
                inputStyle={{
                  width: "50px",
                  height: "50px",
                  fontSize: "16px",
                  textAlign: "center",
                  marginRight: "10px",
                  border: `1px solid ${inputBorderColor}`,
                  borderRadius: "4px",
                }}
                separator={<span>&nbsp;</span>}
                renderInput={renderInput}
              />
            </div>
          </label>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <button className="hoverButton" onClick={handleVerification}>
              Verify Code
            </button>
            {timer === 0 && (
              <button className="hoverButton" onClick={handleResendCode}>
                Resend Code
              </button>
            )}
          </div>
         
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
