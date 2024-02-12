import React from "react";
import "./style.scss";
import Upcoming from "../../../../assets/images/upcoming-events.svg";
import Location from "../../../../assets/images/location.svg";
const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <h3>
        <img src={Upcoming} />
        فعالياتنا القادمة
      </h3>
      <div className="row">
        <div className="col-md-6">
          <div className="content">
            <div className="">
              <h5>
                24
                <br />
                سبتمبر
              </h5>
              <span>11:30 - 13:00</span>
            </div>
            <div className="card">
              <h5>
                فعالية اليوم الوطني <br />
                السعودي
              </h5>
              <span>
                <img src={Location} />
                المقر الرئيسي
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="content">
            <div className="">
              <h5>
                10
                <br />
                أغسطس
              </h5>
              <span>11:30 - 13:00</span>
            </div>
            <div className="card">
              <h5>فعالية يوم الآيس كريم</h5>
              <span>
                <img src={Location} />
                المقر الرئيسي
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
