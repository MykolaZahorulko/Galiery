import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/pages/home/Home.jsx';
import Layout from "./layout/Layout.jsx";
import Preview from "./components/pages/preview/Preview.jsx";
import Subscription from "./components/pages/subscription/Subscription.jsx";
import Contacts from "./components/pages/contacts/Contacts.jsx";
import Faq from "./components/pages/faq/Faq.jsx";
import Login from "./components/pages/login/Login.jsx";
import Cart from "./components/pages/cart/Cart.jsx";
import Register from "./components/pages/register/Register.jsx";
import TermsOfUse from "./components/pages/termsOfUse/TermsOfUse.jsx";
import ShippingPolicy from "./components/pages/shippingPolicy/ShippingPolicy.jsx";
import ShoeBuy from "./components/pages/shoeBuy/ShoeBuy.jsx";
import PageLoadAnimation from "./components/utils/pageLoadAnimation/PageLoadAnimation.jsx";

const App = () => {
    return (
        <Router>
            <Layout>
                <PageLoadAnimation>
                    <Routes>
                        <Route path="/Galiery/" element={<Home/>}/>
                        <Route path="/Galiery/:article" element={<ShoeBuy/>}/>
                        <Route path="/Galiery/preview" element={<Preview/>}/>
                        <Route path="/Galiery/subscription" element={<Subscription/>}/>
                        <Route path="/Galiery/contacts" element={<Contacts/>}/>
                        <Route path="/Galiery/login" element={<Login/>}/>
                        <Route path="/Galiery/faq" element={<Faq/>}/>
                        <Route path="/Galiery/cart" element={<Cart/>}/>
                        <Route path="/Galiery/register" element={<Register/>}/>
                        <Route path="/Galiery/terms-of-use" element={<TermsOfUse/>}/>
                        <Route path="/Galiery/shipping-policy" element={<ShippingPolicy/>}/>
                        <Route path="*" element={<div>This page does not exist</div>}/>
                    </Routes>
                </PageLoadAnimation>
            </Layout>
        </Router>
    );
};

export default App;