/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../../Style/myStyle.css'


type props = {
    tema: string;
};

export default class HistoricoEsmalte extends Component<props> {

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
                    <div id="collapsibleBody" >
                        <span>Aline: 3x</span><br />
                        <hr />
                        <span>Total vendido: 3</span><br />
                    </div>
                </li>
            </ul>
        );
    }
}