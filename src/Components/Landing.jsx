import React from 'react';
import styles from './Landing.module.css';
import dispositivos from '../assets/dispositivos.jpg';

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
      <button data-tally-open="w468Om" 
      data-tally-layout="modal" 
      data-tally-width="500" 
      data-tally-hide-title="1">Registrate</button>
      </div>
      <div className={styles.imagenes}>
        <img src={dispositivos} alt="dispositivos" height="350px"/>
        <a href="https://hurried-growth-8111.glide.page/dl/inicio"><button>Demo</button></a>
      </div>
      </div>
      </div>
  )
}

export default Landing