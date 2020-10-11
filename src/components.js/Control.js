import React, { Fragment } from "react";
import { revisarPresupuesto } from "../helper";
import PropTypes from "prop-types";

const Control = ({ presupuesto, saldo }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: ${presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, saldo)}>
        Te quedan: ${saldo}
      </div>
    </Fragment>
  );
};

Control.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  saldo: PropTypes.number.isRequired,
};

export default Control;
