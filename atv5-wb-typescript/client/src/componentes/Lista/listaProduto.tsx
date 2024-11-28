/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../Style/myStyle.css'
import FormularioCadastroProduto from "../Formulario/formularioCadastroProduto";
import VendaProduto from "../Vendas/vendaProduto";
import VendaProdutoAll from "../Vendas/vendaProdutoAll";
import HistoricoProdutoAll from "../Historico/HistoricoProduto/historicoProdutoAll";
import Produto from "../../Models/produto";
import Swal from "sweetalert2";
import FormularioEdicaoProduto from "../Formulario/edicao/formularioEdicaoProduto";


type props = {
    tema: string
}

type state = {
    produtos: Array<any>
    produtoSelected: Produto | undefined
  }

export default class ListaProduto extends Component<props, state> {

    constructor(props) {
        super(props);
        this.state = {
          produtos: [],
          produtoSelected: undefined
        }
        this.onClickDelete = this.onClickDelete.bind(this)
        this.onClickEdit = this.onClickEdit.bind(this)
      }

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

        fetch("http://localhost:3001/produto", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(r => r.json()).then(r => {
            this.setState({
              produtos: r
            })
          });
    }


    onClickEdit(event){
        let id = event.target.id
        let idNumber = new Number(id).valueOf()
        let produto = this.state.produtos.find(item=> item.id == idNumber);
        this.setState({
          produtoSelected: produto
        })
      }
    
      async deleteProduto(id): Promise<boolean>  {
        let retorno = false
        await fetch("http://localhost:3001/produto/deletar/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(response => {
          retorno = response.status === 200
        })  
        return retorno
      }
    
      onClickDelete(event) {
        let id = event.target.id
        Swal.fire({
            title: 'Deletar produto',
            text: "Essa ação não pode ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                let deleted = await this.deleteProduto(id)
                if(deleted){
                    Swal.fire(
                        'Deletado!',
                        'Produto deletado com sucesso.',
                        'success'
                        ).then(result => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          window.location.reload()
                        })
                }else{
                    Swal.fire(
                        'Erro!',
                        'Um erro ocorreu.',
                        'error'
                        ).then(result => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          window.location.reload()
                        })
                }
            }
          })
      }

    render() {
        return (
            <div id="backgroundClientContainer">
                <div id="titleContainer">
                    <h4 id="Title">Produtos cadastrados</h4>
                </div>
                <div id="collapsibleContainer">
                    <ul className="collapsible">
                        {this.state.produtos.map(item => {
                            let produto = new Produto(item.nome, item.preco, item.estoque)
                            produto.id = item.id
                            let dataCadastro = new Date(item.createdAt)
                            return (
                                <li key={produto.nome}>
                                <div id="collapsibleHeader" className="collapsible-header">
                                    {produto.nome}
                                </div>
                                <div id="collapsibleBody" className="collapsible-body">
                                    <span>Preço R$: {produto.preco}</span><br />
                                    <span>Estoque: {produto.estoque}</span><br />
                                    <span>Cadastrado em: {dataCadastro.toLocaleString()}</span>
                                    <br />
                                    <div id="editDeleteButtonContainer">
                                        <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i id={item.id} onClick={this.onClickEdit} className="small material-icons">create</i></a>
                                        <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i id={item.id} onClick={this.onClickDelete} className="small material-icons">delete</i></a>
                                        {/* Colocar para abrir modal de venda */}
                                        <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i id={item.id} onClick={this.onClickEdit} className="small material-icons">monetization_on</i></a>
                                    </div>
                                </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div id="addButtonContainer">
                    <a href="#modalCadastro" className="btn-floating btn-large pink accent-2 pulse modal-trigger"><i className="large material-icons">add</i></a>
                </div>
                <div id="sellButtonContainer">
                    <a href="#modalSellAll" className="btn-floating btn-large pink accent-2 pulse modal-trigger"><i className="large material-icons">monetization_on</i></a>
                </div>

                {/* ---------------------------------------------------------MODAL--------------------------------------------------------- */}

                <div id="modalCadastro" className="modal modal-fixed-footer">
                    <FormularioCadastroProduto tema="#ff4081 pink accent-2" />
                </div>

                <div id="modalEdit" className="modal modal-fixed-footer">
                    {this.state.produtoSelected !== undefined ? <FormularioEdicaoProduto produto={this.state.produtoSelected} /> : <></>}
                </div>

                <div id="modalSell" className="modal modal-fixed-footer">
                    {this.state.produtoSelected !== undefined ? <VendaProduto produto={this.state.produtoSelected} /> : <></>}
                </div>

                <div id="modalSellAll" className="modal modal-fixed-footer">
                        <VendaProdutoAll  />
                </div>
            </div>
        )
    }
}