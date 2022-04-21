import React from 'react';
import styles from "./MobileMenu.module.css";
import {Link} from 'react-router-dom';

const MobileMenu = (props) => {
  return props.trigger ? (
    <div className={styles.gral}>
       <div className={styles.close} onClick={() => props.setTrigger(false)}>
          <button>x</button>
        </div>
        {/* <div className={styles.menu}> */}
        <a href="#como-funciona" className={styles.btn}>Cómo funciona</a>
        <a href="#servicios" className={styles.btn}>Nuestros Servicios</a>
        <a href="#beneficios" className={styles.btn}>Beneficios</a>
        <a href="#planes" className={styles.btn}>Planes</a>
        {/* </div> */}
        {/* <div className={styles.btnlogin}> */}
        <Link to="/login"> 
        <button className={styles.login}>Iniciar Sesión</button>
        </Link>
        {/* </div> */}
    </div>
  ):("")
}

export default MobileMenu