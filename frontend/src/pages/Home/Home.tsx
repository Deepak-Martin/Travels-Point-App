import React from "react";

import HeroSlider from "./HeroSlider";

const Home = () => {
  return (
    <>
      {/* <div className="hero-area hero-style-four">
        <img
          src="assets/images/banner/banner-plane.svg"
          className="img-fluid banner-plane"
          alt="Add tag here"
        />
        <img
          src="assets/images/banner/banner-star1.svg"
          className="banner-star1"
          alt="Add tag here"
        />
        <img
          src="assets/images/banner/banner-star2.svg"
          className="banner-star2"
          alt="Add tag here"
        />
        <img
          src="assets/images/banner/banner-star3.svg"
          className="banner-star3"
          alt="Add tag here"
        />

        <div className="hero-main-wrapper position-relative">
          <div className="swiper hero-slider-four">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slider-bg-1">
                  <div className="container">
                    <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                      <div className="col-xl-7 col-lg-7">
                        <div className="hero4-content">
                          <h1>LET’S YOUR JOURNEY BEGINS WITH TRAVELLAB</h1>
                          <p>
                            A charitable organization or charity is an
                            organization whose primary objectives are philanthr
                          </p>
                          <a
                            href="/#"
                            className="button-fill-primary banner3-btn"
                          >
                            View Adventures
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-bg-2">
                  <div className="container">
                    <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                      <div className="col-xl-7 col-lg-7">
                        <div className="hero4-content">
                          <h1>ENJOY YOUR HOLIDAYS WITH TRAVELLAB</h1>
                          <p>
                            A charitable organization or charity is an
                            organization whose primary objectives are philanthr
                          </p>
                          <a
                            href="/#"
                            className="button-fill-primary banner3-btn"
                          >
                            View Adventures
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-arrows text-center d-lg-flex flex-column d-none gap-5">
            <div
              className="hero-prev3"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <i className="bi bi-arrow-left" />
            </div>
            <div
              className="hero-next3"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
      </div> */}
        

      <HeroSlider />

      <div className="searchbar-section home4">
        <div className="container">
          <div className="multi-main-searchber">
            <div className="row g-4">
              <div className="col-lg-10">
                <div className="row gx-0 gy-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="search-box-single destination-box">
                      <div className="searchbox-icon">
                        <i className="bi bi-geo-alt" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="deatination_drop">Destination</label>
                        <select
                          data-placeholder="Where Are You Going?"
                          id="deatination_drop"
                        >
                          <option value={"destination"}>
                            Where Are You Going?
                          </option>
                          <optgroup label="India">
                            <option>Solt Lake</option>
                            <option>Kolkata</option>
                            <option>Mohamia</option>
                            <option>Mumbai</option>
                            <option>New Delhi</option>
                          </optgroup>
                          <optgroup label=" Bangladash">
                            <option>Cox's Bazer</option>
                            <option>Rangamati</option>
                            <option>Banderban</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="search-box-single type-box">
                      <div className="searchbox-icon">
                        <i className="bi bi-text-paragraph" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Travel Type</label>
                        <select
                          className="defult-select-drowpown"
                          data-placeholder="All Activity"
                          id="activity-dropdown"
                        >
                          <option value={"activity"}>All Activity</option>
                          <option value={1}>Type 1</option>
                          <option value={2}>Type 2</option>
                          <option value={3}>Type 3</option>
                          <option value={4}>Type 4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="search-box-single type-box">
                      <div className="searchbox-icon">
                        <i className="bi bi-person-plus" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="person-dropdown">Person</label>
                        <select
                          className="defult-select-drowpown"
                          id="person-dropdown"
                        >
                          <option defaultValue={0}>01</option>
                          <option value={1}>02</option>
                          <option value={2}>03</option>
                          <option value={3}>04</option>
                          <option value={4}>05</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="search-box-single date-box">
                      <div className="searchbox-icon">
                        <i className="bi bi-capslock" />
                      </div>
                      <div className="searchbox-input date-picker-input">
                        <label htmlFor="datepicker">When</label>
                        <input
                          placeholder="Select your date"
                          type="text"
                          name="checkIn"
                          id="datepicker"
                          className="calendar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="main-form-submit">
                  <button type="submit">Find Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="package-area package-style-two pt-110 chain">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Popular Adventures</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <a href="package-details.html">
                    <img
                      src="assets/images/package/best-s1.png"
                      alt="Add tag here"
                    />
                  </a>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>3 Day &amp; 2 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <a href="package-details.html">
                      Etiam placerat dictum consequat an Pellentesque habitant
                      morbi.
                    </a>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <a href="package-details.html">
                        Book Now <i className="bx bxs-right-arrow-alt" />
                      </a>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $79.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <a href="package-details.html">
                    <img
                      src="assets/images/package/best-s2.png"
                      alt="Add tag here"
                    />
                  </a>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>5 Day &amp; 6 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <a href="package-details.html">
                      varius condimentum consequat frin Aenean pretium risus eu.
                    </a>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <a href="package-details.html">
                        Book Now <i className="bx bxs-right-arrow-alt" />
                      </a>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $67.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <a href="package-details.html">
                    <img
                      src="assets/images/package/best-s3.png"
                      alt="Add tag here"
                    />
                  </a>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>4 Day &amp; 3 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <a href="package-details.html">
                      Praesent sed elit mi. In risus nullaam efficitur non
                      elementum eget.
                    </a>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <a href="package-details.html">
                        Book Now <i className="bx bxs-right-arrow-alt" />
                      </a>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $88.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <a href="package-details.html">
                    <img
                      src="assets/images/package/best-s4.png"
                      alt="Add tag here"
                    />
                  </a>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>5 Day &amp; 6 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <a href="package-details.html">
                      Sed ultricies sapien arcu, sed cong feugiat sapien
                      dignissim id.
                    </a>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <a href="package-details.html">
                        Book Now <i className="bx bxs-right-arrow-alt" />
                      </a>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $91.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <a href="package-details.html">
                    <img
                      src="assets/images/package/best-s5.png"
                      alt="Add tag here"
                    />
                  </a>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>4 Day &amp; 3 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <a href="package-details.html">
                      Pellentesque habitant morbi malesua tristique senectus et
                      netus et.
                    </a>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <a href="package-details.html">
                        Book Now <i className="bx bxs-right-arrow-alt" />
                      </a>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $67.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <a href="package-details.html">
                    <img
                      src="assets/images/package/best-s6.png"
                      alt="Add tag here"
                    />
                  </a>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>3 Day &amp; 2 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <a href="package-details.html">
                      San Francisco Golden Gate Bridge, cable cars &amp; fog.
                    </a>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <a href="package-details.html">
                        Book Now <i className="bx bxs-right-arrow-alt" />
                      </a>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $67.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="package-page-btn text-center mt-60">
            <a href="package.html" className="button-fill-primary">
              View All Tours
            </a>
          </div>
        </div>
      </div>

      <div className="destination-area destination-style-two pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Top Destination</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-6 col-md-12 col-sm-10">
              <div className="destination-item">
                <div className="destination-img">
                  <img
                    src="assets/images/destination/top-ds1.png"
                    alt="Add tag here"
                  />
                </div>
                <div className="destination-overlay">
                  <div className="content">
                    <a href="destination-details.html">
                      <h5>Grand Switzerland</h5>
                    </a>
                    <a href="destination-details.html">
                      <h6>45 Place</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10">
              <div className="destination-item">
                <div className="destination-img">
                  <img
                    src="assets/images/destination/top-ds2.png"
                    alt="Add tag here"
                  />
                </div>
                <div className="destination-overlay">
                  <div className="content">
                    <a href="destination-details.html">
                      <h5>Paris</h5>
                    </a>
                    <a href="destination-details.html">
                      <h6>35 Place</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10">
              <div className="destination-item">
                <div className="destination-img">
                  <img
                    src="assets/images/destination/top-ds3.png"
                    alt="Add tag here"
                  />
                </div>
                <div className="destination-overlay">
                  <div className="content">
                    <a href="destination-details.html">
                      <h5>Augsburg</h5>
                    </a>
                    <a href="destination-details.html">
                      <h6>15 Place</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10">
              <div className="destination-item">
                <div className="destination-img">
                  <img
                    src="assets/images/destination/top-ds4.png"
                    alt="Add tag here"
                  />
                </div>
                <div className="destination-overlay">
                  <div className="content">
                    <a href="destination-details.html">
                      <h5>Paris</h5>
                    </a>
                    <a href="destination-details.html">
                      <h6>34 Place</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10">
              <div className="destination-item">
                <div className="destination-img">
                  <img
                    src="assets/images/destination/top-ds5.png"
                    alt="Add tag here"
                  />
                </div>
                <div className="destination-overlay">
                  <div className="content">
                    <a href="destination-details.html">
                      <h5>Wiesbaden</h5>
                    </a>
                    <a href="destination-details.html">
                      <h6>10 Place</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-10">
              <div className="destination-item">
                <div className="destination-img">
                  <img
                    src="assets/images/destination/top-ds6.png"
                    alt="Add tag here"
                  />
                </div>
                <div className="destination-overlay">
                  <div className="content">
                    <a href="destination-details.html">
                      <h5>UK</h5>
                    </a>
                    <a href="destination-details.html">
                      <h6>67 Place</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="upcoming-tour-area pt-110 pb-110 chain">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-5 d-flex justify-content-lg-start justify-content-center">
              <div className="section-head-alpha text-lg-start text-center">
                <h2 className="text-white">Upcoming Best Tours</h2>
                <p className="text-white">
                  Duis rutrum nisl urna maecenas vel libero faucibus nisi vene
                  natis hendrerit aid lectus suspendissendt.
                </p>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-lg-end justify-content-center">
              <div className="slider-arrows text-center d-lg-flex flex-row justify-content-center d-none gap-5">
                <div
                  className="testi-prev4"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="bi bi-arrow-left" />
                </div>
                <div
                  className="testi-next4"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="swiper upcoming-tour">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="package-card-delta">
                      <div className="package-thumb">
                        <a href="package-details.html">
                          <img
                            src="assets/images/package/best-s1.png"
                            alt="Add tag here"
                          />
                        </a>
                        <p className="card-lavel">
                          <i className="bi bi-clock" />{" "}
                          <span>3 Day &amp; 2 night</span>
                        </p>
                      </div>
                      <div className="package-card-body">
                        <h3 className="p-card-title">
                          <a href="package-details.html">
                            Etiam placerat dictum consequat an Pellentesque.
                          </a>
                        </h3>
                        <div className="p-card-bottom">
                          <div className="book-btn">
                            <a href="package-details.html">
                              Book Now <i className="bx bxs-right-arrow-alt" />
                            </a>
                          </div>
                          <div className="p-card-info">
                            <span>From</span>
                            <h6>
                              $79.00 <span>Per Person</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="package-card-delta">
                      <div className="package-thumb">
                        <a href="package-details.html">
                          <img
                            src="assets/images/package/best-s2.png"
                            alt="Add tag here"
                          />
                        </a>
                        <p className="card-lavel">
                          <i className="bi bi-clock" />{" "}
                          <span>5 Day &amp; 6 night</span>
                        </p>
                      </div>
                      <div className="package-card-body">
                        <h3 className="p-card-title">
                          <a href="package-details.html">
                            varius condimentum consequat frin Aenean.
                          </a>
                        </h3>
                        <div className="p-card-bottom">
                          <div className="book-btn">
                            <a href="package-details.html">
                              Book Now <i className="bx bxs-right-arrow-alt" />
                            </a>
                          </div>
                          <div className="p-card-info">
                            <span>From</span>
                            <h6>
                              $67.00 <span>Per Person</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="package-card-delta">
                      <div className="package-thumb">
                        <a href="package-details.html">
                          <img
                            src="assets/images/package/best-s3.png"
                            alt="Add tag here"
                          />
                        </a>
                        <p className="card-lavel">
                          <i className="bi bi-clock" />{" "}
                          <span>4 Day &amp; 3 night</span>
                        </p>
                      </div>
                      <div className="package-card-body">
                        <h3 className="p-card-title">
                          <a href="package-details.html">
                            Praesent sed elit mi. In risus nullaam ultricies
                            sapien.
                          </a>
                        </h3>
                        <div className="p-card-bottom">
                          <div className="book-btn">
                            <a href="package-details.html">
                              Book Now <i className="bx bxs-right-arrow-alt" />
                            </a>
                          </div>
                          <div className="p-card-info">
                            <span>From</span>
                            <h6>
                              $88.00 <span>Per Person</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="package-card-delta">
                      <div className="package-thumb">
                        <a href="package-details.html">
                          <img
                            src="assets/images/package/best-s4.png"
                            alt="Add tag here"
                          />
                        </a>
                        <p className="card-lavel">
                          <i className="bi bi-clock" />{" "}
                          <span>5 Day &amp; 6 night</span>
                        </p>
                      </div>
                      <div className="package-card-body">
                        <h3 className="p-card-title">
                          <a href="package-details.html">
                            Sed ultricies sapien arcu, sed cong feugiat sapien
                            dignissim.
                          </a>
                        </h3>
                        <div className="p-card-bottom">
                          <div className="book-btn">
                            <a href="package-details.html">
                              Book Now <i className="bx bxs-right-arrow-alt" />
                            </a>
                          </div>
                          <div className="p-card-info">
                            <span>From</span>
                            <h6>
                              $91.00 <span>Per Person</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="package-card-delta">
                      <div className="package-thumb">
                        <a href="package-details.html">
                          <img
                            src="assets/images/package/best-s5.png"
                            alt="Add tag here"
                          />
                        </a>
                        <p className="card-lavel">
                          <i className="bi bi-clock" />{" "}
                          <span>4 Day &amp; 3 night</span>
                        </p>
                      </div>
                      <div className="package-card-body">
                        <h3 className="p-card-title">
                          <a href="package-details.html">
                            Pellentesque habitant morbi malesua tristique
                            senectus.
                          </a>
                        </h3>
                        <div className="p-card-bottom">
                          <div className="book-btn">
                            <a href="package-details.html">
                              Book Now <i className="bx bxs-right-arrow-alt" />
                            </a>
                          </div>
                          <div className="p-card-info">
                            <span>From</span>
                            <h6>
                              $67.00 <span>Per Person</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center d-flex justify-content-center">
            <div className="col-md-4">
              <a
                href="destination.html"
                className="button-outlined-primary upcoming-btn mt-50"
              >
                View All Offer
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="package-area offer-package-style-one pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Last Minute Offers</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="offer-switch-button3">
              <ul
                className="nav nav-pills mb-3 justify-content-center gap-sm-4 gap-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-offer1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-offer-tab1"
                    type="button"
                    role="tab"
                    aria-controls="pills-offer-tab1"
                    aria-selected="true"
                  >
                    40%
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-offer2"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-offer-tab2"
                    type="button"
                    role="tab"
                    aria-controls="pills-offer-tab2"
                    aria-selected="false"
                  >
                    20%
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-offer3"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-offer-tab3"
                    type="button"
                    role="tab"
                    aria-controls="pills-offer-tab3"
                    aria-selected="false"
                  >
                    60%
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-offer3"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-offer-tab3"
                    type="button"
                    role="tab"
                    aria-controls="pills-offer-tab3"
                    aria-selected="false"
                  >
                    80%
                  </button>
                </li>
              </ul>
            </div>
            <div className="offer-single-tabs">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-offer-tab1"
                  role="tabpanel"
                  aria-labelledby="pills-offer1"
                >
                  <div className="row d-flex justify-content-center g-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer1.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer2.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer3.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer4.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer5.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer6.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="package-page-btn text-center mt-60">
                    <a href="package.html" className="button-fill-primary">
                      View All Offer
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-offer-tab2"
                  role="tabpanel"
                  aria-labelledby="pills-offer2"
                >
                  <div className="row d-flex justify-content-center g-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer6.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer1.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer2.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="package-page-btn text-center mt-60">
                    <a href="package.html" className="button-fill-primary">
                      View All Offer
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-offer-tab3"
                  role="tabpanel"
                  aria-labelledby="pills-offer3"
                >
                  <div className="row d-flex justify-content-center g-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer5.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer6.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer3.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="package-card-delta">
                        <div className="package-thumb">
                          <a href="package-details.html">
                            <img
                              src="assets/images/destination/lastoffer4.png"
                              alt="Add tag here"
                            />
                          </a>
                          <p className="card-lavel">
                            <i className="bi bi-clock" />
                            <span>3 Day &amp; 2 night</span>
                          </p>
                        </div>
                        <div className="package-card-body">
                          <h3 className="p-card-title">
                            <a href="package-details.html">
                              Etiam placerat dictum consequat an Pellentesque
                              habitant morbi.
                            </a>
                          </h3>
                          <div className="p-card-bottom">
                            <div className="book-btn">
                              <a href="package-details.html">
                                Book Now{" "}
                                <i className="bx bxs-right-arrow-alt" />
                              </a>
                            </div>
                            <div className="p-card-info">
                              <span>From</span>
                              <h6>
                                $79.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="package-page-btn text-center mt-60">
                    <a href="package.html" className="button-fill-primary">
                      View All Offer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-area testimonial-style-three pt-110 pb-110">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-5 col-sm-10">
              <div className="section-head-alpha text-lg-start text-center">
                <h2 className="text-white">Our Travelers Review</h2>
                <p className="text-white">
                  Duis rutrum nisl urna maecenas vel libero faucibus nisi vene
                  natis hendrerit aid lectus suspendissendt.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10 d-flex justify-content-end">
              <div className="slider-arrows text-center d-lg-flex flex-row d-none gap-5">
                <div
                  className="testi-prev4"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="bi bi-arrow-left" />
                </div>
                <div
                  className="testi-next4"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="swiper testimonial-slider-three">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-card-beta mx-auto">
                      <div className="testimonial-quote-icon">
                        <img
                          src="assets/images/icons/quote-review.svg"
                          className="img-fluid"
                          alt="alt tag"
                        />
                      </div>
                      <div className="testimonial-card-body">
                        <div className="testimonial-info">
                          <div className="reviewr-info">
                            <div className="single-thumb">
                              <img
                                src="assets/images/reviewer/testi31.png"
                                alt="Add tag here"
                              />
                            </div>
                            <div className="reviwer-info-cotn">
                              <h5 className="reviewer-name">Jims Pull</h5>
                              <ul className="reviewer-rating gap-2">
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="review-texts">
                          <p>
                            Amazing team, effective solutions that resulted in
                            high rated search optimization &amp; catchy
                            branding. Running our tourist &amp; I am very
                            satisfied and have been a customer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-card-beta mx-auto">
                      <div className="testimonial-quote-icon">
                        <img
                          src="assets/images/icons/quote-review.svg"
                          className="img-fluid"
                          alt="alt tag"
                        />
                      </div>
                      <div className="testimonial-card-body">
                        <div className="testimonial-info">
                          <div className="reviewr-info">
                            <div className="single-thumb">
                              <img
                                src="assets/images/reviewer/testi32.png"
                                alt="Add tag here"
                              />
                            </div>
                            <div className="reviwer-info-cotn">
                              <h5 className="reviewer-name">Shwan Pull</h5>
                              <ul className="reviewer-rating gap-2">
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="review-texts">
                          <p>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for 'lorem ipsum' will uncover
                            many web sites still in their infancy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-card-beta mx-auto">
                      <div className="testimonial-quote-icon">
                        <img
                          src="assets/images/icons/quote-review.svg"
                          className="img-fluid"
                          alt="alt tag"
                        />
                      </div>
                      <div className="testimonial-card-body">
                        <div className="testimonial-info">
                          <div className="reviewr-info">
                            <div className="single-thumb">
                              <img
                                src="assets/images/reviewer/testi33.png"
                                alt="Add tag here"
                              />
                            </div>
                            <div className="reviwer-info-cotn">
                              <h5 className="reviewer-name">Mixis Pull</h5>
                              <ul className="reviewer-rating gap-2">
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="review-texts">
                          <p>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for 'lorem ipsum' will uncover
                            many web sites still in their infancy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-area guide-style-one pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Tour Guide</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-md-10">
              <div className="guide-card-beta">
                <div className="guide-image">
                  <img
                    src="assets/images/guide/guide31.png"
                    alt="Add tag here"
                  />
                  <ul className="guide-social-links d-flex justify-content-center flex-column gap-3">
                    <li>
                      <a href="/#">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="guide-content">
                  <a href="guide.html">
                    <h4 className="guide-name">Sebastian Mateo</h4>
                  </a>
                  <h6 className="guide-designation">Tour Guide</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-10">
              <div className="guide-card-beta">
                <div className="guide-image">
                  <img
                    src="assets/images/guide/guide32.png"
                    alt="Add tag here"
                  />
                  <ul className="guide-social-links d-flex justify-content-center flex-column gap-3">
                    <li>
                      <a href="/#">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="guide-content">
                  <a href="guide.html">
                    <h4 className="guide-name">Theodore Aiden</h4>
                  </a>
                  <h6 className="guide-designation">Tour Guide</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-10">
              <div className="guide-card-beta">
                <div className="guide-image">
                  <img
                    src="assets/images/guide/guide33.png"
                    alt="Add tag here"
                  />
                  <ul className="guide-social-links d-flex justify-content-center flex-column gap-3">
                    <li>
                      <a href="/#">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="guide-content">
                  <a href="guide.html">
                    <h4 className="guide-name">Lincoln Anthony</h4>
                  </a>
                  <h6 className="guide-designation">Tour Guide</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-area blog-style-two pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Recent Post</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-beta">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/home3-blog1.png"
                      alt="Add tag here"
                    />
                  </a>
                  <div className="blog-lavel">
                    <a href="/#">Novembar 16, 2021</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-body-top">
                    <a href="/#" className="blog-writer">
                      <i className="bi bi-person-circle" /> By John Smith
                    </a>
                    <a href="/#" className="blog-comments">
                      <i className="bi bi-calendar3" /> Novembar 16, 2021
                    </a>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog-details.html">
                      vitae tempor convallis, mi ligula an suscipit nunc, ornare
                      suscipit.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-beta">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/home3-blog2.png"
                      alt="Add tag here"
                    />
                  </a>
                  <div className="blog-lavel">
                    <a href="/#">Novembar 16, 2021</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-body-top">
                    <a href="/#" className="blog-writer">
                      <i className="bi bi-person-circle" /> By John Smith
                    </a>
                    <a href="/#" className="blog-comments">
                      <i className="bi bi-calendar3" /> Novembar 16, 2021
                    </a>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog-details.html">
                      Mauris commodo massa vel diamnat feugiat sagittis Nunc
                      maxim.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-beta">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/home3-blog3.png"
                      alt="Add tag here"
                    />
                  </a>
                  <div className="blog-lavel">
                    <a href="/#">Novembar 16, 2021</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-body-top">
                    <a href="/#" className="blog-writer">
                      <i className="bi bi-person-circle" /> By John Smith
                    </a>
                    <a href="/#" className="blog-comments">
                      <i className="bi bi-calendar3" /> Novembar 16, 2021
                    </a>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog-details.html">
                      Nulla urna leo, volutpat eu maurisa eget luctus malesuada
                      urna.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-update-section">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center gy-5">
            <div className="col-lg-6 text-lg-start text-center">
              <div className="more-update-content">
                <h2>Join Us for More Update</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
            <div className="col-lg-3 text-lg-end text-center">
              <button className="button-fill-primary update-btn">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
