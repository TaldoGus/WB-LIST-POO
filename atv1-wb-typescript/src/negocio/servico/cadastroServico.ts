
import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../../modelo/cadastro";
import VerificacaoNumero from "../verificacoes/verificacaoNumero";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(servicos: Array<Servico>) {
        super();
        this.entrada = new Entrada();
        this.servicos = servicos;
    }
    public cadastrar(): void {
        let verificacao = new VerificacaoNumero()
        console.log(`\nInício do cadastro do serviço:`);
        let nome = this.entrada.receberTexto(`Nome: `);
        while (this.servicos.find(item => item.nome == nome || nome.length == 0 || nome == " ")){
            let mensagem = nome.length == 0 || nome == " "? 'Nome: ' : 'Produto já cadastrado. Nome: '
            nome = this.entrada.receberTexto(`${mensagem}`)

        }
        let preco = this.entrada.receberTexto(`Preço, R$: `);
        while (preco.length == 0 || preco == " " || verificacao.verificar(preco) || new Number(preco).valueOf() <= 0){
            let mensagem = preco.length == 0 || preco == " "? 'Preço, R$: ': 'Inválido. Preço, R$: '
            preco = this.entrada.receberTexto(`${mensagem}`)
        }
        let servico = new Servico(nome, new Number(preco).valueOf());
        this.servicos.push(servico);
        console.log(`\nCadastro concluído :)`);
    }
}
