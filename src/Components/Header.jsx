import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png';
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <div className={styles.gral}>
        <Link to="/"> 
        <img src={logo} alt='logo' height="43px" width="100px"/>
        </Link>
        <a href="#como-funciona" className={styles.btn}>Cómo funciona</a>
        <a href="#servicios" className={styles.btn}>Nuestros Servicios</a>
        <a href="#beneficios" className={styles.btn}>Beneficios</a>
        <a href="#planes" className={styles.btn}>Planes</a>
        <div className={styles.btnlogin}>
        <Link to="/login"> 
        <button className={styles.login}>Iniciar Sesión</button>
        </Link>
        </div>
    </div>
  )
}

export default Header