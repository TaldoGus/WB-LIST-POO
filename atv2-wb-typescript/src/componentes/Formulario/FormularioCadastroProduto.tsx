
import React, { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {

    render() {
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div id="modalLine" className="row">
                            <div className="input-field col s7">
                                <input id="name" type="text" className="validate" />
                                <label htmlFor="name">nome</label>
                            </div>
                            <div className="input-field col s5">
                                <input id="price" type="text" className="validate" />
                                <label htmlFor="price">Preço</label>
                            </div>
                        </div>
                        <div id="modalLine" className="row">
                            <div className="input-field col s12">
                                <input id="estoque" type="text" className="validate" />
                                <label htmlFor="estoque">Em estoque</label>
                            </div>
                        </div>
                    </form>
                </div >
            </>
        )
    }
}