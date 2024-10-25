import CPF from "./cpf"
import HistoricoConsumo from "./historicoConsumo"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {

    public nome: string
    public nomeSocial: string
    public sexo: string
    private cpf: CPF
    private rg: RG
    private dataCadastro: Date
    public telefone: Telefone
    private historicoConsumo: Array<HistoricoConsumo>
    public quantidadeProdutos: number
    public quantidadeServicos: number

    constructor(nome: string, nomeSocial: string, cpf: CPF, rg: RG, sexo: string, telefone: Telefone) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rg = rg
        this.dataCadastro = new Date()
        this.telefone = telefone
        this.historicoConsumo = []
        this.sexo = sexo
        this.quantidadeProdutos = 0
        this.quantidadeServicos = 0
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRg(): RG {
        return this.rg
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefone(): Telefone {
        return this.telefone
    }

    public get getSexo(): string {
        return this.sexo
    }

    public get getHistoricoConsumo(): Array<HistoricoConsumo> {
        return this.historicoConsumo
    }

    public visualizar(): void {
        console.log(`----------------------------------------------`);
        console.log(`\nInformações do cliente ${this.nome}:`);
        console.log(`----------------------------------`);
        console.log(`Nome social: ${this.nomeSocial}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`CPF, data emissão: ${this.getCpf.getValor} - ${this.getCpf.getDataEmissao.toLocaleDateString()}`);
        console.log(`RG, data emissão: ${this.getRg.getValor} - ${this.getRg.getDataEmissao.toLocaleDateString()}`);
        console.log(`Telefone: (${this.getTelefone.getDdd}) ${this.getTelefone.getNumero}`);

        let printar: Array<string> = []
        if(this.historicoConsumo.length > 0){
            let totalGasto = 0
            this.historicoConsumo.forEach(element=> {
                if(element.tipo == "produto"){
                    totalGasto += element.valorPago
                    printar.push(` . ${element.quantidade}x ${element.nome}, valor: ${element.valorPago} - ${element.dataConsumo.toLocaleDateString()}`);
                }
            })

            if(printar.length > 0){
                console.log(`----------------------------------`);
                console.log(`Produtos consumidos: `)
                printar.forEach(item => console.log(item))
                console.log(`\nTotal gasto em produtos: ${totalGasto}`)
            }else{
                console.log(`Nenhum produto consumido.`);
            }

            printar = []
            totalGasto = 0

            this.historicoConsumo.forEach(element=> {
                if(element.tipo == "serviço"){
                    totalGasto += element.valorPago
                    printar.push(` . ${element.quantidade}x ${element.nome}, valor: ${element.valorPago} - ${element.dataConsumo.toLocaleDateString()}`);
                }
            })

            if(printar.length > 0){
                console.log(`----------------------------------`);
                console.log(`Serviços consumidos: `)
                printar.forEach(item => console.log(item))
                console.log(`\nTotal gasto em produtos: ${totalGasto}`)
            }else{
                console.log(`----------------------------------`);
                console.log(`Nenhum serviço consumido.`);
                
            }


        }else{
            console.log(`Nenhum consumo registrado.`)
        }
    }
}