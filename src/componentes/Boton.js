import React from 'react';
import '../stylesheets/Boton.css';

// Trabajar con Compenentes de Clase

class Boton extends React.Component {
  render() {
    return(
      <button
      className={ this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={this.props.manejarClic}>
        {this.props.texto}
      </button>
    );
  }
}

// Trabajar con Componente Funcional

// function Boton({ texto, esBotonDeClic, manejarClic }) {
//   return(
//     <button
//     className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
//     onClick={manejarClic}>
//       {texto}
//     </button>
//   );
// }

export default Boton;