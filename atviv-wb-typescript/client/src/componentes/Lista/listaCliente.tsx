/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../Style/myStyle.css'
import FormularioCadastroCliente from "../Formulario/formularioCadastroCliente";
import FormularioEdicaoCliente from "../Formulario/formularioEdicaoCliente";
import Cliente from "../Modelo/cliente";
import Swal from "sweetalert2";
import Endereco from "../Modelo/endereco";
import Telefone from "../Modelo/telefone";


type prop = {
  tema: string;
};

type state = {
  clientes: Array<any>
  clienteSelected: Cliente | undefined
}

export default class ListaCliente extends Component<prop, state> {

  constructor(props) {
    super(props);
    this.state = {
      clientes: [],
      clienteSelected: undefined
    }
    this.onClickDelete = this.onClickDelete.bind(this)
    this.onClickEdit = this.onClickEdit.bind(this)
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll('.modal');
    M.Modal.init(elemsModal);

    fetch("http://localhost:32832/clientes", {
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

  onClickEdit(event){
    let id = event.target.id
    let idNumber = new Number(id).valueOf()
    let cliente = this.state.clientes.find(item=> item.id == idNumber);    
    this.setState({
      clienteSelected: cliente
    })   
  }

  async deleteCliente(id): Promise<boolean>  {
    let retorno = false
    await fetch("http://localhost:32832/cliente/excluir/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    }).then(response => {
      retorno = response.status === 200
    })  
    return retorno
  }

  onClickDelete(event) {
    let id = event.target.id
    Swal.fire({
        title: 'Deletar cliente',
        text: "Essa ação não pode ser revertida!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar!'
      }).then(async (result) => {
        if (result.isConfirmed) {
            let itemDeletar = {
              id: id
            }
            let deleted = await this.deleteCliente(itemDeletar)
            if(deleted){
                Swal.fire(
                    'Deletado!',
                    'Cliente deletado com sucesso.',
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
          <h4 id="Title">Clientes cadastrados</h4>
        </div>
        <div id="collapsibleContainer">
          <ul className="collapsible">
            {this.state.clientes.map(item => {
              let endereco = new Endereco(item.endereco.cidade, item.endereco.estado, item.endereco.rua, item.endereco.bairro, item.endereco.numero, item.endereco.informacoesAdicionais, item.endereco.codigoPostal)
              endereco.id = item.endereco.id
              endereco.codigoPostal = item.endereco.codigoPostal
              let cliente = new Cliente(item.nome, item.sobreNome, item.email, endereco)
              cliente.id = item.id
              return (
                <li key={item.nome}>
                  <div id="collapsibleHeader" className="collapsible-header">
                    {item.nome}
                  </div>
                  <div id="collapsibleBody" className="collapsible-body">
                    <h5>{item.sobreNome}</h5><br />
                    {item.telefones.map(i => {
                      let tel = new Telefone()
                      tel.ddd = i.ddd
                      tel.numero = i.numero
                      cliente.telefones.push(tel)
                      return (
                        <>
                          <span key={i.ddd + i.numero}>({i.ddd}) {i.numero}</span><br />
                        </>
                      )
                    })}
                    <span>{item.email}</span><br />
                    <h6>Endereço:</h6>
                    <hr />
                    <span>{item.endereco.cidade} - {item.endereco.estado} </span><br />
                    <span>{item.endereco.codigoPostal} </span><br />
                    <span>{item.endereco.rua}, {item.endereco.numero} </span><br />
                    <span>{item.endereco.bairro}</span><br />
                    <h6>Informações adicionais:</h6>
                    <hr />
                    <span>{item.endereco.informacoesAdicionais}</span><br />

                    <div id="editDeleteButtonContainer">
                      <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium #a280ff pulse modal-trigger"><i id={item.id} onClick={this.onClickEdit} className="small material-icons">create</i></a>
                      <a href="#" id="editDeleteButton" className="btn-floating btn-medium #a280ff pulse"><i id={item.id} onClick={this.onClickDelete} className="small material-icons">delete</i></a>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div id="addButtonContainer">
          <a href="#modalCadastro" className="btn-floating btn-large #a280ff pulse modal-trigger"><i className="large material-icons">add</i></a>
        </div>

        {/* ----------------------------------------------------------------MODAL---------------------------------------------------------------- */}

        <div id="modalCadastro" className="modal modal-fixed-footer">
          <FormularioCadastroCliente tema="#a280ff" />
        </div>
        <div id="modalEdit" className="modal modal-fixed-footer">          
          {this.state.clienteSelected !== undefined ? <FormularioEdicaoCliente cliente={this.state.clienteSelected} /> : <></>}
        </div>
      </div >
    );
  }
}
