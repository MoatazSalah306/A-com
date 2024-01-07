import React from 'react'
import BEST_1 from "../assets/images/products/1.jpg"
import BEST_2 from "../assets/images/products/2.jpg"
import BEST_3 from "../assets/images/products/3.jpg"
import BEST_4 from "../assets/images/products/4.jpg"

function Best_sellers() {
  return (
    <>
    <div className="product-showcase">
                <h3 className="showcase-heading">best sellers</h3>
                <div className="showcase-wrapper">
                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src={BEST_1}
                          alt="baby fabric shoes"
                          width={75}
                          height={75}
                          className="showcase-img"
                        />
                      </a>
                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">baby fabric shoes</h4>
                        </a>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                        </div>
                        <div className="price-box">
                          <del>$5.00</del>
                          <p className="price">$4.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src={BEST_2}
                          alt="men's hoodies t-shirt"
                          className="showcase-img"
                          width={75}
                          height={75}
                        />
                      </a>
                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            men's hoodies t-shirt
                          </h4>
                        </a>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-half-outline" />
                        </div>
                        <div className="price-box">
                          <del>$17.00</del>
                          <p className="price">$7.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src={BEST_3}
                          alt="girls t-shirt"
                          className="showcase-img"
                          width={75}
                          height={75}
                        />
                      </a>
                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">girls t-shirt</h4>
                        </a>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-half-outline" />
                        </div>
                        <div className="price-box">
                          <del>$5.00</del>
                          <p className="price">$3.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src={BEST_4}
                          alt="woolen hat for men"
                          className="showcase-img"
                          width={75}
                          height={75}
                        />
                      </a>
                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">woolen hat for men</h4>
                        </a>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                        </div>
                        <div className="price-box">
                          <del>$15.00</del>
                          <p className="price">$12.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
    </>
  )
}

export default Best_sellers