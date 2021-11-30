import React from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPosts from "../components/ListaPosts";

const Categoria = () => {
  const { id } = useParams()
  const { path } = useRouteMatch()
  console.log(id)

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <Route exact path={`${path}/`}>
        <ListaPosts url={`/posts?categoria=${id}`} />
      </Route>
    </>
  )
}

export default Categoria
