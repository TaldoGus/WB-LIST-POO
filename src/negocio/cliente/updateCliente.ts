import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Telefone from "../../modelo/telefone";
import Update from "../../modelo/update";
import VerificacaoNumero from "../verificacoes/verificacaoNumero";

export default class UpdateCliente extends Update {
    private cliente: Cliente;
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(cliente: Cliente, empresa: Empresa) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
        this.empresa = empresa;
        this.execucao = true;
        this.wasUpdated = false;
    }

    public atualizar(): void {
        let verificador = new VerificacaoNumero()
        while (this.execucao) {
            console.log(`----------------------------------------------`);
            console.log(`Início do update do cliente ${this.cliente.nome}`);
            console.log(`\nOpções de update:`);
            console.log(`1 - Trocar nome`);
            console.log(`2 - Trocar nome social`);
            console.log(`3 - Alterar sexo`)
            console.log(`4 - Alterar telefone`);
            console.log(`\n0 - Voltar`);
            console.log(`----------------------------------------------`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            console.log(`----------------------------------------------`);
            switch (opcao) {
                case 1:
                    let newName = this.entrada.receberTexto(`Novo nome: `);
                    while (newName.length == 0 || this.cliente.nome == newName || newName == " ") {
                        let mensagem = newName.length == 0 || newName == " "? 'Novo nome: ' : 'Não pode ser igual ao anterior, novo nome: '
                        newName = this.entrada.receberTexto(`${mensagem}`)
                    }
                    this.cliente.nome = newName;
                    this.wasUpdated = true;
                    console.log(`\nSucesso, agora o cliente se chama: ${newName}`);
                    break;

                case 2:
                    let newSocialName = this.entrada.receberTexto(`Novo nome social: `);
                    while (newSocialName.length == 0 || this.cliente.nomeSocial == newSocialName || newSocialName == " ") {
                        let mensagem = newSocialName.length == 0 || newSocialName == " "? 'Novo nome social: ': 'Não pode ser igual ao anterior, novo nome social: '
                        newSocialName = this.entrada.receberTexto(`${mensagem}`)
                    }
                    this.cliente.nomeSocial = newSocialName;
                    this.wasUpdated = true;
                    console.log(`\nSucesso, agora o nome social do cliente é: ${newSocialName}`);
                    break;

                case 3:
                    let newSexo = this.entrada.receberTexto(`Novo sexo: `).toUpperCase();
                    while (this.cliente.sexo == newSexo || (newSexo != "M" && newSexo != "F" && newSexo != "O")) {
                        let mensagem = this.cliente.sexo == newSexo? 'Não pode ser igual ao anterior, novo sexo: ' : 'Inválido, novo sexo: '
                        newSexo = this.entrada.receberTexto(`${mensagem}`).toUpperCase()
                    }
                    this.cliente.sexo = newSexo;
                    this.wasUpdated = true;
                    console.log(`\nSucesso, agora o sexo do cliente é: ${newSexo}`);
                    break;

                case 4:
                    let newPhoneDdd = this.entrada.receberTexto(`Novo DDD: `);
                    while (newPhoneDdd.length != 2 || verificador.verificar(newPhoneDdd) || newPhoneDdd == " ") {
                        let mensagem = newPhoneDdd.length == 0 || newPhoneDdd == " "? 'Novo DDD: ' : 'Inválido, novo DDD: '
                        newPhoneDdd = this.entrada.receberTexto(`${mensagem}`)
                    }

                    let newPhoneNumber = this.entrada.receberTexto(`Novo número de telefone: `);
                    while (newPhoneNumber.length == 0 || verificador.verificar(newPhoneNumber) || this.cliente.telefone.getNumero == newPhoneNumber || newPhoneNumber == " ") {
                        let mensagem = newPhoneNumber.length == 0 || newPhoneNumber == " "? 'Novo número de telefone: ' : verificador.verificar(newPhoneNumber)? 'Inválido, novo número de telefone: ' : 'Não pode ser igual ao anterior, novo número de telefone: ' 
                        newPhoneNumber = this.entrada.receberTexto(`${mensagem}`)
                    }
                    let newPhone = new Telefone(newPhoneDdd, newPhoneNumber);
                    this.cliente.telefone = newPhone
                    this.wasUpdated = true;
                    console.log(`\nSucesso, alterado o telefone: (${newPhone.getDdd}) ${newPhone.getNumero} `);
                    break;
                    
                case 0:
                    this.execucao = false;
                    if (this.wasUpdated) console.log(`Atualizações salvas!`);
                    else console.log(`\nNenhuma atualização feita.`);
                    console.log(`\nVoltando ao menu principal`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
    }


}