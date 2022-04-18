import React,{useState} from 'react';
import styles from './Monthly.module.css';
import check from '../assets/check.png';
import Inicial from './Planes/Inicial';

const Monthly = () => {

 const [formChangeInicial, setFormChangeInicial] = useState(false);
//  const [formChangeComercial, setFormChangeComercial] = useState(false);
//  const [formChangeAvanzado, setFormChangeAvanzado] = useState(false);

  return (
    <div className={styles.gral}>
        {/* TARJETA 1 */}
        <div className={styles.container}>
        <div className={styles.title}>
          <h3>Plan inicial</h3>
          <p>para quienes recién empiezan.</p>
          </div>
          <div className={styles.price}>
          <h4><del>$150</del></h4>
          <h1>Gratis</h1>
          <p>Solo usuarios con registro anticipado.</p>
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
                {/* <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Delivery on demand hasta 1.5km</p>
                </div> */}
                <button className={styles.more}onClick={() => setFormChangeInicial(true)}>Ver más</button>
                <Inicial
        trigger={formChangeInicial}
        setTrigger={setFormChangeInicial}/>
          </div>
         {/* TARJETA 2 */}
         <div className={styles.container}>
          <div className={styles.title}>
          <h3>Plan comercial</h3>
          <p>emprendimientos más establecidos.</p>
          </div>
          <div className={styles.price}>
          <h4><del>$350</del></h4>
          <h1>$245</h1>
          <p>MXN/mes</p>
          </div>
          <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>1.5 % comisión</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Tienda en línea</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>3 sucursales</p>
                </div>
                {/* <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Delivery on demand hasta 5km</p>
                </div>  */}
                <p className={styles.prox}>Proximamente</p>
          </div>
          {/* TARJETA 3 */}
          <div className={styles.container}>
          <div className={styles.title}>
          <h3>Plan avanzado</h3>
          <p>negocios consolidados.</p>
          </div>
          <div className={styles.price}>
          <h4><del>$650</del></h4>
          <h1>$455</h1>
          <p>MXN/mes</p>
          </div>
          <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>1% comisión</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Tienda en línea</p>
                </div>
                <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>7 sucursales</p>
                </div>
                {/* <div className={styles.text_div}>
                    <img src={check} alt="check" height="18px" width="18px"/>
                    <p>Delivery on demand hasta 5km</p>
                </div>  */}
                <p className={styles.prox}>Proximamente</p>
          </div>
    </div>
  )
}

export default Monthly