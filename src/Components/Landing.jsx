import React from 'react';
import styles from './Landing.module.css';
import dispositivos from '../assets/dispositivos.png';

const Landing = () => {
  return (
    <div>
      <div className={styles.contenedor}>
     <div className={styles.texto}>
      <h1>
        Todas tus tiendas, una sola plataforma
      </h1>
      
       <h3>Administra tus canales de venta, tiendas en línea y envía en minutos a tus 
         clientes locales; todo desde Blikz.</h3>
      <button>Registrate</button>
      </div>
      <div className={styles.imagenes}>
        <img src={dispositivos} alt="dispositivos" height="365px"/>
      </div>
      </div>
      </div>
  )
}

export default Landing