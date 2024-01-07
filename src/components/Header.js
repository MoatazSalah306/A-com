import React from 'react'
import "../assets/css/style-prefix.css";
import LOGO from "../assets/images/logo/logo.svg";
import ELECTRONICS_BANNER_1 from "../assets/images/electronics-banner-1.jpg";
import MENS_BANNER from "../assets/images/mens-banner.jpg";
import WOMENS_BANNER from "../assets/images/womens-banner.jpg";
import ELECTRONICS_BANNER_2 from "../assets/images/electronics-banner-2.jpg";


function Header() {
  return (
    <>

    <header>
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
              <li>
                <a href="#" className="social-link">
                    <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                    <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                    <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                    <i class="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
            <div className="header-alert-news">
              <p>
                <b>Free Shipping</b>
                This Week Order Over - $55
              </p>
            </div>
            <div className="header-top-actions">
              <select name="currency">
                <option value="usd">USD $</option>
                <option value="eur">EUR €</option>
              </select>
              <select name="language">
                <option value="en-US">English</option>
                <option value="es-ES">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <a href="#" className="header-logo">
              <img src={LOGO} alt="ecom's logo" width={120} height={36} />
            </a>
            <div className="header-search-container">
              <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
              <button className="search-btn">
                <i class="bi bi-search"></i>
              </button>
            </div>
            <div className="header-user-actions">
              <button className="action-btn">
                <i class="bi bi-person"></i>
              </button>
              <button className="action-btn">
                <i class="bi bi-heart"></i>
                <span className="count">0</span>
              </button>
              <button className="action-btn">
                <i class="bi bi-basket"></i>
                <span className="count">0</span>
              </button>
            </div>
          </div>
        </div>
        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <a href="#" className="menu-title">Home</a>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Categories</a>
                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Electronics</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Desktop</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Laptop</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Camera</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Tablet</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Headphone</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">
                        <img src={ELECTRONICS_BANNER_1} alt="headphone collection" width={250} height={119} />
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Men's</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Formal</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Casual</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Sports</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Jacket</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Sunglasses</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">
                        <img src={MENS_BANNER} alt="men's fashion" width={250} height={119} />
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Women's</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Formal</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Casual</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Perfume</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Cosmetics</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Bags</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">
                        <img src={WOMENS_BANNER} alt="women's fashion" width={250} height={119} />
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Electronics</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Smart Watch</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Smart TV</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Keyboard</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Mouse</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Microphone</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">
                        <img src={ELECTRONICS_BANNER_2} alt="mouse collection" width={250} height={119} />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Men's</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Shirt</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Shorts &amp; Jeans</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Safety Shoes</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Wallet</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Women's</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Dress &amp; Frock</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Earrings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Makeup Kit</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Jewelry</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Earrings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Couple Rings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Bracelets</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Perfume</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Clothes Perfume</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Deodorant</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Flower Fragrance</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Air Freshener</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Blog</a>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Hot Offers</a>
              </li>
            </ul>
          </div>
        </nav>
    </header>
    </>
  )
}

export default Header