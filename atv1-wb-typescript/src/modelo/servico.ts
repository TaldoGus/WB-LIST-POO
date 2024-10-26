export default class Servico {
    public nome: string;
    public preco: number;
    private quantidadeVendida: number

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco
        this.quantidadeVendida = 0
    }

    get getQuantidadeVendida(): number {return this.quantidadeVendida}

    set setQuantidadeVendida(input: number) { this.quantidadeVendida = input }

    public visualizar(): void {
        console.log(`----------------------------------------------`);
        console.log(`Informações do serviço ${this.nome}:`);
        console.log(`----------------------------------`);
        console.log(`Preço: ${this.preco}`)
        console.log(`Quantidade vendida: ${this.quantidadeVendida}`)
    }
}