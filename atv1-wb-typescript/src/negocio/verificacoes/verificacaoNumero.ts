import verificacao from "./verificacao"

export default class VerificacaoNumero implements verificacao {
    verificar(valor: any): boolean {
        let numero = new Number(valor)
        return Number.isNaN(numero.valueOf())
    }
}