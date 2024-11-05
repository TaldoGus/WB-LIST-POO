import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import Home from "../home";
import ListaCliente from "../Lista/listaCliente";
import Listagem from "../Lista/listagem";
import ListaProduto from "../Lista/listaProduto";
import ListaServico from "../Lista/listaServico";

export default function Roteador() {
  const [tela, setTela] = useState("Home");

  const seletorView = (valor, e) => {
    e.preventDefault();
    setTela(valor);
  };

  const construirView = () => {
    if (tela === "Home") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema="#ff4081 pink accent-2"
            botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
          />
          <Home tema="#ff4081 pink accent-2" />
        </>
      );
    } else if (tela === "Clientes") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema="#ff4081 pink accent-2"
            botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
          />
          <ListaCliente tema="#ff4081 pink accent-2" />
        </>
      );
    } else if (tela === "Produtos") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema="#ff4081 pink accent-2"
            botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
          />
          <ListaProduto tema="#ff4081 pink accent-2" />
        </>
      );
    } else if (tela === "Serviços") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema="#ff4081 pink accent-2"
            botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
          />
          <ListaServico tema="#ff4081 pink accent-2" />
        </>
      );
    } else if (tela === "Listagem") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema="#ff4081 pink accent-2"
            botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
          />
          <Listagem tema="#ff4081 pink accent-2" />
        </>
      );
    } 
  };

  return construirView();
}