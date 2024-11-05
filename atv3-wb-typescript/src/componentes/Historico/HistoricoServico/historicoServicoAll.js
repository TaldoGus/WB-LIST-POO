/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {  useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "../../Style/myStyle.css";

export default function HistoricoServicoAll() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll(".modal");
    M.Modal.init(elemsModal);
  });

  return (
    <div id="historyCollapsibleContainer">
      <ul className="collapsible">
        <li>
          <div id="collapsibleHeader" className="collapsible-header">
            Corte de Cabelo
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <span>Gustavo 2x</span>
            <br />
            <hr />
            <span>Total realizados: 2</span>
            <br />
          </div>
        </li>
        <li>
          <div id="collapsibleHeader" className="collapsible-header">
            Manicure e Pedicure
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <span>Aline 1x</span>
            <br />
            <hr />
            <span>Total realizados: 1</span>
            <br />
          </div>
        </li>
      </ul>
    </div>
  );
}