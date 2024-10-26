import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import ListagemServico from "../listagens/listagemServico";
import CadastroServico from "../servico/cadastroServico";
import UpdateServico from "../servico/updateServico";

export default class OpcoesServico {

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
            console.log(`Opções de cadastro de serviços`);
            console.log(`\n1 - Cadastro serviço`);
            console.log(`2 - Listar todos os serviços`);
            console.log(`3 - Visualizar serviço`)
            console.log(`4 - Atualizar serviço`);
            console.log(`5 - Deletar serviço`);
            console.log(`\n0 - Voltar`);
            console.log(`----------------------------------------------`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            console.log(`----------------------------------------------`);

            switch (opcao) {
                case 1:
                    let cadastroServico = new CadastroServico(this.empresa.getServicos);
                    cadastroServico.cadastrar();
                    break;
                case 2:
                    let listagemServico = new ListagemServico(this.empresa.getServicos);
                    listagemServico.listar();
                    break;
                case 3:
                    let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
                    let s = this.empresa.getServicos.find(produt => produt.nome == nome);
                    if(s != undefined) {
                        s.visualizar()
                    } else {
                        console.log(`Serviço não encontrado!`);
                    }
                    break;
                case 4:
                    let nomeServico = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
                    let servico = this.empresa.getServicos.find(servic => servic.nome == nomeServico);
                    if (servico != undefined) {
                        let atualizarServicos = new UpdateServico(servico,this.empresa);
                        atualizarServicos.atualizar();
                    } else {
                        console.log(`Serviço não encontrado!`);
                    }
                    break;
                case 5:
                    let nomeServicoDelete = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
                    let servicoDelete = this.empresa.getServicos.find(servic => servic.nome == nomeServicoDelete);
                    if (servicoDelete != undefined) {
                        let indexServico = this.empresa.getServicos.indexOf(servicoDelete);
                        this.empresa.getServicos.splice(indexServico, 1);
                        console.log(`\nServiço excluído com sucesso!\n`);
                    } else {
                        console.log(`Serviço não encontrado!`);
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