import React from "react";
import "./style.scss";
import Access from "../../../../assets/images/access.svg";
const QuickAccess = () => {
  return (
    <div className="quick-access">
      <h3>
        <img src={Access} />
        الوصول السريع
      </h3>
      <div className="row">
        <div className="col-md-3">
          <div className="content">
            <h5>الاستعلامات</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="content">
            <h5>العروض</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="content">
            <h5>أماكن تهمك</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="content">
            {" "}
            <h5>جدير </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
