/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {  useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "../../Style/myStyle.css";

export default function HistoricoCorte() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll(".modal");
    M.Modal.init(elemsModal);
  });

  return (
    <ul>
      <li>
        <div id="collapsibleBody">
          <span>Gustavo 2x</span>
          <br />
          <hr />
          <span>Total realizados: 2</span>
          <br />
        </div>
      </li>
    </ul>
  );
}