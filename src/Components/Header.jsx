import React, {useState} from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png';
import {Link} from "react-router-dom";
// import HambMenu from './HambMenu';
import MobileMenu from './MobileMenu';
import Hamb from "../assets/IconoMenu.svg";


const Header = () => {
  const [btnChangeCart, setBtnChangeCart] = useState(false);

  return (
    <div className={styles.gral}>
        <Link to="/"> 
        <img className={styles.logo} src={logo} alt='logo' height="43px" width="100px"/>
        </Link>
        {/* <div className={styles.menu}> */}
        <a href="#como-funciona" className={styles.btn}>Cómo funciona</a>
        <a href="#servicios" className={styles.btn}>Nuestros Servicios</a>
        <a href="#beneficios" className={styles.btn}>Beneficios</a>
        <a href="#planes" className={styles.btn}>Precio</a>
        {/* </div> */}
        <div className={styles.btnlogin}>
        <Link to="/login"> 
        <button className={styles.login}>Iniciar Sesión</button>
        </Link>
        </div>
        <div className={styles.hambMenu}>
          <button onClick={() => setBtnChangeCart(true)}>
          <img src={Hamb} alt="menu"/>
          </button>
        </div>
        {/* <HambMenu/> */}
        <div className={styles.mobile}>
            <MobileMenu
            trigger={btnChangeCart}
            setTrigger={setBtnChangeCart}/>
        </div>
    </div>
  )
}

export default Header