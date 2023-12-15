import React from "react";

const HeaderComponent = () => {
  return (
    <>
      {/* <div className="preloader">
        <div className="loader">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div> */}

      <div className="mobile-search">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <label>What are you lookking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <div className="search-cross-btn">
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="category-sidebar-wrapper">
        <div className="category-sidebar">
          <div className="category-header d-flex justify-content-between align-items-center">
            <h4>Category</h4>
            <div className="category-toggle">
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <div className="row row-cols-lg-3 row-cols-2 gy-5 mt-3">
            <div className="col">
              <a className="category-box" href="package.html">
                <div className="cate-icon mx-auto">
                  <img src="assets/images/icons/cate1.svg" alt="" />
                </div>
                <h5>Adventure</h5>
              </a>
            </div>
            <div className="col">
              <a className="category-box" href="package.html">
                <div className="cate-icon mx-auto">
                  <img src="assets/images/icons/cate2.svg" alt="" />
                </div>
                <h5>Group Tour</h5>
              </a>
            </div>
            <div className="col">
              <a className="category-box" href="package.html">
                <div className="cate-icon mx-auto">
                  <img src="assets/images/icons/cate3.svg" alt="" />
                </div>
                <h5>Couple Tour</h5>
              </a>
            </div>
            <div className="col">
              <a className="category-box" href="package.html">
                <div className="cate-icon mx-auto">
                  <img src="assets/images/icons/cate4.svg" alt="" />
                </div>
                <h5>Single Tour</h5>
              </a>
            </div>
            <div className="col">
              <a className="category-box" href="package.html">
                <div className="cate-icon mx-auto">
                  <img src="assets/images/icons/cate5.svg" alt="" />
                </div>
                <h5>Honeymoon</h5>
              </a>
            </div>
            <div className="col">
              <a className="category-box" href="package.html">
                <div className="cate-icon mx-auto">
                  <img src="assets/images/icons/cate6.svg" alt="" />
                </div>
                <h5>Sea Beach</h5>
              </a>
            </div>
            <div className="col">
              <a className="category-box" href="package.html">
                <div className="cate-icon mx-auto">
                  <img src="assets/images/icons/cate7.svg" alt="" />
                </div>
                <h5>Mountain Tour</h5>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="topbar-area topbar-style-two d-sm-flex d-none">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 d-md-flex d-none justify-content-start align-items-center">
              <div className="topbar-contact-left">
                <ul className="contact-list">
                  <li>
                    <i className="bi bi-telephone-fill" />
                    <a href="tel:+17632275032">+1 763-227-5032</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill" />
                    <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#650c0b030a25001d04081509004b060a08">
                      <span
                        className="__cf_email__"
                        data-cfemail="e881868e87a88d90898598848dc68b8785"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-md-end justify-content-center align-items-center">
              <ul className="topbar-social-links">
                <li>
                  <a href="#">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-instagram-alt" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className="header-area header-style-four position-absolute w-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                <div className="nav-logo d-flex justify-content-between align-items-center">
                  <a href="index.html">
                    <img src="assets/images/logo-w.png" alt="logo" />
                  </a>
                  <div className="mobile-menu d-flex">
                    <div className="d-flex align-items-center">
                      <div className="nav-right-icons d-xl-none d-flex align-items-center">
                        <div className="user-dropdown">
                          <i className="bx bx-user-circle" />
                          <ul className="user-drop-list">
                            <li>
                              <a href="#">My Account</a>
                            </li>
                            <li>
                              <a href="#">Login</a>
                            </li>
                            <li>
                              <a href="#">Registration</a>
                            </li>
                            <li>
                              <a href="#">Setting</a>
                            </li>
                          </ul>
                        </div>
                        <div className="category-toggle">
                          <i className="bx bx-category" />
                        </div>
                      </div>
                      <a
                        href="javascript:void(0)"
                        className="hamburger d-block d-xl-none"
                      >
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-8 col-sm-6 col-xs-6">
                <nav className="main-nav">
                  <div className="inner-logo d-xl-none text-center">
                    <a href="#">
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </div>
                  <ul>
                    <li className="has-child-menu">
                      <a href="javascript:void(0)">Home</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Home Style 1</a>
                        </li>
                        <li>
                          <a href="index2.html">Home Style 2</a>
                        </li>
                        <li>
                          <a href="index3.html">Home Style 3</a>
                        </li>
                        <li>
                          <a href="index4.html">Home Style 4</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="has-child-menu">
                      <a href="javascript:void(0)">Destination</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <a href="destination.html">Destination</a>
                        </li>
                        <li>
                          <a href="destination-details.html">
                            Destination Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="javascript:void(0)">Package</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <a href="package.html">Package Grid</a>
                        </li>
                        <li>
                          <a href="package-sidebar.html">Package Sidebar</a>
                        </li>
                        <li>
                          <a href="package-standard.html">Package Standard</a>
                        </li>
                        <li>
                          <a href="package-details.html">Package Details </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="javascript:void(0)">Blogs</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-sidebar.html">Blog Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-standard.html">Blog Standard </a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="javascript:void(0)">Pages</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <a href="guide.html">Guide</a>
                        </li>
                        <li>
                          <a href="gallary.html">Gallary</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                  <div className="inner-contact-options d-xl-none">
                    <div className="contact-box-inner">
                      <i className="bi bi-telephone-fill" />
                      <a href="tel:+17632275032">+1 763-227-5032</a>
                    </div>
                    <div className="contact-box-inner">
                      <i className="bi bi-envelope-fill" />
                      <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#422b2c242d02273a232f322e276c212d2f">
                        <span
                          className="__cf_email__"
                          data-cfemail="650c0b030a25001d04081509004b060a08"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xxl-3 col-xl-2 col-lg-1">
                <div className="nav-right d-xl-flex d-none">
                  <div className="nav-right-icons gap-3">
                    <div className="header-search search-btn">
                      <i className="bx bx-search-alt" />
                    </div>
                    <div className="category-toggle">
                      <i className="bx bx-category" />
                    </div>
                  </div>
                  <div className="nav-right-hotline d-xxl-flex d-none">
                    <div className="hotline-icon">
                      <img src="assets/images/icons/header-phone.svg" alt="" />
                    </div>
                    <div className="hotline-info">
                      <span>Hot Line Number</span>
                      <h6>
                        <a href="tel:8801761111456">+880 176 1111 456</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
