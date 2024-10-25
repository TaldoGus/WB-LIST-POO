export default class HistoricoConsumo{

    public tipo: string
    public nome: string
    public quantidade: number
    public dataConsumo: Date
    public valorPago: number

    constructor(tipo: string, nome: string, quantidade: number, valorPago: number){
        this.tipo = tipo
        this.nome = nome
        this.quantidade = quantidade
        this.dataConsumo = new Date()
        this.valorPago = valorPago
    }
}