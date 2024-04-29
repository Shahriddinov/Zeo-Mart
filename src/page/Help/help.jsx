import React from "react";
import "./help.scss";
import Search from "../../assets/images/icon/search.png";
function Help(props) {
  return (
    <div className="help">
      <div className="container">
        <div className="help_lines1">
          <li>
            <ul>
              <a href="#">Home</a>
            </ul>
          </li>

          <li>
            <ul className="help_lines1_lines">
              <a href="#">Electronics</a>
            </ul>
          </li>
          <li>
            <ul className="help_lines1_lines">
              <a href="#">Computers</a>
            </ul>
          </li>
          <li>
            <ul className="help_lines1_lines">
              <a href="#">Desktop Computers</a>
            </ul>
          </li>
        </div>
        <div className="help_customerHelp">Help and Customer Service</div>
        <form className="help_footerInput">
          <input
            className="help_footerInput_Ints"
            placeholder="Enter a question, topic or keyword"
            type="text"
          />
          <button
            className="hoverButton"
            style={{ height: "60px", display: "flex", alignItems: "center" }}
            type="submit"
          >
            <img width="16px" height="16px" src={Search} alt="Search" />
          </button>
        </form>
        <div className="help_textBox">
          <div className="help_textBox_cardT">
            <div className="help_textBox_cardT_helpTitle">Your Order</div>
            <div className="help_textBox_cardT_helptext">
              How to Place an Order
            </div>
            <div className="help_textBox_cardT_helptext">
              Checking Your Order Status
            </div>
            <div className="help_textBox_cardT_helptext">
              Finding Your Order Number
            </div>
            <div className="help_textBox_cardT_helptext">
              Cancelling or Editing an Order
            </div>
            <div className="help_textBox_cardT_helptext">Contact Us</div>
            <div className="help_textBox_cardT_helptext">Pre-Orders</div>
          </div>
          <div className="help_textBox_cardT">
            <div className="help_textBox_cardT_helpTitle">
              Returns and Exchanges
            </div>
            <div className="help_textBox_cardT_helptext">
              How to Place an Order
            </div>
            <div className="help_textBox_cardT_helptext">
              Checking Your Order Status
            </div>
            <div className="help_textBox_cardT_helptext">
              Finding Your Order Number
            </div>
            <div className="help_textBox_cardT_helptext">
              Cancelling or Editing an Order
            </div>
            <div className="help_textBox_cardT_helptext">Contact Us</div>
            <div className="help_textBox_cardT_helptext">Pre-Orders</div>
          </div>
          <div className="help_textBox_cardT">
            <div className="help_textBox_cardT_helpTitle">
              Mobile Devices and Plans
            </div>
            <div className="help_textBox_cardT_helptext">
              How to Place an Order
            </div>
            <div className="help_textBox_cardT_helptext">
              Checking Your Order Status
            </div>
            <div className="help_textBox_cardT_helptext">
              Finding Your Order Number
            </div>
            <div className="help_textBox_cardT_helptext">
              Cancelling or Editing an Order
            </div>
            <div className="help_textBox_cardT_helptext">Contact Us</div>
            <div className="help_textBox_cardT_helptext">Pre-Orders</div>
          </div>
        </div>
        <div className="help_textBox">
          <div className="help_textBox_cardT">
            <div className="help_textBox_cardT_helpTitle">Paying and Purchasing</div>
            <div className="help_textBox_cardT_helptext">
              How to Place an Order
            </div>
            <div className="help_textBox_cardT_helptext">
              Checking Your Order Status
            </div>
            <div className="help_textBox_cardT_helptext">
              Finding Your Order Number
            </div>
            <div className="help_textBox_cardT_helptext">
              Cancelling or Editing an Order
            </div>
            <div className="help_textBox_cardT_helptext">Contact Us</div>
            <div className="help_textBox_cardT_helptext">Pre-Orders</div>
          </div>
          <div className="help_textBox_cardT">
            <div className="help_textBox_cardT_helpTitle">
            Shipping, Delivery, and Pick Up
            </div>
            <div className="help_textBox_cardT_helptext">
              How to Place an Order
            </div>
            <div className="help_textBox_cardT_helptext">
              Checking Your Order Status
            </div>
            <div className="help_textBox_cardT_helptext">
              Finding Your Order Number
            </div>
            <div className="help_textBox_cardT_helptext">
              Cancelling or Editing an Order
            </div>
            <div className="help_textBox_cardT_helptext">Contact Us</div>
            <div className="help_textBox_cardT_helptext">Pre-Orders</div>
          </div>
          <div className="help_textBox_cardT">
            <div className="help_textBox_cardT_helpTitle">
            Gifts and Holiday Shopping
            </div>
            <div className="help_textBox_cardT_helptext">
              How to Place an Order
            </div>
            <div className="help_textBox_cardT_helptext">
              Checking Your Order Status
            </div>
            <div className="help_textBox_cardT_helptext">
              Finding Your Order Number
            </div>
            <div className="help_textBox_cardT_helptext">
              Cancelling or Editing an Order
            </div>
            <div className="help_textBox_cardT_helptext">Contact Us</div>
            <div className="help_textBox_cardT_helptext">Pre-Orders</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
