import React from 'react';
import styles from './Monthly.module.css';
import check from '../assets/check.png';

const Monthly = () => {
  return (
    <div className={styles.gral}>
        <div className={styles.container}>
        <div className={styles.title}>
          <h3>Plan inicial</h3>
          <p>para quienes recién empiezan</p>
          </div>
          <div className={styles.price}>
          <h4>$599</h4>
          <h1>$399</h1>
          <p>MXN/mes</p>
          </div>
          <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>0% comisión</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Tienda en línea</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>1 sucursal</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Delivery on demand hasta 1.5km</p>
                </div>
          </div>

          <div className={styles.container2}>
          <div className={styles.title}>
          <h3>Plan comercial</h3>
          <p>para emprendimientos más establecidos</p>
          </div>
          <div className={styles.price}>
          <h4>$899</h4>
          <h1>$599</h1>
          <p>MXN/mes</p>
          </div>
          <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>0% comisión</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Tienda en línea</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>3 sucursales</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Delivery on demand hasta 5km</p>
                </div> 
          </div>

          <div className={styles.container3}>
          <div className={styles.title3}>
           <h3>Plan avanzado</h3>
          <p>para clientes con grandes franquicias</p>
          </div>
          <div className={styles.middle}>
          <h2>Contáctanos</h2>
          <p>Para un plan y precio personalizado.</p>
          </div>
          </div>
    </div>
  )
}

export default Monthly