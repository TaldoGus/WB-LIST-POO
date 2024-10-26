import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../../modelo/cadastro";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import VerificacaoNumero from "../verificacoes/verificacaoNumero";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let verificador = new VerificacaoNumero()
        console.log(`Início do cadastro do cliente:`);

        let nome = this.entrada.receberTexto(`Nome: `)
        while (nome.length == 0 || nome == " ") {
            nome = this.entrada.receberTexto(`Inválido. Nome: `)
        }

        let nomeSocial = this.entrada.receberTexto(`Nome social: `)
        while (nomeSocial.length == 0 || nomeSocial == " ") {
            nomeSocial = this.entrada.receberTexto(`Inválido. Nome social: `)
        }

        let sexo = this.entrada.receberTexto(`Sexo (M,F,O): `).toUpperCase()
        while (sexo != "M" && sexo != "F" && sexo != "O") {
            sexo = this.entrada.receberTexto(`Inválido. Sexo (M,F,O): `).toUpperCase();
        }

        let rgValor = this.entrada.receberTexto(`RG (Somente números): `)
        while (rgValor.length != 9 || verificador.verificar(rgValor) || this.clientes.find(item => item.getRg.getValor == rgValor) != undefined || rgValor == " ") {
            let mensagem = rgValor.length == 0? 'RG (Somente números): ': 'Inválido. RG (Somente números): '
            rgValor = this.entrada.receberTexto(`${mensagem}`)
        }

        let rgData = this.entrada.receberTexto(`Data de emissão do RG (dd/mm/yyyy): `);

        while (!rgData.includes("/") ||
            rgData.split("/").length != 3 ||
            rgData.split("/")[0].length != 2 ||
            rgData.split("/")[1].length != 2 ||
            rgData.split("/")[2].length != 4 ||
            verificador.verificar(rgData.split("/")[0]) ||
            (new Number(rgData.split("/")[0]).valueOf() > 31 || new Number(rgData.split("/")[0]).valueOf() <= 0) ||
            verificador.verificar(rgData.split("/")[1]) ||
            (new Number(rgData.split("/")[1]).valueOf() > 12 || new Number(rgData.split("/")[1]).valueOf() <= 0) ||
            verificador.verificar(rgData.split("/")[2]) ||
            (new Number(rgData.split("/")[2]).valueOf() > 2022 || new Number(rgData.split("/")[2]).valueOf() <= 0)) {
            rgData = this.entrada.receberTexto(`Inválido. Data de emissão do RG (dd/mm/yyyy): `);
        }

        let cpfValor = this.entrada.receberTexto(`CPF (Somente números): `);

        while (cpfValor.length != 11 || verificador.verificar(cpfValor) || this.clientes.find(item => item.getCpf.getValor == cpfValor) != undefined || cpfValor == " ") {
            let mensagem = cpfValor.length == 0? 'CPF (Somente números): ' : 'Inválido. CPF (Somente números): '
            cpfValor = this.entrada.receberTexto(`${mensagem}`)
        }

        let cpfData = this.entrada.receberTexto(`Data de emissão do CPF (dd/mm/yyyy): `);

        while (!cpfData.includes("/") ||
            cpfData.split("/").length != 3 ||
            cpfData.split("/")[0].length != 2 ||
            cpfData.split("/")[1].length != 2 ||
            cpfData.split("/")[2].length != 4 ||
            verificador.verificar(cpfData.split("/")[0]) ||
            (new Number(cpfData.split("/")[0]).valueOf() > 31 || new Number(cpfData.split("/")[0]).valueOf() <= 0) ||
            verificador.verificar(cpfData.split("/")[1]) ||
            (new Number(cpfData.split("/")[1]).valueOf() > 12 || new Number(cpfData.split("/")[1]).valueOf() <= 0) ||
            verificador.verificar(cpfData.split("/")[2]) ||
            (new Number(cpfData.split("/")[2]).valueOf() > 2022 || new Number(cpfData.split("/")[2]).valueOf() <= 0)) 
        {
            cpfData = this.entrada.receberTexto(`Inválido. Data de emissão do CPF (dd/mm/yyyy): `);
        }

        let telefoneDDD = this.entrada.receberTexto(`DDD (Somente números): `)
        while (telefoneDDD.length != 2 || verificador.verificar(telefoneDDD) || telefoneDDD == " ") {
            let mensagem = telefoneDDD.length == 0? 'DDD (Somente números): ' : 'Inválido. DDD (Somente números): '
            telefoneDDD = this.entrada.receberTexto(`${mensagem}`)
        }

        let telefoneNumero = this.entrada.receberTexto(`Número telefone: `)
        while (telefoneNumero.length != 9 || verificador.verificar(telefoneNumero) || telefoneNumero == " ") {
            let mensagem = telefoneNumero.length == 0? 'Número telefone: ' : 'Inválido. Número telefone: '
            telefoneNumero = this.entrada.receberTexto(`${mensagem}`)
        }

        let cpfPartesData = cpfData.split('/')
        let cpfAno = new Number(cpfPartesData[2].valueOf()).valueOf()
        let cpfMes = new Number(cpfPartesData[1].valueOf()).valueOf()
        let cpfDia = new Number(cpfPartesData[0].valueOf()).valueOf()
        let cpfDataEmissao = new Date(cpfAno, cpfMes, cpfDia)
        let cpf = new CPF(cpfValor, cpfDataEmissao)

        let rgPartesData = rgData.split('/')
        let rgAno = new Number(rgPartesData[2].valueOf()).valueOf()
        let rgMes = new Number(rgPartesData[1].valueOf()).valueOf()
        let rgDia = new Number(rgPartesData[0].valueOf()).valueOf()
        let rgDataEmissao = new Date(rgAno, rgMes, rgDia)
        let rg = new RG(rgValor, rgDataEmissao)

        let telefone = new Telefone(telefoneDDD, telefoneNumero)

        let cliente = new Cliente(nome, nomeSocial, cpf, rg, sexo, telefone)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

}