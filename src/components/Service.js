import React from 'react'

function Service() {
  return (
    <>
    <div className="service">
                <h2 className="title">Our Services</h2>
                <div className="service-container">
                  <a href="#" className="service-item">
                    <div className="service-icon">
                        <i class="bi bi-truck"></i>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">Worldwide Delivery</h3>
                      <p className="service-desc">For Order Over $100</p>
                    </div>
                  </a>
                  <a href="#" className="service-item">
                    <div className="service-icon">
                        <i class="bi bi-rocket-takeoff"></i>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">Next Day delivery</h3>
                      <p className="service-desc">UK Orders Only</p>
                    </div>
                  </a>
                  <a href="#" className="service-item">
                    <div className="service-icon">
                        <i class="bi bi-telephone"></i>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">Best Online Support</h3>
                      <p className="service-desc">Hours: 8AM - 11PM</p>
                    </div>
                  </a>
                  <a href="#" className="service-item">
                    <div className="service-icon">
                        <i class="bi bi-arrow-counterclockwise"></i>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">Return Policy</h3>
                      <p className="service-desc">Easy &amp; Free Return</p>
                    </div>
                  </a>
                  <a href="#" className="service-item">
                    <div className="service-icon">
                        <i class="bi bi-ticket-detailed"></i>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">30% money back</h3>
                      <p className="service-desc">For Order Over $100</p>
                    </div>
                  </a>
                </div>
    </div>
    </>
  )
}

export default Service