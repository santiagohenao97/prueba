import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../Clasificacion.css";
export default class Clasificacion extends Component {
  render() {
    return (
      <div className="btn-clas">
        <Link
          to="/Peligrosas"
          type="button"
          className="btn btn-primary btn-lg btn-block"
        >
          PELIGROSAS
        </Link>

        <Link
          to="/Intermedio"
          type="button"
          className="btn btn-secondary btn-lg btn-block"
        >
          INTERMEDIO
        </Link>

        <Link
          to="/Comunes"
          type="button"
          className="btn btn-secondary btn-lg btn-block"
        >
          MAS COMUNES
        </Link>

        <Link
          to="/Raras"
          type="button"
          className="btn btn-secondary btn-lg btn-block"
        >
          MAS RARAS O POCO COMUNES
        </Link>
      </div>
    );
  }
}
