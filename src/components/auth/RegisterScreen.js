import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Registro</h3>
      <form>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirmar Password"
          name="password2"
          className="auth__input"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Registro
        </button>
        <Link to="/auth/login" className="link">
          ¿Ya estás registrado?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;