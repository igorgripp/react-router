import React from "react";
import { Link } from "react-router-dom";
import imagem from "../assets/img/doguito.svg";
import '../assets/css/componentes/cabecalho.css';

const Cabecalho = () => {
  return (
    <header className="cabecalho container">
      <div className="menu-hamburguer">
        <span className="menu=hmaburguer__icone"></span>
      </div>
      <div className="cabecalho-container">
        <Link to="/" className="flex flex--centro">
          <img src={imagem} alt="Logo Doguito" className="cabecalho__logo" />
          <h1 clas="cabecalho__titulo">PetShop</h1>
        </Link>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li>
            <Link to="#" className="menu-item menu-item--entrar">
              Entrar
            </Link>
          </li>
          <li>
            <Link to="#" className="menu-item menu-item">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/" className="menu-item menu-item">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="menu-item menu-item">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  );
};

export default Cabecalho;
