import React from 'react'
import TESTIMONIAL_1 from "../assets/images/testimonial-1.jpg";
import QOUTES_SVG from "../assets/images/icons/quotes.svg";

function Testimonial() {
  return (
    <>
     <div className="testimonial">
                <h2 className="title">testimonial</h2>
                <div className="testimonial-card">
                  <img
                    src={TESTIMONIAL_1}
                    alt="alan doe"
                    className="testimonial-banner"
                    width={80}
                    height={80}
                  />
                  <p className="testimonial-name">Alan Doe</p>
                  <p className="testimonial-title">
                    CEO &amp; Founder Invision
                  </p>
                  <img
                    src={QOUTES_SVG}
                    alt="quotation"
                    className="quotation-img"
                    width={26}
                  />
                  <p className="testimonial-desc">
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                    dolor sit amet.
                  </p>
                </div>
     </div>
    </>
  )
}

export default Testimonial