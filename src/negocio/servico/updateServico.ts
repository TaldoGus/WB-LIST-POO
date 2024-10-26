import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Servico from "../../modelo/servico";
import Update from "../../modelo/update";
import VerificacaoNumero from "../verificacoes/verificacaoNumero";

export default class UpdateServico extends Update{
    private servico: Servico;
    private entrada: Entrada;
    private empresa: Empresa;

    constructor(servico: Servico, empresa: Empresa){
        super();
        this.servico = servico;
        this.empresa = empresa;
        this.execucao = true;
        this.wasUpdated = false;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        let verificacao = new VerificacaoNumero()
        while(this.execucao){
            console.log(`----------------------------------------------`);
            console.log(`Início do update do serviço ${this.servico.nome}`);
            console.log(`\nOpções de update:`);
            console.log(`1 - Trocar nome`);
            console.log(`2 - Alterar valor`);
            console.log(`\n0 - Voltar`);
            console.log(`----------------------------------------------`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            console.log(`----------------------------------------------`);
            switch(opcao){
                case 1:
                    let newName = this.entrada.receberTexto(`Novo nome: `);
                    while (this.empresa.getServicos.find(item => item.nome == newName || newName.length == 0 || this.servico.nome == newName || newName == " ")){
                        let mensagem = newName.length == 0 || newName == " "? 'Novo nome: ' : 'Serviço já cadastrado. Novo nome: `'
                        mensagem = this.servico.nome == newName? `Não pode ser igual ao anterior. Novo nome: ` : mensagem
                        newName = this.entrada.receberTexto(`${mensagem}`)
                    }
                    this.servico.nome = newName;
                    console.log(`Succeso, agora o servico se chama ${this.servico.nome}`);
                    this.wasUpdated = true;
                    break;
                case 2:
                    let newValor = this.entrada.receberTexto(`Preço, R$: `)
                    while (this.servico.preco == new Number(newValor).valueOf() || new Number(newValor).valueOf() <= 0 || newValor.length == 0 || verificacao.verificar(newValor)){
                        let mensagem = newValor.length == 0 ? 'Preço, R$: ' : new Number(newValor).valueOf() <= 0 || verificacao.verificar(newValor)? 'Inválido. Preço, R$: ' : 'Não pode ser o mesmo do anterior. Preço, R$: '
                        newValor = this.entrada.receberTexto(`${mensagem}`)
                    }
                    this.servico.preco = new Number(newValor).valueOf()
                    console.log(`\nValor alterado com sucesso!`);
                    this.wasUpdated = true
                    break
                case 0:
                    this.execucao = false;
                    if(this.wasUpdated) console.log(`\nAtualizações salvas!`);
                    else console.log(`\nNenhuma atualização feita.`);
                    console.log(`\nVoltando ao menu principal`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
    }
}