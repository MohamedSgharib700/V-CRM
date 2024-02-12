import React from "react";
import { useEffect } from "react";
import Calendar from "../../assets/images/calendarb.png";
import Fillter from "../../components/pages/Events/Fillter/index.js";
import Events from "../../components/pages/Events/list/index.js";
import Container from "react-bootstrap/Container";
import "./style.scss";
function Offers() {
  useEffect(() => {
    document.title = "Offer page";
  }, []);

  return (
    <div className="offer-inside">
      <Container>
        <h5 className="title pb-3">
          <img src={Calendar} /> فاعليات
        </h5>
        <Events />
      </Container>
    </div>
  );
}

export default Offers;
