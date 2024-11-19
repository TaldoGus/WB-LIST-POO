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
        this.clientes.push(new Cliente('Carlos', 'Carlos Silva', new CPF('11122233344', new Date()), new RG('123456789', new Date()), 'M', new Telefone('11', '999887766')));
        this.clientes.push(new Cliente('Ana', 'Ana Paula', new CPF('55566677788', new Date()), new RG('987654321', new Date()), 'F', new Telefone('21', '988776655')));
        this.clientes.push(new Cliente('Juliana', 'Juliana Mendes', new CPF('88877766655', new Date()), new RG('456789123', new Date()), 'F', new Telefone('31', '977665544')));
        this.clientes.push(new Cliente('Lucas', 'Lucas Almeida', new CPF('99988877766', new Date()), new RG('789123456', new Date()), 'M', new Telefone('41', '966554433')));
        this.clientes.push(new Cliente('Fernanda', 'Fernanda Costa', new CPF('33344455566', new Date()), new RG('159753486', new Date()), 'F', new Telefone('61', '955443322')));
        this.clientes.push(new Cliente('Roberto', 'Roberto Dias', new CPF('44455566677', new Date()), new RG('951753842', new Date()), 'M', new Telefone('19', '944332211')));
        this.clientes.push(new Cliente('Mariana', 'Mariana Lopes', new CPF('11223344556', new Date()), new RG('789456123', new Date()), 'F', new Telefone('13', '933221100')));
        this.clientes.push(new Cliente('João', 'João Pedro', new CPF('22334455667', new Date()), new RG('357951852', new Date()), 'M', new Telefone('27', '922110099')));
        this.clientes.push(new Cliente('Carla', 'Carla Moreira', new CPF('33445566778', new Date()), new RG('753159486', new Date()), 'F', new Telefone('85', '911009988')));
        this.clientes.push(new Cliente('Paulo', 'Paulo Henrique', new CPF('44556677889', new Date()), new RG('654987321', new Date()), 'M', new Telefone('31', '900889977')));
        this.clientes.push(new Cliente('Sofia', 'Sofia Pereira', new CPF('55667788990', new Date()), new RG('963852741', new Date()), 'F', new Telefone('51', '899778866')));
        this.clientes.push(new Cliente('Miguel', 'Miguel Alves', new CPF('66778899011', new Date()), new RG('147258369', new Date()), 'M', new Telefone('55', '888667755')));
        this.clientes.push(new Cliente('Larissa', 'Larissa Figueiredo', new CPF('77889900122', new Date()), new RG('258369147', new Date()), 'F', new Telefone('92', '877556644')));
        this.clientes.push(new Cliente('Gustavo', 'Gustavo Rocha', new CPF('88990011223', new Date()), new RG('369147258', new Date()), 'M', new Telefone('71', '866445533')));
        this.clientes.push(new Cliente('Patricia', 'Patricia Silva', new CPF('99001122334', new Date()), new RG('741852963', new Date()), 'F', new Telefone('11', '855334422')));
        this.clientes.push(new Cliente('Eduardo', 'Eduardo Oliveira', new CPF('01122334455', new Date()), new RG('852963741', new Date()), 'M', new Telefone('48', '844223311')));
        this.clientes.push(new Cliente('Renata', 'Renata Santos', new CPF('12233445566', new Date()), new RG('951357456', new Date()), 'F', new Telefone('45', '833112200')));
        this.clientes.push(new Cliente('Leonardo', 'Leonardo Barros', new CPF('23344556677', new Date()), new RG('753486159', new Date()), 'M', new Telefone('84', '822001199')));
        this.clientes.push(new Cliente('Camila', 'Camila Freitas', new CPF('34455667788', new Date()), new RG('159753486', new Date()), 'F', new Telefone('81', '811990088')));
        this.clientes.push(new Cliente('Pedro', 'Pedro Costa', new CPF('45566778899', new Date()), new RG('951486753', new Date()), 'M', new Telefone('71', '800889977')));
        this.clientes.push(new Cliente('Thiago', 'Thiago Martins', new CPF('56677889900', new Date()), new RG('357951456', new Date()), 'M', new Telefone('64', '799778866')));
        this.clientes.push(new Cliente('Vanessa', 'Vanessa Souza', new CPF('67788990011', new Date()), new RG('147852369', new Date()), 'F', new Telefone('53', '788667755')));
        this.clientes.push(new Cliente('Felipe', 'Felipe Andrade', new CPF('78899001122', new Date()), new RG('258963147', new Date()), 'M', new Telefone('91', '777556644')));
        this.clientes.push(new Cliente('Tatiana', 'Tatiana Ribeiro', new CPF('89900112233', new Date()), new RG('369741852', new Date()), 'F', new Telefone('31', '766445533')));
        this.clientes.push(new Cliente('Marcelo', 'Marcelo Carvalho', new CPF('99011223344', new Date()), new RG('741852963', new Date()), 'M', new Telefone('62', '755334422')));
        this.clientes.push(new Cliente('Isabela', 'Isabela Almeida', new CPF('01122334455', new Date()), new RG('852963741', new Date()), 'F', new Telefone('18', '744223311')));
        this.clientes.push(new Cliente('Daniel', 'Daniel Azevedo', new CPF('12233445566', new Date()), new RG('951357456', new Date()), 'M', new Telefone('95', '733112200')));
        this.clientes.push(new Cliente('Luana', 'Luana Silva', new CPF('23344556677', new Date()), new RG('753486159', new Date()), 'F', new Telefone('77', '722001199')));
        this.clientes.push(new Cliente('Rafael', 'Rafael Lima', new CPF('34455667788', new Date()), new RG('159753486', new Date()), 'M', new Telefone('65', '711990088')));
        this.clientes.push(new Cliente('Caroline', 'Caroline Torres', new CPF('45566778899', new Date()), new RG('951486753', new Date()), 'F', new Telefone('91', '700889977')));



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