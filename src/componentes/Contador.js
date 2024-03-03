import React from "react";
import '../stylesheets/Contador.css';

// Trabajar con Compenentes de Clase

class Contador extends React.Component {
  render() {
    return (
      <div className="contador">
        {this.props.numClics}
      </div>
    );
  }
}

// Trabajar con Componente Funcional

// function Contador({ numClics }) {
//   return (
//     <div className="contador">
//       {numClics}
//     </div>
//   );
// }

export default Contador;