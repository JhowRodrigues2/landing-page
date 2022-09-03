import React from "react";
export default function Main() {
  return (
    <div className="main">
      <div className="center">
        <div className="menu">
          <div className="logo">
            <h3>Jhow Developer</h3>
          </div>
          <div className="item-menu">
            <a href="#">Login</a>
          </div>
        </div>
        <div className="form">
          <h2>Entre em Contato!</h2>

          <form>
            <div className="itensForm">
              <input type="text" placeholder="Seu nome..." />
              <input type="text" placeholder="Telefone..." />
              <input type="text" placeholder="E-mail..." />
              <input type="text" placeholder="WhatsApp.." />
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
