import React from 'react';
import styles from './Home.module.css';
import {Header, Landing, Funcionamiento, Servicios, Beneficios, Footer} from "../Components";
// import Monthly from "./Monthly";
// import Anual from "./Anual";


const Home = () => {

  // const [panelActive, setPanelActive] = React.useState({
  //   mensual: true,
  //   anual: false,
  // });

  return (
    <div>
        <div>
        <Header/>
        </div>
        <div>
          <Landing/>
        </div>
        <div id="como-funciona">
          <Funcionamiento/>
        </div>
        <div id="servicios">
          <Servicios/>
        </div>
        <div id="beneficios">
          <Beneficios/>
        </div>
        {/* <div id="planes" className={styles.div_Navbar}>
      <Planes setPanelActive={setPanelActive} panelActive={panelActive}/>
      <section>
          {panelActive.mensual &&  <Monthly/>}
          {panelActive.anual && <Monthly/>}
          {!panelActive.mensual &&  !panelActive.anual &&  <Monthly/>}
        </section>
      </div> */}
      <div className={styles.button_div}>
        <div className={styles.price} id="precio">
        <div className={styles.price1}>
        <h1>¿Cuánto cuesta usar Blikz?</h1>
        <h3>Lo único que pagas es una tarifa por cada repartidor que solicites.</h3>
        </div>
        <div className={styles.price2}>
          <h3>Únicamente</h3>
          <h1>$3 MXN</h1>
          <h3>x repartidor</h3>
          <p>*No incluye costo de envío</p>
        </div>
        </div>
      <button data-tally-open="w468Om" 
      data-tally-layout="modal" 
      data-tally-width="500" 
      data-tally-hide-title="1">Registrate</button>
      </div>
      {/* <div> */}
        <Footer/>
      {/* </div> */}

    </div>
  )
}

export default Home