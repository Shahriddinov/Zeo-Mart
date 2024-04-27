import React from 'react';
import Slider from "../../components/Slider/slider";
import Products from "./component/Products/products";
import ShopCategory from "./component/ShopCategory/shopCategory";
import BestSeller from "./component/BestSeller/bestSeller";
import FurnitureProduct from "./component/ShopCategory/FurnitureProduct/furnitureProduct";
import ElectronicProduct from "./component/ElectronicProduct/electronicProduct";
import AllProductButton from "./component/AllProductButton/AllProductButton";
import Watch from "./component/Watch/Watch";
import NewProduct from "./component/NewProduct/newProduct";
import Partner from "../Partner/partner";

function Home(props) {
    return (
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Slider/>

            </div>
            <Products/>
            <ShopCategory/>
            <BestSeller/>
            <FurnitureProduct/>
            <ElectronicProduct/>
            <AllProductButton/>
            <Watch/>
            <NewProduct/>
            <Partner/>
        </>


    );
}

export default Home;