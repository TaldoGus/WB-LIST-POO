import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
import Update from "../../modelo/update";
import VerificacaoNumero from "../verificacoes/verificacaoNumero";

export default class UpdateProduto extends Update {
    private produto: Produto;
    private entrada: Entrada;
    private empresa: Empresa;

    constructor(produto: Produto, empresa: Empresa) {
        super();
        this.produto = produto;
        this.empresa = empresa
        this.execucao = true;
        this.wasUpdated = false;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        let verificacao = new VerificacaoNumero()
        while (this.execucao) {
            console.log(`----------------------------------------------`);
            console.log(`Início do update do produto ${this.produto.nome}`);
            console.log(`\nOpções de update:`);
            console.log(`1 - Trocar nome`);
            console.log(`2 - Alterar preço`);
            console.log(`\n0 - Voltar`);
            console.log(`----------------------------------------------`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            console.log(`----------------------------------------------`);
            switch (opcao) {
                case 1:
                    let newName = this.entrada.receberTexto(`Novo nome: `);
                    while (this.empresa.getProdutos.find(item => item.nome == newName || newName.length == 0 || this.produto.nome == newName || newName == " ")) {
                        let mensagem = newName.length == 0 || newName == " "? 'Novo nome: ' : 'Produto já cadastrado. Novo nome: '
                        mensagem = this.produto.nome == newName ? `Não pode ser igual ao anterior. Novo nome: ` : mensagem
                        newName = this.entrada.receberTexto(`${mensagem}`)
                    }
                    this.produto.nome = newName;
                    console.log(`Succeso, agora o produto se chama ${this.produto.nome}`);
                    this.wasUpdated = true;
                    break;
                case 2:
                    let newValor = this.entrada.receberTexto(`Preço, R$: `)
                    while (this.produto.preco == new Number(newValor).valueOf() || new Number(newValor).valueOf() <= 0 || newValor.length == 0 || verificacao.verificar(newValor)) {
                        let mensagem = newValor.length == 0 ? 'Preço, R$: ' : new Number(newValor).valueOf() <= 0 || verificacao.verificar(newValor)? 'Inválido. Preço, R$: ' : 'Não pode ser o mesmo do anterior. Preço, R$: '
                        newValor = this.entrada.receberTexto(`${mensagem}`)
                    }
                    this.produto.preco = new Number(newValor).valueOf()
                    console.log(`\nValor alterado com sucesso!`);
                    this.wasUpdated = true
                    break
                case 0:
                    this.execucao = false;
                    if (this.wasUpdated) console.log(`\nAtualizações salvas!`);
                    else console.log(`\nNenhuma atualização feita.`);
                    console.log(`\nVoltando ao menu principal`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
    }
}