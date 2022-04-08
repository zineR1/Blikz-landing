import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className={styles.gral}>
        <img src={logo} alt='logo' height="43px" width="100px"/>
        <a href="#como-funciona" className={styles.btn}>Cómo funciona</a>
        <a href="#servicios" className={styles.btn}>Nuestros Servicios</a>
        <a href="#beneficios" className={styles.btn}>Beneficios</a>
        <a href="#planes" className={styles.btn}>Planes</a>
        <button className={styles.login}>Iniciar Sesión</button>
    </div>
  )
}

export default Header