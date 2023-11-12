import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/home/Home.jsx';
import Layout from "./layout/Layout.jsx";
import Preview from "./components/pages/preview/Preview.jsx";
import Subscription from "./components/pages/subscription/Subscription.jsx";
import Contacts from "./components/pages/contacts/Contacts.jsx";
import Faq from "./components/pages/faq/Faq.jsx";
import Signin from "./components/pages/signin/Signin.jsx";
import Cart from "./components/pages/cart/Cart.jsx";
// import AdminPanel from './components/AdminPanel';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/preview" element={<Preview />}></Route>
                    <Route path="/subscription" element={<Subscription />}></Route>
                    <Route path="/contacts" element={<Contacts />}></Route>
                    <Route path="/signin" element={<Signin />}></Route>
                    <Route path="/faq" element={<Faq />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    {/*<Route path="/admin" component={AdminPanel}/>*/}
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;