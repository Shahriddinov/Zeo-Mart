import React, { useState } from "react";
import "./faq.scss";
import Dropdown from "./component/Dropdown/dropdown";
const Faq = () => {
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: true,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    // Boshqa dropdownlar uchun holatlar
  });

  const toggleDropdown = (dropdownName) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  const toggleAllDropdowns = () => {
    const allOpen = Object.values(dropdownStates).every((state) => state);
    const updatedDropdownStates = {};

    for (const dropdownName in dropdownStates) {
      updatedDropdownStates[dropdownName] = !allOpen;
    }

    setDropdownStates(updatedDropdownStates);
  };
  return (
    <div className="faq">
      <div className="container">
        <div className="faq_FT">Frequently Asked Questions</div>
        <div className="faq_lines1">
          <li>
            <ul>
              <a href="#">Home</a>
            </ul>
          </li>

          <li>
            <ul className="faq_lines1_lines">
              <a href="#">Electronics</a>
            </ul>
          </li>
          <li>
            <ul className="faq_lines1_lines">
              <a href="#">Computers</a>
            </ul>
          </li>
          <li>
            <ul className="faq_lines1_lines">
              <a href="#">Desktop Computers</a>
            </ul>
          </li>
        </div>
        <div className="faq_Payment">Purchase & Payment</div>
        <Dropdown
        title="01 What is the monthly cost of your app?"
        isOpen={dropdownStates.dropdown1}
        toggleDropdown={() => toggleDropdown('dropdown1')}
        contents=" Lorem ipsum dolor sit amet, consectetur adipiscing elit id
        venenatis pretium risus euismod dictum egestas orci netus
        feugiat ut egestas ut sagittis tincidunt phasellus elit etiam
        cursus orci in. Id sed montes."
      />
        <Dropdown
        title="02 Do you have any local branches?"
        isOpen={dropdownStates.dropdown2}
        toggleDropdown={() => toggleDropdown('dropdown2')}
        contents=" Lorem ipsum dolor sit amet, consectetur adipiscing elit id
        venenatis pretium risus euismod dictum egestas orci netus
        feugiat ut egestas ut sagittis tincidunt phasellus elit etiam
        cursus orci in. Id sed montes."
        
      />
        <Dropdown
        title="03   What do I need to create an account?"
        isOpen={dropdownStates.dropdown3}
        toggleDropdown={() => toggleDropdown('dropdown3')}
        contents=" Lorem ipsum dolor sit amet, consectetur adipiscing elit id
        venenatis pretium risus euismod dictum egestas orci netus
        feugiat ut egestas ut sagittis tincidunt phasellus elit etiam
        cursus orci in. Id sed montes."
      />
        <Dropdown
        title="04  Do you have iOS and Android apps?"
        isOpen={dropdownStates.dropdown4}
        toggleDropdown={() => toggleDropdown('dropdown4')}
        contents=" Lorem ipsum dolor sit amet, consectetur adipiscing elit id
        venenatis pretium risus euismod dictum egestas orci netus
        feugiat ut egestas ut sagittis tincidunt phasellus elit etiam
        cursus orci in. Id sed montes."
      />
        <Dropdown
        title="05   How do I create an account?"
        isOpen={dropdownStates.dropdown5}
        toggleDropdown={() => toggleDropdown('dropdown5')}
        contents=" Lorem ipsum dolor sit amet, consectetur adipiscing elit id
        venenatis pretium risus euismod dictum egestas orci netus
        feugiat ut egestas ut sagittis tincidunt phasellus elit etiam
        cursus orci in. Id sed montes."
      />
       
      </div>
    </div>
  );
};
export default Faq;
