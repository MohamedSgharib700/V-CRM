import React from "react";
import "./style.scss";
import News from "../../../../assets/images/news.svg";
import X from "../../../../assets/images/x.svg";
import Linkedin from "../../../../assets/images/Linkedin.svg";
import HomeHearder from "../../../../assets/images/home-hearder.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      {" "}
      <div className="content">
        <h5 className="title pb-3">
          <img src={News} /> جديدنا
        </h5>
        <div className="header-page">
          <div className="content">
            {" "}
            <img src={HomeHearder} className="img-header" />
            <p className="title-header">
              في أجواء وطنية جميلة، احتفلنا اليوم مع كافة منسوبينا بمناسبة
              <br />
              #اليوم_الوطني_السعودي_93.بحضور سعادة الرئيس التنفيذي وقيادات شركة
              <br />
              مطارات جدة.
            </p>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card p-4 m-2">
                <h6>
                  {" "}
                  انطلاقة جديدة .. نسعى من خلالها إلى #الترحيب_بالجميع. شاهد ..
                  قصة الهوية الجديدة لشركة مطارات جدة. #welcoming_culture
                  <NavLink to="/"> للمزيد..</NavLink>
                  <NavLink to="/" className="link-social">
                    {" "}
                    <img src={X} />
                  </NavLink>
                </h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 m-2">
                <h6>
                  {" "}
                  انطلاقة جديدة .. نسعى من خلالها إلى #الترحيب_بالجميع. شاهد ..
                  قصة الهوية الجديدة لشركة مطارات جدة. #welcoming_culture
                  <NavLink to="/"> للمزيد..</NavLink>
                  <NavLink to="/" className="link-social">
                    {" "}
                    <img src={Linkedin} />
                  </NavLink>
                </h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 m-2">
                <h6>
                  {" "}
                  انطلاقة جديدة .. نسعى من خلالها إلى #الترحيب_بالجميع. شاهد ..
                  قصة الهوية الجديدة لشركة مطارات جدة. #welcoming_culture
                  <NavLink to="/"> للمزيد..</NavLink>
                  <NavLink to="/" className="link-social">
                    {" "}
                    <img src={X} />
                  </NavLink>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
