import React from 'react';
import styles from './Servicios.module.css';
import ordenes from '../assets/ordenes.m4v';
import check from '../assets/check.png';
import celu from '../assets/celu.m4v';
import map from '../assets/map.m4v';


const Servicios = () => {
  return (
    <div className={styles.gral}>
         <div className={styles.div1}>
            <h1>Nuestros Servicios</h1>
            <h3>Ten una buena administración de tu negocio y ofrece las
                mejores experiencias de compra y entrega a tus clientes.
            </h3>
        </div>
        <div className={styles.container}>
            <div className={styles.texto}>
                <h2>Sistema de órdenes simple</h2>
                <h3>Centralizamos todas tus órdenes y estadísticas en un dashboard intuitivo.</h3>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <h3>Organización de todos tus pedidos.</h3>

                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <h3>Entiende mejor tu negocio.</h3>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <h3>Estadísticas en tiempo real.</h3>
                </div>
               
            </div>
                {/* <img src={ordenes} alt="crear tienda" height="350px" width="540px"/> */}
                <video src={ordenes} alt="crear tienda" height="540px" width="580px" autoPlay muted loop/>
        </div>

        <div className={styles.container2}>
            <div className={styles.texto}>
                <h2>Mejora los tiempos de respuesta</h2>
                <h3>Evita intermediarios y mejora la comunicación con tus clientes al recibir 
                    los pedidos vía Whatsapp.</h3>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <h3>Recibe los pedidos de manera ordenada.</h3>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <h3>Ten una comunicación personalizada con cada cliente.</h3>
                </div>
            </div>
                <video src={celu} alt="whatsapp" height="470px" autoPlay muted loop/>
        </div>

        <div className={styles.container}>
            <div className={styles.texto3}>
                <h2>De tu tienda al cliente en instantes</h2>
                <h3>Blinkz se convierte en tu propia flotilla de reparto, para realizar tus 
                    entregas de delivery.</h3>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <h3>Entrega en solo minutos.</h3>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <h3>Repartidores a tu disposición.</h3>
                </div>
               
            </div>
                {/* <img className={styles.map} src={map} alt="mapa" height="450px" width="480px"/> */}
                <video src={map} alt="mapa" height="450px" width="370px" autoPlay muted loop/>
        </div>
    </div>
  )
}

export default Servicios