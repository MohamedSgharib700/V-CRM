import React from "react";
import "./style.scss";
import MyRemindersIcon from "../../../../assets/images/MyRemindersIcon.svg";
import Date from "../../../../assets/images/date.svg";
import List from "../../../../assets/images/list.svg";
const MyReminders = () => {
  return (
    <div className="my-reminders">
      <h3>
        <img src={MyRemindersIcon} />
        تذكيراتي
      </h3>
      <div className="row">
        <div className="col-md-6">
          <div className="email-message">
            <p>
              جميع <span>رسائل البريد</span> مقروءة...
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="content">
            <div className="">
              <h5>
                <img src={Date} />
                <br />
                الاجتماع القادم
              </h5>
            </div>
            <div className="card">
              <ul className="Date">
                <li>
                  <span>11:30 - 13:00</span>
                </li>
                <li>
                  <span> 8/1/2023</span>
                </li>
                <li>
                  <button>انضم الآن</button>
                </li>
                <li>
                  <p>Malak Al-Zahrani RE: Internal Portal</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="content">
            <div className="">
              <h5>
                <img src={Date} />
                <br />
                مدير المهام
              </h5>
            </div>
            <div className="card">
              <ul className="List">
                <li>
                  <input type="checkbox" id="givepapper" />
                  <label for="givepapper">اعطي الاوراق لمنى</label>
                </li>
                <li>
                  <input type="checkbox" id="anwseremil" />
                  <label for="anwseremil">ايميل الموارد البشرية</label>
                </li>
                <li>
                  <input type="checkbox" id="post" />
                  <label for="post"> بوست الانستقرام</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReminders;
