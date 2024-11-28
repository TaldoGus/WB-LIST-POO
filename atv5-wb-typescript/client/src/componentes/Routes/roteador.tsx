import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "../Lista/listaCliente";
import ListaProduto from "../Lista/listaProduto";
import ListaServico from "../Lista/listaServico";
import Listagem from "../Lista/listagem";
import Home from "../home";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#a280ff" botoes={['Home','Clientes', 'Produtos', 'Serviços', 'Listagem']} />
        if (this.state.tela === "Home") {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="#a280ff" />
                </>
            )
        } else if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#a280ff" />
                </>
            )
        } else if (this.state.tela === "Produtos") {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#a280ff" />
                </>
            )
        } else if (this.state.tela === "Serviços") {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#a280ff" />
                </>
            )
        } else if (this.state.tela === "Listagem") {
            return (
                <>
                    {barraNavegacao}
                    <Listagem tema="#a280ff" />
                </>
            )
        }
    }
}