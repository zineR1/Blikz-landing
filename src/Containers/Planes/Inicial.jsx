import React from 'react';
import styles from './Inicial.module.css';
import check from '../../assets/check.png';

const Inicial = (props) => {
  return props.trigger ? (
        <div className={styles.card}>
            <button className={styles.close}
            onClick={() => props.setTrigger(false)}>
            x
          </button>
        <div className={styles.title}>
          <h3>Plan inicial</h3>
          </div>
        <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>2% comisión</p>
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
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>75 productos habilitados</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Ventas ilimitadas</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Sin soporte vía Whatsapp</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Certificado SSL</p>
                </div>
                <div className={styles.price}>
          <h4><del>$150</del></h4>
          <h1>Gratis</h1>
          </div>
          </div>
    ) : ("");
}

export default Inicial