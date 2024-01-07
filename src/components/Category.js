import React from 'react'
import COAT_SVG from "../assets/images/icons/coat.svg";
import GLASSES_SVG from "../assets/images/icons/glasses.svg";
import SHORTS_SVG from "../assets/images/icons/shorts.svg";
import TEE_SVG from "../assets/images/icons/tee.svg";
import JACKET_SVG from "../assets/images/icons/jacket.svg";
import WATCH_SVG from "../assets/images/icons/watch.svg";
import HAT_SVG from "../assets/images/icons/hat.svg";
import DRESS_SVG from "../assets/images/icons/dress.svg";

function Category() {
  return (
    <>
    <div className="category">
          <div className="container">
            <div className="category-item-container has-scrollbar">
              <div className="category-item">
                <div className="category-img-box">
                  <img
                    src={DRESS_SVG}
                    alt="dress & frock"
                    width={30}
                  />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Dress &amp; frock</h3>
                    <p className="category-item-amount">(53)</p>
                  </div>
                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>
              <div className="category-item">
                <div className="category-img-box">
                  <img
                    src={COAT_SVG}
                    alt="winter wear"
                    width={30}
                  />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Winter wear</h3>
                    <p className="category-item-amount">(58)</p>
                  </div>
                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>
              <div className="category-item">
                <div className="category-img-box">
                  <img
                    src={GLASSES_SVG}
                    alt="glasses & lens"
                    width={30}
                  />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Glasses &amp; lens</h3>
                    <p className="category-item-amount">(68)</p>
                  </div>
                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>
              <div className="category-item">
                <div className="category-img-box">
                  <img
                    src={SHORTS_SVG}
                    alt="shorts & jeans"
                    width={30}
                  />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Shorts &amp; jeans</h3>
                    <p className="category-item-amount">(84)</p>
                  </div>
                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>
              <div className="category-item">
                <div className="category-img-box">
                  <img
                    src={TEE_SVG}
                    alt="t-shirts"
                    width={30}
                  />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">T-shirts</h3>
                    <p className="category-item-amount">(35)</p>
                  </div>
                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>
              <div className="category-item">
                <div className="category-img-box">
                  <img
                    src={JACKET_SVG}
                    alt="jacket"
                    width={30}
                  />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Jacket</h3>
                    <p className="category-item-amount">(16)</p>
                  </div>
                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>
              <div className="category-item">
                <div className="category-img-box">
                  <img
                    src={WATCH_SVG}
                    alt="watch"
                    width={30}
                  />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Watch</h3>
                    <p className="category-item-amount">(27)</p>
                  </div>
                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>
              <div className="category-item">
                <div className="category-img-box">
                  <img
                    src={HAT_SVG}
                    alt="hat & caps"
                    width={30}
                  />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Hat &amp; caps</h3>
                    <p className="category-item-amount">(39)</p>
                  </div>
                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Category