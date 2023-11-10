import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Layout from "./layout/Layout.jsx";
// import AdminPanel from './components/AdminPanel';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/*<Route path="/admin" component={AdminPanel}/>*/}
                    {/* Додайте інші маршрути за необхідності */}
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;