import Cliente from "../../modelo/cliente";
import Listagem from "../../modelo/listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        console.log(`----------------------------------------------`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Sexo: ` + cliente.getSexo);
            console.log(`Telefone: ` + `(` + cliente.getTelefone.getDdd + `)` + cliente.getTelefone.getNumero);
            
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}