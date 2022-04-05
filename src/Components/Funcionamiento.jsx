import React from 'react';
import styles from './Funcionamiento.module.css';
import creartienda from '../assets/creartienda.jpg';
import subeproductos from '../assets/subeproductos.jpg';
import recibepedidos from '../assets/recibepedidos.jpg';
import entregas from '../assets/entregas.jpg';

const Funcionamiento = () => {
  return (
    <div className={styles.gral}>
        <div className={styles.div1}>
            <h1>Cómo funciona</h1>
            <h3>Blikz se encarga de gestionar tus ventas, 
                procesar tus pedidos y coordinar tus envíos</h3>
        </div>
        <div className={styles.container}>
            <div className={styles.texto}>
                <h2>1 - Crea tu página web</h2>
                <h3>Regístrate con tus datos para personalizar tu tienda.</h3>
            </div>
                <img src={creartienda} alt="crear tienda" height="300px" width="480px"/>
        </div>

        <div className={styles.container2}>
            <div className={styles.texto}>
                <h2>2 - Sube tus productos</h2>
                <h3>Crea tu catálogo digital desde tu computadora o móvil. Es fácil e intituivo.</h3>
            </div>
            <div className={styles.imagen2}>
                <img src={subeproductos} alt="sube productos" height="250px" width="450px"/>
            </div>
        </div>

        <div className={styles.container}>
            <div className={styles.texto3}>
                <h2>3 - Comparte el link de tu tienda y empieza a recibir pedidos</h2>
                <h3>Blikz procesa tus pedidos y los organiza por ti, así ahorras tiempo.</h3>
            </div>
                <img src={recibepedidos} alt="recibe pedidos" height="350px"/>
        </div>

        <div className={styles.container2}>
            <div className={styles.texto}>
                <h2>4 - Entrega a tus clientes locales en minutos</h2>
                <h3>Con nuestro servicio de delivery On-Demand, un repartidor se encargará de la entrega por ti.</h3>
            </div>
                <img src={entregas} alt="sube productos" height="200px"/>
        </div>


    </div>
  )
}

export default Funcionamiento