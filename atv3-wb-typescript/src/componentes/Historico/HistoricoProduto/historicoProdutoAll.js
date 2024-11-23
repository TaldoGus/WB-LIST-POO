/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "../../Style/myStyle.css";

export default function HistoricoProdutoAll() {
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
            Condicionador
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <span>Aline 2x</span>
            <br />
            <span>Gustavo 3x</span>
            <br />
            <hr />
            <span>Total vendido: 5</span>
            <br />
          </div>
        </li>
        <li>
          <div id="collapsibleHeader" className="collapsible-header">
            Esmalte
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <span>Aline 3x</span>
            <br />
            <hr />
            <span>Total vendido: 3</span>
            <br />
          </div>
        </li>
        <li>
          <div id="collapsibleHeader" className="collapsible-header">
            Shampoo
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <span>Aline 2x</span>
            <br />
            <span>Gustavo 4x</span>
            <br />
            <hr />
            <span>Total vendido: 6</span>
            <br />
          </div>
        </li>
      </ul>
    </div>
  );
}
