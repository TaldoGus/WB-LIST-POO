import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../../modelo/cadastro";
import VerificacaoNumero from "../verificacoes/verificacaoNumero";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super();
        this.entrada = new Entrada();
        this.produtos = produtos;
    }
    public cadastrar(): void {
        let verificacao = new VerificacaoNumero()

        console.log(`\nInício do cadastro do produto:`);
        let nome = this.entrada.receberTexto(`Nome: `);
        while (this.produtos.find(item => item.nome == nome || nome.length == 0)){
            let mensagem = nome.length == 0? 'Nome: ': 'Produto já cadastrado. Nome: '
            nome = this.entrada.receberTexto(`${mensagem}`)

        }
        let preco = this.entrada.receberTexto(`Preço, R$: `);
        while (preco.length == 0 || verificacao.verificar(preco) || new Number(preco).valueOf() <= 0 ){
            let mensagem = preco.length == 0? 'Preço, R$: ': 'Inválido. Preço, R$: '
            preco = this.entrada.receberTexto(`${mensagem}`)
        }
        let produto = new Produto(nome, new Number(preco).valueOf());
        this.produtos.push(produto);
        console.log(`\nCadastro concluído :)`);
    }
}