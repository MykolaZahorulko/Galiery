import React from 'react'
import styles from './Layout.module.scss'
import Header from '../components/common/header/Header.jsx'
import Footer from '../components/common/footer/Footer.jsx'
import {useSelector} from "react-redux";
import ChgLanguagePopap from "../components/utils/chgLanguagePopap/ChgLanguagePopap.jsx";
const Layout = ({children}) => {
    const isLanguageChgActive = useSelector((state) => state.language.isLanguageChgActive)
    return (
        <div className={styles.wrapper}>
            <Header/>
            {isLanguageChgActive ? <ChgLanguagePopap /> : null}
            <main className={styles.main}>{children}</main>
            <Footer/>
        </div>
    )
}
export default Layout
