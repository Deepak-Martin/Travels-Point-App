
import React from "react";

const About = () => {
  return (
    
  <div>
  <div className="breadcrumb breadcrumb-style-one">
    <div className="container">
      <div className="col-lg-12 text-center">
        <h2 className="breadcrumb-title">About Us</h2>
        <ul className="d-flex justify-content-center breadcrumb-items">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">About Us</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="about-main-wrappper pt-100">
    <div className="container">
      <div className="about-tab-wrapper">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="about-tab-image-grid text-center">
              <div className="about-video d-inline-block">
                <img src="assets/images/about/about-g2.png" alt="" />
                <div className="video-overlay">
                  <a data-fancybox href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-icon video-popup">
                    <i className="bi bi-play-fill" />
                  </a>
                </div>
              </div>
              <div className="row float-images g-4">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="about-image">
                    <img src="assets/images/about/about-g1.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="about-image">
                    <img src="assets/images/about/about-g3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="about-tab-wrap">
              <h2 className="about-wrap-title">
                About Our Company And <span>What We Are</span> Offer.
              </h2>
              <div className="about-tab-switcher">
                <ul className="nav nav-pills mb-3 justify-content-md-between justify-content-center" id="about-tab-pills" role="tablist">
                  <li className="nav-item" role="presentation">
                    <div className="nav-link active" id="pills-about1" data-bs-toggle="pill" data-bs-target="#about-pills1" role="tab" aria-controls="about-pills1" aria-selected="true">
                      <h3>10</h3>
                      <h6>Years Experience</h6>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div className="nav-link" id="pills-about2" data-bs-toggle="pill" data-bs-target="#about-pills2" role="tab" aria-controls="about-pills2" aria-selected="false">
                      <h3>100+</h3>
                      <h6>Tour Guide</h6>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div className="nav-link" id="pills-about3" data-bs-toggle="pill" data-bs-target="#about-pills3" role="tab" aria-controls="about-pills3" aria-selected="false">
                      <h3>500+</h3>
                      <h6>Travelar Connect</h6>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content about-tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="about-pills1" role="tabpanel" aria-labelledby="pills-about1">
                  <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc eget consente
                    consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc
                    consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc
                    consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc
                    consectetur.</p>
                </div>
                <div className="tab-pane fade" id="about-pills2" role="tabpanel" aria-labelledby="pills-about2">
                  <p> Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc eget consente
                    consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc
                    consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit.</p>
                </div>
                <div className="tab-pane fade" id="about-pills3" role="tabpanel" aria-labelledby="pills-about3">
                  <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc eget consente
                    consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc
                    consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc
                    consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc
                    consectetur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-100 align-items-center">
        <div className="col-lg-6">
          <div className="achievement-counter-wrap">
            <h2 className="about-wrap-title">
              Why Package Book With
              <span>TourX Pro?</span>
            </h2>
            <div className="achievement-counter-cards">
              <div className="achievement-counter-card flex-sm-row flex-column text-sm-start text-center ">
                <div className="counter-box mb-sm-0 mb-3">
                  <h2>500+</h2>
                  <h6>Awesome Tour</h6>
                </div>
                <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt enlane
                  molestie turpis nec lacinia vehicula.</p>
              </div>
              <div className="achievement-counter-card flex-sm-row flex-column text-sm-start text-center">
                <div className="counter-box mb-3">
                  <h2>300+</h2>
                  <h6>Destinations</h6>
                </div>
                <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt enlane
                  molestie turpis nec lacinia vehicula.</p>
              </div>
              <div className="achievement-counter-card flex-sm-row flex-column text-sm-start text-center">
                <div className="counter-box mb-3">
                  <h2>150+</h2>
                  <h6> Mountains</h6>
                </div>
                <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt enlane
                  molestie turpis nec lacinia vehicula.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-image-group mt-5 mt-lg-0">
            <img src="assets/images/about/about-image-group2.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="testimonial-area testimonial-style-one mt-120">
    <div className="testimonial-shape-group" />
    <div className="container position-relative">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <div className="section-head-alpha">
            <h2>What Our Client Say About Us</h2>
            <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt
              blandit interdum. Sed pellentesque at nunc eget consectetur.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="slider-arrows text-center d-lg-flex d-none justify-content-end mb-3">
            <div className="testi-prev custom-swiper-prev" tabIndex={0} role="button" aria-label="Previous slide"> <i className="bi bi-chevron-left" /> </div>
            <div className="testi-next custom-swiper-next" tabIndex={0} role="button" aria-label="Next slide"><i className="bi bi-chevron-right" /></div>
          </div>
        </div>
      </div>
      <div className="swiper testimonial-slider-one position-relative">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-card testimonial-card-alpha">
              <div className="testimonial-overlay-img">
                <img src="assets/images/reviewer/reviewer-1.png" alt="" />
              </div>
              <div className="testimonial-card-top">
                <div className="qoute-icon"><i className="bx bxs-quote-left" /></div>
                <div className="testimonial-thumb"><img src="assets/images/reviewer/r-sm1.png" alt="" /></div>
                <h3 className="testimonial-count">01</h3>
              </div>
              <div className="testimonial-body">
                <p>Duis rutrum nisl urna. Maecenas vel libero this
                  faucibus nisi venenatis hendrerit a id lectus.P
                  Suspendissendt molestie turpis nec laciniane
                  vehicula volutpat purus.</p>
                <div className="testimonial-bottom">
                  <div className="reviewer-info">
                    <h4 className="reviewer-name">Shwan Pull</h4>
                    <h6>Traveller</h6>
                  </div>
                  <ul className="testimonial-rating">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-card testimonial-card-alpha">
              <div className="testimonial-overlay-img">
                <img src="assets/images/reviewer/reviewer-1.png" alt="" />
              </div>
              <div className="testimonial-card-top">
                <div className="qoute-icon"><i className="bx bxs-quote-left" /></div>
                <div className="testimonial-thumb"><img src="assets/images/reviewer/r-sm2.png" alt="" /></div>
                <h3 className="testimonial-count">02</h3>
              </div>
              <div className="testimonial-body">
                <p>Duis rutrum nisl urna. Maecenas vel libero this
                  faucibus nisi venenatis hendrerit a id lectus.P
                  Suspendissendt molestie turpis nec laciniane
                  vehicula volutpat purus.</p>
                <div className="testimonial-bottom">
                  <div className="reviewer-info">
                    <h4 className="reviewer-name">Adam Groff</h4>
                    <h6>Traveller</h6>
                  </div>
                  <ul className="testimonial-rating">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-card testimonial-card-alpha">
              <div className="testimonial-overlay-img">
                <img src="assets/images/reviewer/reviewer-1.png" alt="" />
              </div>
              <div className="testimonial-card-top">
                <div className="qoute-icon"><i className="bx bxs-quote-left" /></div>
                <div className="testimonial-thumb"><img src="assets/images/reviewer/r-sm3.png" alt="" /></div>
                <h3 className="testimonial-count">03</h3>
              </div>
              <div className="testimonial-body">
                <p>Duis rutrum nisl urna. Maecenas vel libero this
                  faucibus nisi venenatis hendrerit a id lectus.P
                  Suspendissendt molestie turpis nec laciniane
                  vehicula volutpat purus.</p>
                <div className="testimonial-bottom">
                  <div className="reviewer-info">
                    <h4 className="reviewer-name">Lilyan Danclark</h4>
                    <h6>Traveller</h6>
                  </div>
                  <ul className="testimonial-rating">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                  </ul>
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
      <div className="row">
        <div className="col-lg-12">
          <div className="section-head-gamma">
            <h2>Tour Guide</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="guide-card-gamma">
            <div className="guide-image">
              <img src="assets/images/guide/guide-md4.png" alt="" />
              <ul className="guide-social-links">
                <li><a href="/#"><i className="bx bxl-instagram" /></a></li>
                <li><a href="/#"><i className="bx bxl-facebook" /></a></li>
                <li><a href="/#"><i className="bx bxl-twitter" /></a></li>
              </ul>
              <div className="contact-lavel">
                <a href="/#">Contact</a>
              </div>
            </div>
            <div className="guide-content">
              <h4 className="guide-name">Sebastian
                Mateo</h4>
              <h6 className="guide-designation">Tour Guide</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="guide-card-gamma">
            <div className="guide-image">
              <img src="assets/images/guide/guide-md5.png" alt="" />
              <ul className="guide-social-links">
                <li><a href="/#"><i className="bx bxl-instagram" /></a></li>
                <li><a href="/#"><i className="bx bxl-facebook" /></a></li>
                <li><a href="/#"><i className="bx bxl-twitter" /></a></li>
              </ul>
              <div className="contact-lavel">
                <a href="/#">Contact</a>
              </div>
            </div>
            <div className="guide-content">
              <h4 className="guide-name">Theodore
                Aiden</h4>
              <h6 className="guide-designation">Tour Guide</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="guide-card-gamma">
            <div className="guide-image">
              <img src="assets/images/guide/guide-md6.png" alt="" />
              <ul className="guide-social-links">
                <li><a href="/#"><i className="bx bxl-instagram" /></a></li>
                <li><a href="/#"><i className="bx bxl-facebook" /></a></li>
                <li><a href="/#"><i className="bx bxl-twitter" /></a></li>
              </ul>
              <div className="contact-lavel">
                <a href="/#">Contact</a>
              </div>
            </div>
            <div className="guide-content">
              <h4 className="guide-name">Lincoln
                Anthony</h4>
              <h6 className="guide-designation">Tour Guide</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="blog-area blog-style-two pt-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="section-head-gamma text-start">
            <h2>Latest Blog</h2>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="blog-btn text-lg-end"><a href="/#" className="button-fill-round">View All</a></div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="blog-card-gamma">
            <div className="blog-thumb">
              <a href="blog-details.html">
                <img src="assets/images/blog/blog-md-1.png" alt="" />
              </a>
              <div className="blog-lavel">
                <a href="/#">Guide</a>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-body-top">
                <a href="/#" className="blog-writer"><i className="bi bi-person-circle" /> By John Smith </a>
                <a href="/#" className="blog-comments"><i className="bi bi-calendar3" /> Novembar 16, 2021</a>
              </div>
              <h4 className="blog-title"><a href="blog-details.html">vitae tempor convallis, mi ligula an
                  suscipit nunc, ornare suscipit.</a></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog-card-gamma">
            <div className="blog-thumb">
              <a href="blog-details.html">
                <img src="assets/images/blog/blog-md-2.png" alt="" />
              </a>
              <div className="blog-lavel">
                <a href="/#">Travel</a>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-body-top">
                <a href="/#" className="blog-writer"><i className="bi bi-person-circle" /> By John Smith </a>
                <a href="/#" className="blog-comments"><i className="bi bi-calendar3" /> Novembar 16, 2021</a>
              </div>
              <h4 className="blog-title"><a href="blog-details.html">Mauris commodo massa vel diamnat
                  feugiat sagittis Nunc maxim.</a></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog-card-gamma">
            <div className="blog-thumb">
              <a href="blog-details.html">
                <img src="assets/images/blog/blog-md-3.png" alt="" />
              </a>
              <div className="blog-lavel">
                <a href="/#">Tour</a>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-body-top">
                <a href="/#" className="blog-writer"><i className="bi bi-person-circle" /> By John Smith </a>
                <a href="/#" className="blog-comments"><i className="bi bi-calendar3" /> Novembar 16, 2021</a>
              </div>
              <h4 className="blog-title"><a href="blog-details.html">Nulla urna leo, volutpat eu maurisa eget luctus malesuada urna.</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About