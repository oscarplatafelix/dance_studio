import React from 'react';
import { Lines } from 'react-preloaders';
import './App.css';
import NavBar from './Secciones/NavBar';
import Header from './Secciones/Header';
import Maestros from './Secciones/Maestros';
import Suscripciones from './Secciones/Suscripciones'
import Nosotros from './Secciones/Nosotros';
import Galeria from './Secciones/Galeria';
import Contacto from './Secciones/Contacto';
import Footer from './Secciones/Footer';
function App() {
  return (
    <div>
      <React.Fragment>
        <Lines
          color={'#f7f7f7'} //Default #2D2D2D
          bgColor={'#222'} //Default #F7F7F7
          time={1500} //Default #1300

        />
        <div className="App">
          <NavBar />
          <div className="dx-main">
            <Header />
            <Maestros />
            <div className="dx-separator">
              <div className="dx-separator-circle"></div>
            </div>
            <Suscripciones />
            <div className="dx-separator">
              <div className="dx-separator-circle"></div>
            </div>
            <Nosotros />
            <Galeria />
            <Contacto />
            <Footer />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
