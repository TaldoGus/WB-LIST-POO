import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";

export default class TestesValidarLista{

    public clientes: Array<Cliente>
    public produtos: Array<Produto>
    public servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>){
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }

    public gerarUsuariosTeste(){
        // Clientes
        this.clientes.push(new Cliente('Tiago', 'Tiago', new CPF('87233765626', new Date()), new RG('322581965', new Date()), 'M', new Telefone('91', '997350162')))
        this.clientes.push(new Cliente('Andreia', 'Andreia', new CPF('66158113247', new Date()), new RG('195674492', new Date()), 'F', new Telefone('86', '985190294')))
        this.clientes.push(new Cliente('Sarah', 'Sarah', new CPF('77513597901', new Date()), new RG('117409170', new Date()), 'F', new Telefone('91', '927583467')))
        this.clientes.push(new Cliente('Elaine', 'Elaine', new CPF('52179724918', new Date()), new RG('120991524', new Date()), 'F', new Telefone('91', '997350162')))
        this.clientes.push(new Cliente('Fatima', 'Fatima', new CPF('12154974155', new Date()), new RG('562241691', new Date()), 'F', new Telefone('41', '984758385')))
        this.clientes.push(new Cliente('Bruno', 'Bruno', new CPF('77753398024', new Date()), new RG('496612062', new Date()), 'M', new Telefone('11', '983957194')))
        this.clientes.push(new Cliente('Nina', 'Nina', new CPF('33203424010', new Date()), new RG('488688279', new Date()), 'F', new Telefone('11', '985462856')))
        this.clientes.push(new Cliente('Catarina', 'Catarina', new CPF('23572520061', new Date()), new RG('492910285', new Date()), 'O', new Telefone('84', '984148597')))
        this.clientes.push(new Cliente('Fernando', 'Fernando', new CPF('81161508040', new Date()), new RG('201233538', new Date()), 'M', new Telefone('95', '998505825')))
        this.clientes.push(new Cliente('Fernanda', 'Fernanda', new CPF('82191377033', new Date()), new RG('351163311', new Date()), 'O', new Telefone('96', '96989531259')))
        this.clientes.push(new Cliente('Maria', 'Maria', new CPF('52376507081', new Date()), new RG('274090193', new Date()), 'F', new Telefone('51', '986280540')))
        this.clientes.push(new Cliente('Beatriz', 'Beatriz', new CPF('11836899009', new Date()), new RG('323565815', new Date()), 'F', new Telefone('69', '982689441')))
        this.clientes.push(new Cliente('Daiane', 'Daiane', new CPF('33851696077', new Date()), new RG('210919590', new Date()), 'F', new Telefone('98', '981102471')))
        this.clientes.push(new Cliente('Mario', 'Mario', new CPF('20294030085', new Date()), new RG('239764079', new Date()), 'O', new Telefone('45', '994179996')))
        this.clientes.push(new Cliente('Marcos', 'Marcos', new CPF('39387663019', new Date()), new RG('410483606', new Date()), 'M', new Telefone('63', '999437784')))
        this.clientes.push(new Cliente('Rodrigo', 'Rodrigo', new CPF('01671415035', new Date()), new RG('159574870', new Date()), 'M', new Telefone('63', '984565215')))
        this.clientes.push(new Cliente('Elias', 'Elias', new CPF('28641837060', new Date()), new RG('242908974', new Date()), 'M', new Telefone('67', '984755496')))
        this.clientes.push(new Cliente('Jose', 'Jose', new CPF('26494158005', new Date()), new RG('297085840', new Date()), 'M', new Telefone('61', '993276454')))
        this.clientes.push(new Cliente('Joao', 'Joao', new CPF('96200240019', new Date()), new RG('286902886', new Date()), 'M', new Telefone('98', '8989705422')))
        this.clientes.push(new Cliente('Gabriel', 'Gabriel', new CPF('66847450096', new Date()), new RG('438990493', new Date()), 'M', new Telefone('95', '992656998')))
        this.clientes.push(new Cliente('Lorenzo', 'Lorenzo', new CPF('10970330073', new Date()), new RG('459248431', new Date()), 'M', new Telefone('84', '987072367')))
        this.clientes.push(new Cliente('Isaque', 'Isaque', new CPF('77607516050', new Date()), new RG('500704880', new Date()), 'M', new Telefone('95', '989765489')))
        this.clientes.push(new Cliente('Otavio', 'Otavio', new CPF('17064086093', new Date()), new RG('133697502', new Date()), 'M', new Telefone('92', '993909673')))
        this.clientes.push(new Cliente('Theo', 'Theo', new CPF('17325679050', new Date()), new RG('183423410', new Date()), 'O', new Telefone('82', '997775330')))
        this.clientes.push(new Cliente('Thales', 'Thales', new CPF('22586438051', new Date()), new RG('481418350', new Date()), 'M', new Telefone('75', '982780314')))
        this.clientes.push(new Cliente('Gabriela', 'Gabriela', new CPF('29971566028', new Date()), new RG('327253290', new Date()), 'F', new Telefone('82', '986477097')))
        this.clientes.push(new Cliente('Victoria', 'Victoria', new CPF('67342794058', new Date()), new RG('398410513', new Date()), 'F', new Telefone('95', '989765489')))
        this.clientes.push(new Cliente('Renata', 'Renata', new CPF('78111707010', new Date()), new RG('414311668', new Date()), 'F', new Telefone('62', '987557786')))
        this.clientes.push(new Cliente('Alana', 'Alana', new CPF('91882130057', new Date()), new RG('459779096', new Date()), 'F', new Telefone('27', '986148484')))
        this.clientes.push(new Cliente('Aline', 'Aline', new CPF('12448918007', new Date()), new RG('213479588', new Date()), 'F', new Telefone('79', '993196411')))

        //Produtos
        this.produtos.push(new Produto('Esmalte Preto', 5))
        this.produtos.push(new Produto('Esmalte Branco', 4))
        this.produtos.push(new Produto('Esmalte Rosa', 4))
        this.produtos.push(new Produto('Shampoo', 15))
        this.produtos.push(new Produto('Condicionador', 17))
        this.produtos.push(new Produto('Creme Hidratante', 20))
        this.produtos.push(new Produto('Creme Pentear', 10))
        this.produtos.push(new Produto('Ativador Cachos', 13))
        this.produtos.push(new Produto('Shampoo Barba', 25))
        this.produtos.push(new Produto('Agua Oxigenada', 5))
        this.produtos.push(new Produto('Tinta Cabelo', 20))
        this.produtos.push(new Produto('Pente', 7))
        this.produtos.push(new Produto('Peruca', 80))
        this.produtos.push(new Produto('Escova', 35))
        this.produtos.push(new Produto('Tesoura', 15))
        this.produtos.push(new Produto('Agua', 2))
        this.produtos.push(new Produto('Cafe', 3))
        this.produtos.push(new Produto('Bolacha', 3))
        this.produtos.push(new Produto('Fruta', 1))
        this.produtos.push(new Produto('Agua com gas', 5))
        
        //Serviços
        this.servicos.push(new Servico('Corte de cabelo masculino', 25))
        this.servicos.push(new Servico('Corte de cabelo feminino', 30))
        this.servicos.push(new Servico('Tintura', 50))
        this.servicos.push(new Servico('Luzes', 80))
        this.servicos.push(new Servico('Progressiva', 100))
        this.servicos.push(new Servico('Manicure', 25))
        this.servicos.push(new Servico('Pedicure', 30))
    }
}