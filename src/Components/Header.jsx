import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className={styles.gral}>
        <img src={logo} alt='logo' height="40px" width="100px"/>
        <button className={styles.btn}>Cómo funciona</button>
        <button className={styles.btn}>Nuestros Servicios</button>
        <button className={styles.btn}>Beneficios</button>
        <button className={styles.btn}>Planes</button>
        <button className={styles.login}>Iniciar Sesión</button>
    </div>
  )
}

export default Header