/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../../Style/myStyle.css'



type props = {
    tema: string;
};

export default class HistoricoAline extends Component<props> {

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
                    <div id="collapsibleBody">
                        <h5>Produtos</h5>
                        <span>3x Esmalte</span><br />
                        <span>2x Shampoo</span><br />
                        <span>2x Condicionador</span><br />
                        <hr />
                        <span>Total Produto: R$: 59,00</span>
                        <h5>Serviços</h5>
                        <span>1x Manicure e Pedicure</span><br />
                        <hr />
                        <span>Total Serviços: R$: 30,00</span>
                        <div id="totalContainer">
                            <span id="total">Total: R$: 89,00</span>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}