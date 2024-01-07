import React from 'react'
import CTA_BANNER from "../assets/images/cta-banner.jpg";

function Cta() {
  return (
    <>
    <div className="cta-container">
                <img
                  src={CTA_BANNER}
                  alt="summer collection"
                  className="cta-banner"
                />
                <a href="#" className="cta-content">
                  <p className="discount">25% Discount</p>
                  <h2 className="cta-title">Summer collection</h2>
                  <p className="cta-text">Starting @ $10</p>
                  <button className="cta-btn">Shop now</button>
                </a>
    </div>
    </>
  )
}

export default Cta