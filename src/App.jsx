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
                        <Route path="/:article" element={<ShoeBuy/>}/>
                        <Route path="/preview" element={<Preview/>}/>
                        <Route path="/subscription" element={<Subscription/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/faq" element={<Faq/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/terms-of-use" element={<TermsOfUse/>}/>
                        <Route path="/shipping-policy" element={<ShippingPolicy/>}/>
                    </Routes>
                </PageLoadAnimation>
            </Layout>
        </Router>
    );
};

export default App;