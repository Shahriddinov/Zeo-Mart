import React from 'react';
import LayoutAccount from "../LayoutAccount/layoutAccount";
import "./favorities.scss";
import Heart from "../../../../assets/images/heart_big.svg"
function Favorites(props) {
    return (
        <LayoutAccount>
            <div className="favorites">
                <div className="favorites_fTitle">ИЗБРАННОЕ</div>
                <div className="favorites_like">
                    <div className="favorites_like_FIcon">
                        <img src={Heart} alt="Heart"/>
                        <p>ЗДЕСЬ ПОКА ПУСТО</p>
                        <p><small style={{color:"#666666"}}>Вы пока ничего не добавили в избранное</small></p>
                        <a href="/">
                            <button className="favorites_like_FIcon_Fbut">ПЕРЕЙТИ В КАТАЛОГ</button>
                        </a>
                    </div>
                </div>
            </div>
        </LayoutAccount>
    );
}

export default Favorites;