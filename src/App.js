import React, { useState, useEffect } from "react";
import Control from "./components.js/Control";
import Formulario from "./components.js/Formulario";
import Gastos from "./components.js/Gastos";
import Input from "./components.js/Input";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [saldo, guardarSaldo] = useState(0);
  const [mostrarinput, actualizarInput] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  useEffect(() => {
    if (creargasto) {
      const presupuestoRestante = saldo - gasto.cantidad;
      guardarGastos([...gastos, gasto]);
      guardarSaldo(presupuestoRestante);
      guardarCrearGasto(false);
    }
  }, [gasto, gastos, creargasto, saldo]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal">
          {mostrarinput ? (
            <Input
              guardarPresupuesto={guardarPresupuesto}
              guardarSaldo={guardarSaldo}
              actualizarInput={actualizarInput}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Gastos gastos={gastos} />
                <Control presupuesto={presupuesto} saldo={saldo} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
