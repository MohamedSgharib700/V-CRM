import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import Home from "../../../assets/images/Home.svg";
import Offer from "../../../assets/images/Offer.svg";
import Apps from "../../../assets/images/layout-grid.svg";
import Map from "../../../assets/images/map-pin.svg";
import Contact from "../../../assets/images/contact.svg";
import Calendar from "../../../assets/images/calendar.svg";
import Library from "../../../assets/images/library.svg";
import Setting from "../../../assets/images/settings.svg";
import News from "../../../assets/images/newspaper.svg";
import SunActive from "../../../assets/images/sun-active.svg";
import Sun from "../../../assets/images/sun.svg";
import MoonActive from "../../../assets/images/moon-active.svg";
import Moon from "../../../assets/images/moon.svg";
import logout from "../../../assets/images/logout.svg";
import logo from "../../../assets/images/logo.svg";
import { useState } from "react";
const Slidebar = () => {
  //Light
  const [Light, setLight] = useState("on");
  //collapsed
  const [collapsed, setCollapsed] = useState(false);
  //LightFun
  const LightFun = (value) => {
    setLight(value);
    if (value === "on") document.body.classList.remove("LightOff");
    else document.body.classList.add("LightOff");
  };
  return (
    <div className="Slidebar">
      <h4>البوابة الداخلية</h4>
      <ul className="Light">
        <li
          onClick={() => {
            LightFun("on");
          }}
          className={Light === "on" ? "active" : ""}
        >
          <img src={SunActive} className="activeImage" />
          <img src={Sun} />
        </li>
        <li
          onClick={() => {
            LightFun("off");
          }}
          className={Light === "off" ? "active" : ""}
        >
          <img src={Moon} />
          <img src={MoonActive} className="activeImage" />
        </li>
      </ul>
      <ul className="list-unstyled">
        <li>
          <NavLink
            to="/"
            onClick={() => {
              setCollapsed(false);
            }}
          >
            <img src={Home} />
            الرئيسية
          </NavLink>
        </li>
        <li>
          <NavLink to="apps">
            <img src={Apps} /> تطبيقات
          </NavLink>
        </li>
        <li>
          <NavLink to="maps">
            <img src={Map} /> اماكن تهمك
          </NavLink>
        </li>
        <li>
          <NavLink to="contact">
            <img src={Contact} /> الاستعلامات
          </NavLink>
        </li>
        <li>
          <NavLink to="events">
            <img src={Calendar} /> فعالياتنا
          </NavLink>
        </li>
        <li>
          <NavLink to="news">
            <img src={News} /> اخبارنا
          </NavLink>
        </li>
        <li>
          <NavLink to="library">
            <img src={Library} /> المكتبة
          </NavLink>
        </li>
        <li class="nav-item has-submenu">
          <a
            class="nav-link"
            href="#"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            to="/offers-inside"
            className={collapsed ? "activesubmenu" : ""}
          >
            <img src={Offer} /> العروض
          </a>

          <ul class="submenu " className={collapsed ? "show" : "collapse"}>
            <li>
              <NavLink to="/offers-inside">داخل المطار</NavLink>
            </li>
            <li>
              <NavLink to="/offers-outside">خارج المطار</NavLink>
            </li>
          </ul>
        </li>
        {/* <li>
          <NavLink to="about">
            <img src={Apps}/> عن شركتنا
          </NavLink>
        </li>
        <li>
          <NavLink to="setting">
            <img src={Setting}/> الاعدادات
          </NavLink>
        </li> */}
      </ul>
      <div className="Logout">
        <button>
          <img src={logout} />
          تسجيل الخروج{" "}
        </button>
      </div>
      <div className="logo">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Slidebar;
