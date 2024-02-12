import React from "react";
import { useEffect } from "react";
import Doller from "../../assets/images/doller.svg";
import Fillter from "../../components/pages/Offers/Fillter/index.js";
import ListOfferInside from "../../components/pages/Offers/list-offer-inside/index.js";
import Container from "react-bootstrap/Container";
import "./styles.scss";
function Offers() {
  useEffect(() => {
    document.title = "Offer page";
  }, []);

  return (
    <div className="offer-inside">
      <Container>
        <h5 className="title pb-3">
          <img src={Doller} /> العروض
        </h5>
        <br />
        <Fillter />
        <ListOfferInside />
      </Container>
    </div>
  );
}

export default Offers;
