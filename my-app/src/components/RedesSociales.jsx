import React from "react";
// import { Link } from 'react-router-dom';
import "../css/stylos.css";
import wt from "../img/wt.png";
import facebook from "../img/message.png";
import gmail from "../img/google-plus.png";

export const RedesSociales = () => {
  return (
    <div className="redSocial">
      <input className="input3" type="text" id="link" value="https://ayauri29.github.io/hackaton-users/" />
      <a href="https://web.whatsapp.com/">
        <img className="redes" src={wt} alt="whatsapp"></img>
      </a>
      <a href="https://www.facebook.com">
        <img
          className="redes"
          src={facebook}
          alt="facebook"
          onClick={() => {
            const link = document.getElementById("link")
            link.select();
            document.execCommand("copy")
            console.log(document.execCommand("copy"));
          }}
        ></img>
      </a>
      <a href="https://mail.google.com">
        <img className="redes" src={gmail} alt="Gmail"></img>
      </a>
    </div>
  );
};
