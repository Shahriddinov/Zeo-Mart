import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout/Layout";
import Spinner from "./components/Spinner";
import ScrollTop from "./hoc/ScrollTop";


const Home = lazy(() => import("./page/Home/Home"));
const Register = lazy(() => import("./page/Register/components/SignUp/SignUp"));
const home2 = lazy(() => import("./page/MarketPlace/marketPlace"));
const Brands = lazy(()=> import("./page/Brands/brands"));
const Contact = lazy(()=>import("./page/Contact/contact"))
const NotFound = lazy(() => import("./page/404"));
const Account = lazy(() => import("./page/Register/Update"));
const Update = lazy(() => import("./page/Register/components/UserInfoUpdate/userInfoUpdate"));
const Order = lazy(() => import("./page/Register/components/Order/order"));
const Address = lazy(() => import("./page/Register/components/Address/address"));
const Favorites = lazy(() => import("./page/Register/components/Favorites/favorites"));
const AddCard = lazy(() => import("./page/Register/components/AddCard/addCard"));
const About = lazy(()=>import("./page/About/about"))
const Help = lazy(()=>import("./page/Help/help"))
const routes = [
    {path: "", element: Home},
    {path: "/about", element: About},
    {path: "/register", element: Register},
    {path: "/brands", element: Brands},
    {path: "/contact", element: Contact},
    {path: "/help", element: Help},
    {path: "/account", element: Account},
    {path: "/profile", element: Update},
    {path: "/profile/order", element: Order},
    {path: "/profile/address", element: Address},
    {path: "/profile/favorites", element: Favorites},
    {path: "/profile/card", element: AddCard}

]


const RoutesContainer = () => (
    <Router>
        <Layout>
            <Suspense fallback={<Spinner position="full"/>}>
                <Routes>
                    {routes.map((route, key) => {
                        const RouteComponent = ScrollTop(route.element);
                        return <Route key={key} path={route.path} element={<RouteComponent/>}/>;
                    })}
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </Layout>
    </Router>
);

export default RoutesContainer;
