import Cliente from "../../../modelo/cliente";
import Empresa from "../../../modelo/empresa";
import HistoricoConsumo from "../../../modelo/historicoConsumo";

export default class Listagem4{

    private empresa: Empresa

    constructor(empresa: Empresa){
        this.empresa = empresa
    }

    listar(){
        // Listagem dos produtos e serviços mais consumidos por gênero

        let consumosMasculinosBruto: Array<HistoricoConsumo> = []
        let consumosMasculinosFinal: Array<HistoricoConsumo> = []

        let consumosFemininosBruto: Array<HistoricoConsumo> = []
        let consumosFemininosFinal: Array<HistoricoConsumo> = []

        let consumosOutrosBruto: Array<HistoricoConsumo> = []
        let consumosOutrosFinal: Array<HistoricoConsumo> = []

        this.empresa.getClientes.forEach(item => {
            if(item.sexo == "M"){
                item.getHistoricoConsumo.forEach(c=>{
                    let h = new HistoricoConsumo(c.tipo, c.nome, c.quantidade, c.valorPago)
                    consumosMasculinosBruto.push(h)
                })
            }
        })
        this.empresa.getClientes.forEach(item => {
            if(item.sexo == "F"){
                item.getHistoricoConsumo.forEach(c=>{
                    let h = new HistoricoConsumo(c.tipo, c.nome, c.quantidade, c.valorPago)
                    consumosFemininosBruto.push(h)
                })
            }
        })
        this.empresa.getClientes.forEach(item => {
            if(item.sexo == "O"){
                item.getHistoricoConsumo.forEach(c=>{
                    let h = new HistoricoConsumo(c.tipo, c.nome, c.quantidade, c.valorPago)
                    consumosOutrosBruto.push(h)
                })
            }
        })

        consumosMasculinosBruto.forEach(item => {
            let consumido = consumosMasculinosFinal.find(t=> t.nome == item.nome)
            if(consumido == undefined){
                consumosMasculinosFinal.push(item)
            }else{
                consumido.quantidade += item.quantidade
            }
        })

        consumosFemininosBruto.forEach(item => {
            let consumido = consumosFemininosFinal.find(t=> t.nome == item.nome)
            if(consumido == undefined){
                consumosFemininosFinal.push(item)
            }else{
                consumido.quantidade += item.quantidade
            }
        })

        consumosOutrosBruto.forEach(item => {
            let consumido = consumosOutrosFinal.find(t=> t.nome == item.nome)
            if(consumido == undefined){
                consumosOutrosFinal.push(item)
            }else{
                consumido.quantidade += item.quantidade
            }
        })
        console.log(`----------------------------------------------`);
        console.log(`Produtos e serviços mais consumidos pelo gênero Masculino: `)
        let posicao = 1
        console.log(`---------------------------`);
        consumosMasculinosFinal.sort(function compare(a, b): number {
            let quantidadeA = a.quantidade
            let quantidadeB = b.quantidade
            if(quantidadeB > quantidadeA) return -1
            if(quantidadeA > quantidadeB) return 1
            return 0
        }).reverse().forEach(item => {
            console.log(`${posicao}º ${item.nome} (${item.tipo}), quantidade: ${item.quantidade}`)
            posicao++
        })

        console.log(`\nProdutos e serviços mais consumidos pelo gênero Feminino: `)
        posicao = 1

        console.log(`---------------------------`);
        consumosFemininosFinal.sort(function compare(a, b): number {
            let quantidadeA = a.quantidade
            let quantidadeB = b.quantidade
            if(quantidadeB > quantidadeA) return -1
            if(quantidadeA > quantidadeB) return 1
            return 0
        }).reverse().forEach(item => {
            console.log(`${posicao}º ${item.nome} (${item.tipo}), quantidade: ${item.quantidade}`)
            posicao++
        })

        console.log(`\nProdutos e serviços mais consumidos pelo gênero Outros: `)
        posicao = 1
        console.log(`---------------------------`);
        consumosOutrosFinal.sort(function compare(a, b): number {
            let quantidadeA = a.quantidade
            let quantidadeB = b.quantidade
            if(quantidadeB > quantidadeA) return -1
            if(quantidadeA > quantidadeB) return 1
            return 0
        }).reverse().forEach(item => {
            console.log(`${posicao}º ${item.nome} (${item.tipo}), quantidade: ${item.quantidade}`)
            posicao++
        })
    }
}