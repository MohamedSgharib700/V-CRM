import React from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import event from "../../assets/images/event-2.jpg";
import "./style.scss";
function OfferSignal() {
  useEffect(() => {
    document.title = "Offer single page";
  }, []);

  return (
    <div className="offer-single">
      <Container>
        <div className="Detailes">
          <h4 className="title pb-3"> فعاليات اليوم الوطني</h4>
          <span className="internal-events">فعاليات داخلية </span>
        </div>
        <div className="row">
          {" "}
          <div className="col-md-12 mt-4">
            {" "}
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    عن فعاليات اليوم الوطني
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body"> فعاليات اليوم الوطني فعاليات اليوم الوطني 
                  فعاليات اليوم الوطني فعاليات اليوم الوطني
                  فعاليات اليوم الوطني فعاليات اليوم الوطني</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    الشروط والأحكام
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">ddssdfsdf</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    الموقع الإلكتروني
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">for test</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Content-food">
          <div className="row ">
            <div className="col-md-4">
              <img src={event} />
            </div>
            <div className="col-md-4">
              <img src={event} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OfferSignal;
