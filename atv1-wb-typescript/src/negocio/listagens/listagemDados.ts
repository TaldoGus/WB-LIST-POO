import Listagem from "../../modelo/listagem";
import Empresa from "../../modelo/empresa";
import Entrada from "../../io/entrada";
import Listagem1 from "./listagensNegocio/listagem1";
import Listagem4 from "./listagensNegocio/listagem4";
import Produto from "../../modelo/produto";

export default class ListagemDados extends Listagem {
    private empresa: Empresa;
    private entrada: Entrada;
    private execucao: Boolean;

    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa;
        this.entrada = new Entrada();
        this.execucao = true;
    }

    public listar(): void {
        while(this.execucao){
            console.log(`----------------------------------------------`);         
            console.log(`Escolha uma opção de dado para visualizar:`);
            console.log(`----------------------------------------------`);
            console.log(`\n1 - Listar 10 clientes que mais consumiram produtos e serviços em quantidade`);
            console.log(`2 - Listagem de todos os clientes por gênero`);
            console.log(`3 - Listagem geral de produtos e serviços mais consumidos`);
            console.log(`4 - Listagem dos produtos e serviços mais consumidos por gênero`);
            console.log(`5 - Listagem dos 10 clientes que menos consumiram produtos e serviços`);
            console.log(`6 - Listagem dos 5 clientes que mais consumiram em valor`);
            console.log(`\n0 - Voltar`);
        
            console.log(`----------------------------------------------`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
    
            switch(opcao){
                case 1: // Listar 10 clientes que mais consumiram produtos e serviços em quantidade
                    console.log(`----------------------------------------------`);
                    console.log(`Listagem de 10 clientes que mais consumiram produtos e serviços:`)
                    console.log(`----------------------------------------------`);
                    new Listagem1(this.empresa).listar()

                    break;
                case 2: // Listagem de todos os clientes por gênero
                    console.log(`----------------------------------------------`);
                    console.log(`Listagem de clientes por gênero:`)
                    console.log(`----------------------------------------------`);
                    console.log(`\nSexo masculino: `)
                    console.log(`------------------------------`);
                    this.empresa.getClientes.forEach(item => {
                        if(item.sexo == "M"){
                            console.log(`. ${item.nome}`)
                        }
                    })
                    console.log(" ")
                    console.log(`Sexo feminino:`)
                    console.log(`------------------------------`);
                    this.empresa.getClientes.forEach(item => {
                        if(item.sexo == "F"){
                            console.log(`. ${item.nome}`)
                        }
                    })
                    console.log(" ")
                    console.log(`Outro(s) sexo(s):`)
                    console.log(`------------------------------`);
                    this.empresa.getClientes.forEach(item => {
                        if(item.sexo == "O"){
                            console.log(`. ${item.nome}`)
                        }
                    })


                    break;
                case 3: // Listagem geral de produtos e serviços mais consumidos
                    console.log(`----------------------------------------------`);
                    console.log(`\nProdutos mais consumidos: `);
                    console.log(`------------------------------`);
                    let posicao = 1;
                    this.empresa.getProdutos.sort(function compare(a, b){
                        if(b.getQuantidadeVendida > a.getQuantidadeVendida) return -1
                        if(a.getQuantidadeVendida > b.getQuantidadeVendida) return 1
                        return 0
                    }).reverse().forEach(item => {
                        console.log(`${posicao}º Produto: ${item.nome}, quantidade: ${item.getQuantidadeVendida}`)
                        posicao++
                    })
                    posicao = 1
                    console.log(`\nServiços mais consumidos: `);
                    console.log(`------------------------------`);
                    this.empresa.getServicos.sort(function compare(a, b){
                        if(b.getQuantidadeVendida > a.getQuantidadeVendida) return -1
                        if(a.getQuantidadeVendida > b.getQuantidadeVendida) return 1
                        return 0
                    }).reverse().forEach(item => {
                        console.log(`${posicao}º Serviço: ${item.nome}, quantidade: ${item.getQuantidadeVendida}`)
                        posicao++
                    })

                    break;
                case 4: // Listagem dos produtos e serviços mais consumidos por gênero

                    new Listagem4(this.empresa).listar()
                    
                    break;
                case 5: // Listagem dos 10 clientes que menos consumiram produtos e serviços
                    console.log(`----------------------------------------------`);
                    console.log(`Listagem de 10 clientes que menos consumiram produtos e serviços:`)
                    console.log(`----------------------------------------------`);
                    let posicaoMenos = 1
                    let clientesMenos = this.empresa.getClientes;
                    clientesMenos.sort(function compare(a, b): number {
                        if ((b.quantidadeServicos + b.quantidadeProdutos) > (a.quantidadeProdutos + a.quantidadeServicos)) {
                          return -1;
                        }
                        if ((a.quantidadeProdutos + a.quantidadeServicos) > (b.quantidadeProdutos + b.quantidadeServicos)) {
                          return 1;
                        }
                        return 0;
                      })
                      clientesMenos.forEach(item => {
                        if(posicaoMenos <= 10){
                            let quantidadeConsumida = item.quantidadeProdutos + item.quantidadeServicos
                            console.log(`${posicaoMenos}º Cliente: ${item.nome} , Quantidade: ${quantidadeConsumida}`)
                        }
                        posicaoMenos++;
                    })

                    break;
                case 6: // Listagem dos 5 clientes que mais consumiram em valor
                    console.log(`----------------------------------------------`);
                    console.log(`Listagem de 5 clientes que mais consumiram em valor:`)
                    console.log(`----------------------------------------------`);
                    let posicaoValor = 1
                    let clientesValor = this.empresa.getClientes;
                    clientesValor.sort(function compare(a, b): number {
                        let aSoma = 0;
                        a.getHistoricoConsumo.forEach(item=>{
                            aSoma += item.valorPago
                        })
                        let bSoma = 0;
                        b.getHistoricoConsumo.forEach(item=>{
                            bSoma += item.valorPago
                        })
                        if (bSoma > aSoma) {
                          return -1;
                        }
                        if (aSoma > bSoma) {
                          return 1;
                        }
                        return 0;
                      }).reverse().forEach(item => {
                        if(posicaoValor <= 5){
                            let somaItem = 0;
                            item.getHistoricoConsumo.forEach(it => {
                                somaItem += it.valorPago
                            })
                            console.log(`${posicaoValor}º Cliente: ${item.nome} , Valor: ${somaItem}`)
                        }
                        posicaoValor++;
                    })

                    break;
                case 0: // outro

                    this.execucao = false;
                    console.log(`----------------------------------------------`);
                    console.log(`\nVoltando ao menu principal`)

                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
    }

    public produtoExists(nomeProduto: string): boolean{
        let produto = this.empresa.getProdutos.find(prod => prod.nome == nomeProduto);
        return produto != undefined;
    }

    public getProduto(nomeProduto: string): Produto | undefined{
        let produto = this.empresa.getProdutos.find(prod => prod.nome == nomeProduto);
        return produto;
    }
}