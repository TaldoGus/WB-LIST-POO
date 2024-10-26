import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import CadastroCliente from "../cliente/cadastroCliente";
import UpdateCliente from "../cliente/updateCliente";
import ListagemClientes from "../listagens/listagemClientes";

export default class OpcoesCliente {
  private empresa: Empresa;
  private entrada: Entrada;
  private execucao: boolean;

  constructor(empresa: Empresa) {
    this.empresa = empresa;
    this.entrada = new Entrada();
    this.execucao = true;
  }

  public runOpcoes(): void {
    while (this.execucao) {
      console.log(`----------------------------------------------`);
      console.log(`Opções de cadastro de clientes`);
      console.log(`\n1 - Cadastrar cliente`);
      console.log(`2 - Listar todos os clientes`);
      console.log(`3 - Visualizar cliente`);
      console.log(`4 - Atualizar cliente`);
      console.log(`5 - Deletar cliente`);
      console.log(`\n0 - Voltar`);
      console.log(`----------------------------------------------`);
      let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
      console.log(`----------------------------------------------`);
      switch (opcao) {
        case 1:
          let cadastro = new CadastroCliente(this.empresa.getClientes);
          cadastro.cadastrar();
          break;
        case 2:
          let listagem = new ListagemClientes(this.empresa.getClientes);
          listagem.listar();
          break;
        case 3:
          let nomeClienteView = this.entrada.receberTexto(
            `Por favor informe o nome do cliente: `
          );
          let clienteView = this.empresa.getClientes.find(
            (client) => client.nome == nomeClienteView
          );
          7;
          if (clienteView != undefined) {
            clienteView.visualizar();
          } else {
            console.log(`Cliente não encontrado!`);
          }
          break;
        case 4:
          let nomeCliente = this.entrada.receberTexto(
            `Por favor informe o nome do cliente: `
          );
          let cliente = this.empresa.getClientes.find(
            (client) => client.nome == nomeCliente
          );
          if (cliente != undefined) {
            let atualizarCliente = new UpdateCliente(cliente, this.empresa);
            atualizarCliente.atualizar();
          } else {
            console.log(`Cliente não encontrado!`);
          }
          break;
        case 5:
          let nomeClienteDelete = this.entrada.receberTexto(
            `Por favor informe o nome do cliente: `
          );
          let clienteDelete = this.empresa.getClientes.find(
            (client) => client.nome == nomeClienteDelete
          );
          if (clienteDelete != undefined) {
            let indexCliente = this.empresa.getClientes.indexOf(clienteDelete);
            this.empresa.getClientes.splice(indexCliente, 1);
            console.log(`\nCliente excluído com sucesso!`);
          } else {
            console.log(`\nCliente não encontrado!`);
          }
          break;
        case 0:
          this.execucao = false;
          console.log(`\nVoltando ao menu principal`);
          break;
        default:
          console.log(`Operação não entendida :(`);
      }
    }
  }
}