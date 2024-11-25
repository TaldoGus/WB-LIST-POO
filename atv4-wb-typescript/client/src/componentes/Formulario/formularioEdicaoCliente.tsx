import { Component } from "react";
import Swal from "sweetalert2";
import Cliente from "../Modelo/cliente";
import Endereco from "../Modelo/endereco";
import Telefone from "../Modelo/telefone";

type props = {
  cliente: Cliente;
};

type state = {
  nome: string;
};

export default class FormularioEdicaoCliente extends Component<props, state> {
 
  private nome;
  private sobrenome;
  private email;
  private telefoneDDD;
  private telefoneNumero;
  private enderecoRua;
  private enderecoNumero;
  private enderecoBairro;
  private enderecoCEP;
  private enderecoCidade;
  private enderecoEstado;
  private enderecoComplemento;

  constructor(props: props | Readonly<props>) {
    super(props);
    this.state = {
      nome: this.props.cliente.nome,
    };

    this.onClickEmail = this.onClickEmail.bind(this);
    this.onClickEnderecoBairro = this.onClickEnderecoBairro.bind(this);
    this.onClickEnderecoCEP = this.onClickEnderecoCEP.bind(this);
    this.onClickEnderecoCidade = this.onClickEnderecoCidade.bind(this);
    this.onClickEnderecoComplemento =
      this.onClickEnderecoComplemento.bind(this);
    this.onClickEnderecoEstado = this.onClickEnderecoEstado.bind(this);
    this.onClickEnderecoNumero = this.onClickEnderecoNumero.bind(this);
    this.onClickEnderecoRua = this.onClickEnderecoRua.bind(this);
    this.onClickTelefoneDDD = this.onClickTelefoneDDD.bind(this);
    this.onClickTelefoneNumero = this.onClickTelefoneNumero.bind(this);
    this.onClickNome = this.onClickNome.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickSobreNome = this.onClickSobreNome.bind(this);
  }

  componentDidMount(): void {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
    this.load();
  }

  componentDidUpdate(
    prevProps: Readonly<props>,
    prevState: Readonly<any>,
    snapshot?: any
  ): void {
    if (this.props != prevProps) {
      this.load();
    }
  }

  load(): void {
    this.setState({
      nome: this.props.cliente.nome,
    });
    this.nome = this.props.cliente.nome;
    this.sobrenome = this.props.cliente.sobreNome;
    this.email = this.props.cliente.email;
    this.telefoneDDD = this.props.cliente.telefones[0].ddd;
    this.telefoneNumero = this.props.cliente.telefones[0].numero;
    this.enderecoRua = this.props.cliente.endereco.rua;
    this.enderecoNumero = this.props.cliente.endereco.numero;
    this.enderecoBairro = this.props.cliente.endereco.bairro;
    this.enderecoCEP = this.props.cliente.endereco.codigoPostal;
    this.enderecoCidade = this.props.cliente.endereco.cidade;
    this.enderecoEstado = this.props.cliente.endereco.estado;
    this.enderecoComplemento =
      this.props.cliente.endereco.informacoesAdicionais;
  }

