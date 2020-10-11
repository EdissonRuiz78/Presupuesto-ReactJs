import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Input = ({ guardarPresupuesto, guardarSaldo, actualizarInput }) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const definirPresupuesto = (evento) => {
    guardarCantidad(+evento.target.value);
  };

  const agregarPresupuesto = (evento) => {
    evento.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarSaldo(cantidad);
    actualizarInput(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

Input.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarSaldo: PropTypes.func.isRequired,
  actualizarInput: PropTypes.func.isRequired,
};

export default Input;
