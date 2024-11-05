import React from "react";
import { Outlet, Link } from "react-router-dom";
const Kanban = () => {
  return (
    <div>
      <h1 className="bg-green-600 text-2xl">Página de kanban</h1>
      <button className="bg-blue-500 rounded-md">
        <Link to={"/kanban/editar"}>Editar</Link>
      </button>
      <br />
      <button className="bg-blue-500 rounded-md">
        <Link to={"/kanban"}>voltar</Link>
      </button>
      <Outlet />
    </div>
  );
};

export default Kanban;
