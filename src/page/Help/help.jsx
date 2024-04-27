import React from 'react';
import "./help.scss";
import Search from "../../assets/images/icon/search.png"
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
                    <input className="help_footerInput_Ints" placeholder="Enter a question, topic or keyword" type="text"/>
                    <button className="hoverButton" style={{height:"60px", display:"flex", alignItems:"center"}} type="submit"><img width="16px" height="16px" src={Search} alt="Search" /></button>
                </form>
            </div>
        </div>
    );
}

export default Help;