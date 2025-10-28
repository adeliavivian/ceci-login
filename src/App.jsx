import React from "react";
import { Link } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <>
      <div>
        <h1>
    <div className="box">
      <h1>LOGIN</h1>

      <form>
        <label>Usuário:</label>
        <input type="text" />

        <label>Senha:</label>
        <input type="password" />

        <div className="linha1">
          <label>
            <input type="checkbox" /> Manter conectado
          </label>
          <a href="#">esqueceu a senha?</a>
        </div>

        <button type="button">ENTRAR</button>
      </form>

      <p className="social-title">Logar com</p>
      <div className="social-icons">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" />
      </div>

      <p className="trocar">
        Não tem conta?{" "}
        <Link to="/cadastro">Inscreva-se</Link>
      </p>
    </div>

</h1>
      </div>
    </>
  );
}

export default App;
