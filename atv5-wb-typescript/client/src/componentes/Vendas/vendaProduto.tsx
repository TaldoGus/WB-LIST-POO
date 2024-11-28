import React from "react";
import { Component } from "react";
import Swal from "sweetalert2";
import Cliente from "../../Models/cliente";
import Produto from "../../Models/produto";
import "../Style/myStyle.css"

type props = {
    produto: Produto
}

type state = {
    clientes: Cliente[]
}

export default class VendaProduto extends Component<props, state> {

    private selectItem
    private quantidade
    private cliente!: Cliente | undefined

    constructor(props: props | Readonly<props>) {
        super(props)
        this.state = {
            clientes: []
        }

        this.selectItem = React.createRef()
        this.changeQuantidade = this.changeQuantidade.bind(this)
        this.changeItem = this.changeItem.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeQuantidade(event) {
        this.quantidade = event.target.value
    }

    changeItem(event) {
        let id = Number(event.target.value)
        this.cliente = this.state.clientes.find(it => it.id === id)
    }

    async onSubmit() {
        if (!this.quantidade || !this.cliente) {
            Swal.fire(
                'Erro!',
                'Preencha todos os campos.',
                'error'
            )
            return;
        }

        if(this.quantidade <= 0){
            Swal.fire(
                'Erro!',
                'Quantidade deve ser maior que 0.',
                'error'
            )
            return
        }

        if((this.props.produto.estoque - this.quantidade) < 0){
            Swal.fire(
                'Erro!',
                'Esse produto não possui estoque.',
                'error'
            )
            return;
        }

        let resposta = await this.cadastro()
        if (resposta) {
            Swal.fire(
                'Sucesso!',
                'Venda realizada com sucesso.',
                'success'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        } else {
            Swal.fire(
                'Erro!',
                'Não foi possível realizar a venda.',
                'error'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        }
    }

    async cadastro(): Promise<boolean> {
        let retorno = false
        let preco = this.props.produto.preco
        let mapeado = {
            clienteId: this.cliente?.id,
            quantidadeVendida: this.quantidade,
            generoCliente: this.cliente?.genero,
            produtoId: this.props.produto.id,
            valorCompra: this.quantidade * preco

        }

        await fetch("http://localhost:3001/clienteProduto/cadastrar", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mapeado)
        }).then(r => {
            retorno = r.status === 200
        })

        if(retorno){
            this.diminuirEstoque()
        }

        return retorno
    }

    diminuirEstoque() {
        let retorno = false
        let url = "http://localhost:3001/produto/modificar/" + this.props.produto.id
        let estoque = this.props.produto.estoque
        let mapeado = {
            estoque: estoque - 1
        }
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mapeado)
        }).then(r => {
            retorno = r.status === 200
        })
        return retorno
    }

    componentDidMount(): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        this.load()
    }

    componentDidUpdate(prevProps: Readonly<props>, prevState: Readonly<state>, snapshot?: any): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

        if (this.props != prevProps) {
            this.selectItem.current.value = "-1"
            this.cliente = undefined
            this.setState({
                clientes: []
            }, () => {
                this.load()
            })
        }
    }

    load(): void {
        fetch("http://localhost:3001/cliente", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                clientes: r
            })
        });
    }

    render() {
        return (
            <>
                <div className="modal-content">
                    <h5>Vender {this.props.produto.nome}</h5>
                    <div className="row">
                        <form className="col s12">
                            <h6>Opções</h6>
                            <div id="vendaModalLine" className="row">
                                <div className="input-field col s6">
                                    <select ref={this.selectItem} id="option" onChange={this.changeItem}>
                                        <option value="-1">Selecione...</option>
                                        {this.state.clientes.map(item => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.nome}</option>
                                            )
                                        })}
                                    </select>
                                    <label htmlFor="option">Cliente</label>
                                </div>
                            </div>
                            <h6>Quantidade</h6>
                            <div id="vendaModalLine" className="row">
                                <div className={"input-field col s12"}>
                                    <input onChange={this.changeQuantidade} id="quantidade" type="number" className="validate" />
                                    <label htmlFor="quantidade">Quantidade</label>
                                </div>
                            </div>
                        </form>
                    </div >
                </div>
                <div className="modal-footer">
                    <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                        <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                    </button>
                    <button id="cadastrarButtonContainer" onClick={this.onSubmit} type="submit" name="action" className="waves-effect waves-light btn-flat">
                        <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Vender
                    </button>
                </div>
            </>
        )
    }
}