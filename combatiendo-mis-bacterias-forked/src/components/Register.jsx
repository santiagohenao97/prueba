import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Registro.css";
export default class Iniciar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        nombre: "",
        apellido: "",
        correo: "",
        contraseña: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const values = JSON.stringify(this.state.values);
    alert(values);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h1>Registrarse</h1>
          <input
            className="cont-100"
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="cont-100"
            type="text"
            name="apellido"
            placeholder="Apellido"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <input
            className="cont-100"
            type="email"
            name="correo"
            placeholder="Correo electronico"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <input
            className="cont-100"
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <Link to="/Principal">
          <input type="submit" value="Enviar" className="btn-enviar" />
        </Link>
        <p class="form-link">
          ¿Ya tienes una cuenta? <a href="/Iniciar">Ingresa aqui</a>
        </p>
      </form>
    );
  }
}