  async cadastro(): Promise<boolean> {
    let retorno = false;
    let endereco = new Endereco(
      this.enderecoCidade,
      this.enderecoEstado,
      this.enderecoRua,
      this.enderecoBairro,
      this.enderecoNumero,
      this.enderecoComplemento,
      this.enderecoCEP
    );
    let mapeado = {
      id: this.props.cliente.id,
      nome: this.nome,
      sobreNome: this.sobrenome,
      email: this.email,
      endereco: endereco,
      telefones: Array<Telefone>(),
    };
    let tel = new Telefone();
    tel.ddd = this.telefoneDDD;
    tel.numero = this.telefoneNumero;
    mapeado.telefones.push(tel);
    console.log(mapeado);
    await fetch("http://localhost:32832/cliente/atualizar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapeado),
    }).then((r) => {
      retorno = r.status === 200;
    });
    return retorno;
  }

  async onSubmit() {
    if (
      !this.nome ||
      !this.sobrenome ||
      !this.email ||
      !this.telefoneDDD ||
      !this.telefoneNumero ||
      !this.enderecoRua ||
      !this.enderecoNumero ||
      !this.enderecoBairro ||
      !this.enderecoCidade ||
      !this.enderecoEstado ||
      !this.enderecoCEP ||
      !this.enderecoComplemento
    ) {
      Swal.fire("Erro!", "Preencha todos os campos.", "error");
      return;
    }

    if (!this.email.includes("@") || !this.email.includes(".com")) {
      Swal.fire({
        icon: "error",
        title: "E-mail inválido",
        text: "E-mail deve conter '@' e '.com'",
      });
      return;
    }

    if ((this.telefoneDDD + "").length < 2) {
      Swal.fire({
        icon: "error",
        title: "DDD inválido.",
        text: "DDD deve conter apenas 2 dígitos",
      });
      return;
    }

    if ((this.telefoneNumero + "").length < 9) {
      Swal.fire({
        icon: "error",
        title: "Número de telefone inválido.",
      });
      return;
    }

    if ((this.enderecoCEP + "").length < 8) {
      Swal.fire({
        icon: "error",
        title: "CEP inválido.",
        text: "CEP deve conter 8 dígitos",
      });
      return;
    }

    // validações

    let resposta = await this.cadastro();
    if (resposta) {
      Swal.fire("Sucesso!", "Cliente atualizado com sucesso.", "success").then(
        (result) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.location.reload();
        }
      );
    } else {
      Swal.fire("Erro!", "Não foi possível atualizar.", "error").then(
        (result) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.location.reload();
        }
      );
    }
  }

  onClickNome(event) {
    this.nome = event.target.value;
  }
  onClickSobreNome(event) {
    this.sobrenome = event.target.value;
  }
  onClickEmail(event) {
    this.email = event.target.value;
  }
  onClickTelefoneDDD(event) {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(0, event.target.maxLength);
    }
    this.telefoneDDD = event.target.value;
  }
  onClickTelefoneNumero(event) {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(0, event.target.maxLength);
    }
    this.telefoneNumero = event.target.value;
  }
  onClickEnderecoCidade(event) {
    this.enderecoCidade = event.target.value;
  }
  onClickEnderecoEstado(event) {
    this.enderecoCidade = event.target.value;
  }
  onClickEnderecoCEP(event) {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(0, event.target.maxLength);
    }
    this.enderecoCEP = event.target.value;
  }
  onClickEnderecoRua(event) {
    this.enderecoRua = event.target.value;
  }
  onClickEnderecoNumero(event) {
    this.enderecoNumero = event.target.value;
  }
  onClickEnderecoComplemento(event) {
    this.enderecoComplemento = event.target.value;
  }
  onClickEnderecoBairro(event) {
    this.enderecoBairro = event.target.value;
  }

  render() {
    return (
      <>
        <div className="modal-content">
          <h5>Edição de Cliente</h5>
          <div className="row">
            <form className="col s12">
              <div id="modalLine" className="row">
                <div className="input-field col s7">
                  <input
                    defaultValue={this.nome}
                    onChange={this.onClickNome}
                    id="first_name"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="first_name" className="active">
                    nome
                  </label>
                </div>
                <div className="input-field col s5">
                  <input
                    defaultValue={this.sobrenome}
                    id="last_name"
                    onChange={this.onClickSobreNome}
                    type="text"
                  />
                  <label htmlFor="last_name" className="active">
                    sobrenome
                  </label>
                </div>
              </div>
              <div id="modalLine" className="row">
                <div className="input-field col s12">
                  <input
                    defaultValue={this.email}
                    id="email"
                    onChange={this.onClickEmail}
                    type="text"
                  />
                  <label htmlFor="email" className="active">
                    E-mail
                  </label>
                </div>
              </div>
              <div id="modalLine" className="row">
                <div className="input-field col s2">
                  <input
                    defaultValue={this.telefoneDDD}
                    id="ddd"
                    onChange={this.onClickTelefoneDDD}
                    type="number"
                    maxLength={2}
                  />
                  <label htmlFor="ddd" className="active">
                    DDD
                  </label>
                </div>
                <div className="input-field col s4">
                  <input
                    defaultValue={this.telefoneNumero}
                    id="number"
                    onChange={this.onClickTelefoneNumero}
                    type="number"
                    maxLength={9}
                  />
                  <label htmlFor="number" className="active">
                    Número
                  </label>
                </div>
              </div>
              <h6>Endereço</h6>
              <div id="modalLine" className="row">
                <div className="input-field col s5">
                  <input
                    defaultValue={this.enderecoCidade}
                    id="cidade"
                    onChange={this.onClickEnderecoCidade}
                    type="text"
                  />
                  <label htmlFor="cidade" className="active">
                    Cidade
                  </label>
                </div>
                <div className="input-field col s4">
                  <input
                    defaultValue={this.enderecoEstado}
                    id="estado"
                    onChange={this.onClickEnderecoEstado}
                    type="text"
                  />
                  <label htmlFor="estado" className="active">
                    Estado
                  </label>
                </div>
                <div className="input-field col s3">
                  <input
                    defaultValue={this.enderecoCEP}
                    id="cep"
                    onChange={this.onClickEnderecoCEP}
                    type="number"
                    maxLength={8}
                  />
                  <label htmlFor="cep" className="active">
                    CEP
                  </label>
                  <span className="helper-text">Somente números</span>
                </div>
              </div>
              <div id="modalLine" className="row">
                <div className="input-field col s9">
                  <input
                    defaultValue={this.enderecoRua}
                    id="rua"
                    type="text"
                    onChange={this.onClickEnderecoRua}
                  />
                  <label htmlFor="rua" className="active">
                    Rua
                  </label>
                </div>
                <div className="input-field col s3">
                  <input
                    defaultValue={this.enderecoNumero}
                    id="numero"
                    onChange={this.onClickEnderecoNumero}
                    type="number"
                  />
                  <label htmlFor="numero" className="active">
                    Nº
                  </label>
                </div>
              </div>
              <div id="modalLine" className="row">
                <div className="input-field col s4">
                  <input
                    defaultValue={this.enderecoBairro}
                    id="bairro"
                    type="text"
                    onChange={this.onClickEnderecoBairro}
                  />
                  <label htmlFor="bairro" className="active">
                    Bairro
                  </label>
                </div>
              </div>
              <h6>Informações adicionais</h6>
              <div id="modalLine" className="row">
                <div className="input-field col s12">
                  {/* <input defaultValue={this.props.cliente.endereco.informacoesAdicionais} id="complemento" onChange={this.onClickEnderecoComplemento} type="text" />
                                        <label htmlFor="complemento" className="active">Informações</label> */}
                  <textarea
                    defaultValue={this.enderecoComplemento}
                    id="complemento"
                    className="materialize-textarea"
                    onChange={this.onClickEnderecoComplemento}
                  ></textarea>
                  <label htmlFor="complemento" className="active">
                    Informações
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            id="cancelButtonContainer"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="cancelButton" className="material-icons right">
                cancel
              </i>
            </a>
            Cancelar
          </button>
          <button
            id="cadastrarButtonContainer"
            onClick={this.onSubmit}
            type="submit"
            name="action"
            className="waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="sendButton" className="material-icons right">
                send
              </i>
            </a>
            Atualizar
          </button>
        </div>
      </>
    );
  }
}
