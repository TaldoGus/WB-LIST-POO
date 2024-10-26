import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import ListagemProdutos from "../listagens/listagemProduto";
import CadastroProduto from "../produto/cadastroProduto";
import UpdateProduto from "../produto/updateProduto";

export default class OpcoesProduto {

    private empresa: Empresa
    private entrada: Entrada
    private execucao: boolean

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada()
        this.execucao = true;
    }

    public runOpcoes(): void {
        while (this.execucao) {
            console.log(`----------------------------------------------`);
            console.log(`Opções de cadastro de produtos`);
            console.log(`\n1 - Cadastrar produto`);
            console.log(`2 - Listar todos os produtos`);
            console.log(`3 - Visualizar produto`);
            console.log(`4 - Atualizar produto`);
            console.log(`5 - Deletar produto`);
            console.log(`\n0 - Voltar`);
            console.log(`----------------------------------------------`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            console.log(`----------------------------------------------`);

            switch (opcao) {
                case 1:
                    let cadastroProduto = new CadastroProduto(this.empresa.getProdutos);
                    cadastroProduto.cadastrar();
                    break;
                case 2:
                    let listagemProduto = new ListagemProdutos(this.empresa.getProdutos);
                    listagemProduto.listar();
                    break;
                case 3:
                    let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
                    let p = this.empresa.getProdutos.find(produt => produt.nome == nome);
                    if(p != undefined) {
                        p.visualizar()
                    } else {
                        console.log(`Produto não encontrado!`);
                    }
                    break;
                case 4:
                    let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
                    let produto = this.empresa.getProdutos.find(produt => produt.nome == nomeProduto);
                    if (produto != undefined) {
                        let atualizarProduto = new UpdateProduto(produto,this.empresa);
                        atualizarProduto.atualizar();
                    } else {
                        console.log(`Produto não encontrado!`);
                    }
                    break;
                case 5:
                    let nomeProdutoDelete = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
                    let protudoDelete = this.empresa.getProdutos.find(produt => produt.nome == nomeProdutoDelete);
                    if (protudoDelete != undefined) {
                        let indexProduto = this.empresa.getProdutos.indexOf(protudoDelete);
                        this.empresa.getProdutos.splice(indexProduto, 1);
                        console.log(`\nProduto excluído com sucesso!`);
                    } else {
                        console.log(`Produto não encontrado!`);
                    }
                    break;
                case 0:
                    this.execucao = false;
                    console.log(`\nVoltando ao menu principal`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
    }
}