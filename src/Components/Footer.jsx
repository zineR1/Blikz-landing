import React from 'react';
import styles from './Footer.module.css';
import logoblikz from '../assets/blikz1.png';
import wp from '../assets/IconoWhatsapp.jpg';
import lin from '../assets/IconoLinkedin.jpg';
import ig from '../assets/instagram1.png';
import fb from '../assets/facebook4.png';
import footer1 from '../assets/footer2.png';

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
        <p>Políticas de datos y privacidad</p>
        </div>
        <div className={styles.rs}>
          <h4>Contacto</h4>
          <a href="https://walink.co/ccfc03" target="_blank" without rel="noreferrer">
          <img src={wp} alt="whatsapp" height="50px"/>
          </a>
          <a href="https://www.facebook.com/Blikz-100292102667319" target="_blank" without rel="noreferrer">
          <img src={fb} alt="facebook" height="50px"/>
          </a>
          <a href="https://instagram.com/blikzmx" target="_blank" without rel="noreferrer">
          <img src={ig} alt="instagram" height="50px"/>
          </a>
          <a href="https://www.linkedin.com/company/blikz" target="_blank" without rel="noreferrer">
          <img src={lin} alt="linkedin" height="50px"/>
          </a>
        </div>
        </div>
        <div className={styles.final}>
        <p>Copyright © 2022 Blikz</p> 
        </div>
        <img src={footer1} alt="footer" height="100%" width="100%"/>
    </div>
  )
}

export default Footer