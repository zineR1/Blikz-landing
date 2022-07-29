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