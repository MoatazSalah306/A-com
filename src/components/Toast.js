import React from "react";
import JEWELLERY_1 from "../assets/images/products/jewellery-1.jpg";

function Toast() {
  return (
    <>
      <div className="notification-toast" data-toast>
        <button className="toast-close-btn" data-toast-close>
          <ion-icon name="close-outline" />
        </button>
        <div className="toast-banner">
          <img
            src={JEWELLERY_1}
            alt="Rose Gold Earrings"
            width={80}
            height={70}
          />
        </div>
        <div className="toast-detail">
          <p className="toast-message">Someone in new just bought</p>
          <p className="toast-title">Rose Gold Earrings</p>
          <p className="toast-meta">
            <time dateTime="PT2M">2 Minutes</time> ago
          </p>
        </div>
      </div>
    </>
  );
}

export default Toast;
