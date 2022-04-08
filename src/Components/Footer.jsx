import React from 'react';
import styles from './Footer.module.css';
import logoblikz from '../assets/blikz1.png';
import wp from '../assets/IconoWhatsapp.jpg';
import lin from '../assets/IconoLinkedin.jpg';
import mail from '../assets/IconoMail.jpg';

const Footer = () => {
  return (
    <div className={styles.gral}>
        <div className={styles.main}>
        <div className={styles.logo_div}>
        <img src={logoblikz} alt="blikz" height="45px" width="100px"/>
        <p>Todos tus pedidos en un sólo lugar.</p>
        </div>
        <div className={styles.legales}>
        <h4>Legales</h4>
        <p>Términos y condiciones</p>
        <p>Políticas de datos y privacidad</p>
        <p>Libro de reclamaciones</p>
        </div>
        <div className={styles.rs}>
          <h4>Contacto</h4>
          <img src={wp} alt="whatsapp" height="50px"/>
          <img src={lin} alt="linkedin" height="50px"/>
          <img src={mail} alt="mail" height="50px"/>
        </div>
        </div>
        <div className={styles.final}>
        <p>Copyright © 2022 Blikz</p>
        </div>
    </div>
  )
}

export default Footer