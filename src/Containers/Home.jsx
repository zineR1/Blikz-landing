import React from 'react';
import styles from './Home.module.css';
import {Header, Landing, Funcionamiento, Servicios, Beneficios, Planes} from "../Components";
import Monthly from "./Monthly";
import Anual from "./Anual";


const Home = () => {

  const [panelActive, setPanelActive] = React.useState({
    mensual: true,
    anual: false,
  });

  return (
    <div>
        <div>
        <Header/>
        </div>
        <div>
          <Landing/>
        </div>
        <div>
          <Funcionamiento/>
        </div>
        <div>
          <Servicios/>
        </div>
        <div>
          <Beneficios/>
        </div>
        <div className={styles.div_Navbar}>
      <Planes setPanelActive={setPanelActive} panelActive={panelActive}/>
      <section>
          {panelActive.mensual &&  <Monthly/>}
          {panelActive.anual && <Anual/>}
          {!panelActive.mensual &&  !panelActive.mensual &&  <Monthly/>}
        </section>
      </div>

    </div>
  )
}

export default Home