/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../../Style/myStyle.css'


type props = {
    tema: string;
};

export default class HistoricoGustavo extends Component<props> {

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
    }

    render() {
        return (
            <ul>
                <li>
                    <div>
                        <h5>Produtos</h5>
                        <span>4x Shampoo</span><br />
                        <span>3x Condicionador</span><br />
                        <hr />
                        <span>Total Produto: R$: 75,00</span>
                        <h5>Serviços</h5>
                        <span>2x Corte de Cabelo</span><br />
                        <hr />
                        <span>Total Produto: R$: 100,00</span>
                        <div id="totalContainer">
                            <span id="total">Total: R$: 175,00</span>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}