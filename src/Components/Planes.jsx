import React from 'react';
import styles from './Planes.module.css';

const Planes = ({setPanelActive, panelActive}) => {
  
    const clickHandler = (e) => {
      console.log(`${e}`);
      if(e){
        setPanelActive({ [e]: true });
      }else{
        setPanelActive({ mensual: true });
      }
    };

    
  
  return (
    <div className={styles.gral}>
        <div className={styles.div1}>
            <h1>Nuestros planes</h1>
            <h3>Registrate por un tiempo limitado para obtener descuentos exclusivos 
                en ambos planes.</h3>
        </div>
     {/* Menu */}
     <div className={styles.buttons_div}>
         <button className={`${styles.btn} ${panelActive.mensual && styles.active}`}
            type="submit"
            value="mensual"
            onClick={(e) => clickHandler(e.target.value)}>
                <h5>Plan mensual</h5>
                <p>AHORRA 30%</p>
                </button>
         <button className={`${styles.btn} ${panelActive.anual && styles.active}`}
            type="submit"
            value="anual"
            onClick={(e) => clickHandler(e.target.value)}>
                <h5>Plan anual</h5>
                <p>PROXIMAMENTE</p>
                </button>
     </div>
    </div>
  )
}

export default Planes