import React from "react";
import { Link } from "react-router-dom";
import HeaderImg from "../images/pexels-nails.jpg";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4></h4>
          <h1>BEAUTY NATION</h1>
          <p>
            Beauty, cosmetic & personal care
          </p>
          <Link to="/plans" className="btn lg">
            Reserva tu cita
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            <img src={HeaderImg} alt="main header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
