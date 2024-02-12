import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";
import OfferImg from "../../../../assets/images/offer-img.png";
import OfferImg2 from "../../../../assets/images/offer-img2.png";
import ReactPaginate from "react-paginate"; // for pagination
import { IconContext } from "react-icons"; // for customizing icons
import { NavLink } from "react-router-dom";
function ListOfferOutside() {
 //Light
 const data = [
  { id: 0, img: OfferImg2 },
  { id: 1, img: OfferImg },
  { id: 2, img: OfferImg2 },
  { id: 3, img: OfferImg },
  { id: 4, img: OfferImg2 },
  { id: 5, img: OfferImg },
  { id: 6, img: OfferImg2 },
  { id: 7, img: OfferImg },
  { id: 8, img: OfferImg2 },
  { id: 9, img: OfferImg },
  { id: 10, img: OfferImg2 },
  { id: 11, img: OfferImg },
  { id: 12, img: OfferImg2 },
  { id: 13, img: OfferImg },
  { id: 14, img: OfferImg2 },
  { id: 15, img: OfferImg },
];

const [page, setPage] = useState(0);
const [filterData, setFilterData] = useState();
const n = 6;
useEffect(() => {
  setFilterData(
    data.filter((item, index) => {
      return (index >= page * n) & (index < (page + 1) * n);
    })
  );
}, [page]);

const [offers , setOffers] =  useState([]);
 const besicUrl = useState('http://localhost:8080/offers');
useEffect(() => {
  fetch('http://localhost:8080/offers')
  .then(response => response.json())
  .then(data => setOffers(data))
  .catch(error => console.error('Error fetching data:', error));
},[]);

return (
  <div className="list-offer-inside">
    <div className="row">
      <div className="col-md-12">
        <ul className="fillter-list">
          <li className="active">
            <span>الكل</span>
          </li>
          <li>
            <span>طعام</span>
          </li>
          <li>
            <span>تسوق </span>
          </li>
          <li>
            <span> صحة ولياقة </span>
          </li>
          <li>
            <span> جمال وسبا </span>
          </li>
          <li>
            <span> ترفيه</span>
          </li>
          <li>
            <span> سفر وفنادق</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="List">
      {" "}
      <div className="row mt-4">
      {offers.map(offer => (
            <div className="col-md-4 mb-3">
              <NavLink to="/offer-signal">
                <div className="card">
                  <span className="card-title-i">ينتهي خلال ٢ يوم</span>
                  <div className="content-img">
                    <img src={OfferImg} />
                  </div>
                  <div className="footer-card">
                    <h6>{offer.title} </h6>
                    <span>خصم {offer.category_id}%</span>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
    <div className="pagination-sec">
      {" "}
      <ReactPaginate
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        activeClassName={"active"}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={Math.ceil(data.length / n)}
        breakLabel="..."
        previousLabel={
          <IconContext.Provider>
            <span>السابق</span>
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider>
            <span>التالى</span>
          </IconContext.Provider>
        }
      />
      <span className="total">إجمالي {n} صفحات</span>;
    </div>
  </div>
);
}

export default ListOfferOutside;
