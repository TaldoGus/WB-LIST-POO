import Entrada from "../../../io/entrada";
import Empresa from "../../../modelo/empresa";

export default class Listagem1{

    private empresa: Empresa

    constructor(empresa: Empresa){
        this.empresa = empresa
    }


    listar(){
        let posicao = 1
        let clientes = this.empresa.getClientes
        clientes.sort(function compare(a, b): number{
            let quantidadeA = 0
            a.getHistoricoConsumo.forEach(item => quantidadeA += item.quantidade)
            let quantidadeB = 0
            b.getHistoricoConsumo.forEach(item => quantidadeB += item.quantidade)

            if(quantidadeB > quantidadeA){
                return -1
            }
            if(quantidadeA > quantidadeB){
                return 1
            }
            return 0
        }).reverse().forEach(item => {
            if(posicao <= 10){
                let quantidadeConsumida = 0
                item.getHistoricoConsumo.forEach(i => quantidadeConsumida += i.quantidade)
                console.log(`${posicao}º Cliente: ${item.nome} , Quantidade: ${quantidadeConsumida}`)
            }
            posicao++;
        })

    }
}