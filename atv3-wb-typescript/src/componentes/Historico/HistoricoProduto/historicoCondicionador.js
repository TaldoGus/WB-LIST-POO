/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "../../Style/myStyle.css";

export default function HistoricoCondicionador() {
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
          <span>Aline 2x</span>
          <br />
          <span>Gustavo 3x</span>
          <br />
          <hr />
          <span>Total vendido: 5</span>
          <br />
        </div>
      </li>
    </ul>
  );
}
