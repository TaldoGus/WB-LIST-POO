import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
import ListagemDados from "../negocio/listagens/listagemDados";
import OpcoesCliente from "../negocio/opcoes/opcoesCliente";
import OpcoesProduto from "../negocio/opcoes/opcoesProduto";
import OpcoesServico from "../negocio/opcoes/opcoesServico";
import Vender from "../negocio/vendas/vender";
import TestesValidarLista from "./teste";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

let testesParaProfValidar = new TestesValidarLista(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
testesParaProfValidar.gerarUsuariosTeste()

while (execucao) {
    console.log(`----------------------------------------------`);
    console.log(`Opções:`);
    console.log(`\n1 - Clientes`);
    console.log(`2 - Produtos`);
    console.log(`3 - Serviços`);
    console.log(`4 - Vender produto/serviço`)
    console.log(`\n5 - Listagens de negócio`);
    console.log(`\n0 - Sair`);
     let entrada = new Entrada()
    console.log(`----------------------------------------------`);
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    switch (opcao) {
        case 1:
            let clientes = new OpcoesCliente(empresa)
            clientes.runOpcoes()
            break;
        case 2:
            let produtos = new OpcoesProduto(empresa)
            produtos.runOpcoes()
            break;
        case 3:
            let servicos = new OpcoesServico(empresa)
            servicos.runOpcoes()
            break;
        case 5:
            let listarDados = new ListagemDados(empresa);
            listarDados.listar();
            break;
        case 4:
            let venderProdServ = new Vender(empresa);
            venderProdServ.runOpcoes();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}