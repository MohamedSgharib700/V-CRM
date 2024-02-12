import React from "react";
import { useEffect } from "react";
import Doller from "../../assets/images/doller.svg";
import Fillter from "../../components/pages/Offers/Fillter/index.js";
import ListOfferOutside from "../../components/pages/Offers/list-offer-outside/index.js";
import Container from "react-bootstrap/Container";
import "./style.scss";
function OffersOutside() {
  useEffect(() => {
    document.title = "Offer page";
  }, []);

  return (
    <div className="offer-outside">
      <Container>
        <h5 className="title pb-3">
          <img src={Doller} /> العروض
        </h5>
        <br/>
        <Fillter />
        <ListOfferOutside />
      </Container>
    </div>
  );
}

export default OffersOutside;
