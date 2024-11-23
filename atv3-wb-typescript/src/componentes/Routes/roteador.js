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
    const temaRoxo = "#a280ff"; // Defina o tema roxo aqui
    if (tela === "Home") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema={temaRoxo}
            botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
          />
          <Home tema={temaRoxo} />
        </>
      );
    } else if (tela === "Clientes") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema={temaRoxo}
            botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
          />
          <ListaCliente tema={temaRoxo} />
        </>
      );
    } else if (tela === "Produtos") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema={temaRoxo}
            botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
          />
          <ListaProduto tema={temaRoxo} />
        </>
      );
    } else if (tela === "Serviços") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema={temaRoxo}
            botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
          />
          <ListaServico tema={temaRoxo} />
        </>
      );
    } else if (tela === "Listagem") {
      return (
        <>
          <BarraNavegacao
            seletorView={seletorView}
            tema={temaRoxo}
            botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
          />
          <Listagem tema={temaRoxo} />
        </>
      );
    }
  };

  return construirView();
}
  