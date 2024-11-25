export default class Endereco {
    cidade!: string
    estado!: string
    rua!: string
    bairro!: string
    numero!: string
    informacoesAdicionais!: string
    codigoPostal!: string
    id!: number

    constructor(cidade: string, estado: string, rua: string, bairro: string, numero: string, info: string, cep: string){
        this.cidade = cidade
        this.estado = estado 
        this.rua = rua
        this.bairro = bairro
        this.numero = numero
        this.informacoesAdicionais = info
        this.codigoPostal = cep
    }
}