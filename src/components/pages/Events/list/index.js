import React from "react";
import "./style.scss";
import ReactPaginate from "react-paginate"; // for pagination
import { IconContext } from "react-icons"; // for customizing icons
import { useState, useEffect } from "react"; // useState for storing data and useEffect for changing data on click
import { NavLink } from "react-router-dom";
import event1 from "../../../../assets/images/event-1.jpg";
import event2 from "../../../../assets/images/event-2.jpg";
import event3 from "../../../../assets/images/event-3.jpg";
import event4 from "../../../../assets/images/event-4.jpg";
import event5 from "../../../../assets/images/event-5.jpg";
import event6 from "../../../../assets/images/event-6.jpg";
function ListOfferInside() {
  // //Light
  const data = [
    { id: 0, img: event1 },
    { id: 1, img: event1 },
    { id: 2, img: event1 },
    { id: 3, img: event1 },
    { id: 4, img: event1 },
    { id: 5, img: event1 },
    { id: 6, img: event1 },
    { id: 7, img: event1 },
    { id: 8, img: event1 },
    { id: 9, img: event1 },
    { id: 10, img: event1 },
    { id: 11, img: event1 },
    { id: 12, img: event1 },
    { id: 13, img: event1 },
    { id: 14, img: event1 },
    { id: 15, img: event1 },
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

  const [events , setEvents] =  useState([]);   
  useEffect(() => {
    fetch('http://localhost:8080/events')
    .then(response => response.json())
    .then(data => setEvents(data))
    .catch(error => console.error('Error fetching data:', error));
  },[]);
  return (
    <div className="list-events">
      <div className="row">
        <div className="col-md-12">
          <ul className="fillter-list">
            <li className="active">
              <span>داخلية</span>
            </li>
            <li>
              <span>خارجيه</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="div">
  <div class="div-2">
    <div class="column">
    <NavLink to="event-clander">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd3af36e4c97d54eb1b26a03d3027e277692b05088f54628ccce86a124f09deb?apiKey=8830230e27d84e338a27f0148cb3fa90&"
        class="img"
      />
      </NavLink>
    </div>
    <div class="column-2">
      <div class="div-3">
        <div class="div-4">بحث</div>
        <div class="div-5">
          <div class="div-6">ابحث عن فعاليات</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/268316382e27ab7925e86d3544d26e0a0009b40c70913fc506b676ec346381a5?apiKey=8830230e27d84e338a27f0148cb3fa90&"
            class="img-2"
          />
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="List">
        {" "}
        <div className="row mt-4">
        {events.map(event => (
          <div className="col-md-4 mb-3">
            <NavLink to="/event-signal">
            <div className="card">
              <img src={event2} />
              <span className="card-title"> {event.name}</span>
              <div className="footer-card">
                <h6>{event.name}</h6>
                <h5>{event.date}</h5>
              </div>
            </div>
            </NavLink>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListOfferInside;
