import React from 'react'
import "../../faq.scss"
import Minus from "../../../../assets/images/icon/minus.png"
import Plus from "../../../../assets/images/icon/plus.png"
const Dropdown =({ title, isOpen, toggleDropdown, contents })=> {
  
  return (
    <div>
        <div className="faq_questionCard">
          <div className="faq_questionCard_Qbox">
            <div className="faq_questionCard_Qbox_dropdown">
              <button
                className="faq_questionCard_Qbox_dropdown_toggle"
                onClick={toggleDropdown}
              >
                {title}
                {isOpen ? (
                  <span className="icon"><img width="18px" src={Minus} alt="Minus" /></span>
                ) : (
                  <span className="icon"><img width="18px" src={Plus} alt="Plus" /></span>
                )}
              </button>
              {isOpen && (
                <div className="faq_questionCard_Qbox_dropdown_content">
                  {contents}
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="hrLines"/>

        
    </div>
  )
};
export default  Dropdown;
