import React from 'react';
import "./style.scss";
import img_404 from "../../assets/images/icon/404_img.svg"

function NotFound(props) {
    return (
        <div className="notFound">
            <div className="container notFound_foundContainer">
                <div className="notFound_foundContainer_foundCard">
                    <img src={img_404} alt=""/>
                </div>
                <div className="notFound_foundContainer_foundCard">
                    <div className="notFound_foundContainer_foundCard_404">40<span style={{color: "#f5c34b "}}>4</span></div>
                    <div className="notFound_foundContainer_foundCard_oops">Oops! It looks like you're lost.</div>
                    <div className="notFound_foundContainer_foundCard_text404">The page you're looking for isn't available. Try to search again or use the go to.</div>
                    <div className="notFound_foundContainer_foundCard_goBack"><a href="/" className="hoverButton">Go Back To Homepages</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;