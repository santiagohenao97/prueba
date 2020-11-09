import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Iniciar.css";
export default class Iniciar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        correo: "",
        Contraseña: ""
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
          <h2>Iniciar sesion </h2>
          <label> Correo Electronico:</label>
          <br />
          <input
            className="cont-100"
            type="email"
            name="email"
            placeholder=" Ingrese correo electronico"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <br />
          <input
            className="cont-100"
            type="password"
            name="password"
            placeholder="Ingrese contraseña"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <Link to="/Principal">
          <input type="submit" value="Iniciar" className="btn-enviar" />
        </Link>
        <p class="form-link">
          ¿No tienes cuenta? <a href="/Register">Ingresa aqui</a>
        </p>
      </form>
    );
  }
}
