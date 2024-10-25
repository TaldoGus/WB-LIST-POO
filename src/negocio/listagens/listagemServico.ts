import Listagem from "../../modelo/listagem";
import Servico from "../../modelo/servico";

export default class ListagemServico extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos;
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        console.log(`----------------------------------------------`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`Preço: ` + servico.preco)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}