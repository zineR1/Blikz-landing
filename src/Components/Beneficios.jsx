import React from 'react';
import styles from './Beneficios.module.css';
import icono1 from '../assets/icono1.jpg';
import icono2 from '../assets/icono2.jpg';
import icono3 from '../assets/icono3.jpg';
import icono4 from '../assets/icono4.jpg';


const Beneficios = () => {
  return (
    <div className={styles.gral}>
        <div className={styles.div1}>
            <h1>Con Blikz potencia tu negocio</h1>
            <h3>Todo lo que necesitas para hacer crecer tu negocio, en una sola plataforma.
            </h3>
        </div>
        <div className={styles.mainContainer}>
        <div className={styles.texto}>
              <img src={icono1} alt="icono 1" height="160px"/>
                <h2>Incrementa tus ventas</h2>
                <h3>Ofrece la mejor experiencia de compra y precios a tus clientes. 
                    En un par de clicks, habrán hecho la orden a tu negocio.</h3>
                </div>

        <div className={styles.texto}>
              <img src={icono2} alt="icono 2" height="160px"/>
                <h2>Mejora tus márgenes</h2>
                <h3>Sin comisiones por venta, puedes ofrecer mejores precios a tus clientes y 
                    obtener una ventaja competitiva para tu negocio.</h3>
                </div>
            </div>

        <div className={styles.mainContainer}>
        <div className={styles.texto}>
              <img src={icono3} alt="icono 1" height="160px"/>
                <h2>Entrega en minutos</h2>
                <h3>Con nuestro servicio de delivery, tus clientes locales 
                    reciben su pedido en minutos.</h3>
                </div>

        <div className={styles.texto}>
              <img src={icono4} alt="icono 2" height="160px"/>
                <h2>Se más eficiente</h2>
                <h3>Automatiza las ventas y proceso logístico de tu negocio.</h3>
                </div>
            </div>
    </div>
  )
}

export default Beneficios