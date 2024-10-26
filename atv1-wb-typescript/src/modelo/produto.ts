export default class Produto {
    public nome: string;
    public preco: number;
    private quantidadeVendida: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeVendida = 0
    }

    get getQuantidadeVendida(): number {return this.quantidadeVendida}

    set setQuantidadeVendida(quantidadeVendida: number) { this.quantidadeVendida = quantidadeVendida }

    public visualizar(): void {
        console.log(`----------------------------------------------`);
        console.log(`Informações do produto ${this.nome}:`);
        console.log(`----------------------------------`);
        console.log(`Preço: ${this.preco}`)
        console.log(`Quantidade vendida: ${this.quantidadeVendida}`)
    }
}