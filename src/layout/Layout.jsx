import React from 'react'
import styles from './Layout.module.scss'
import Header from '../components/common/header/Header.jsx'
import Footer from '../components/common/footer/Footer.jsx'
import {useSelector} from "react-redux";
const Layout = ({ children }) => {
    const headerHeight = useSelector((state) => state.header.headerHeight);
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main} style={{paddingTop: headerHeight}}>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout
