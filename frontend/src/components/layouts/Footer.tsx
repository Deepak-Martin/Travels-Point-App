import React from 'react'

const Footer = () => {
  return (
    <>
        
    <div className="footer-area">
  <div className="footer-main-wrapper">
    <div className="footer-vactor">
      <img src="assets/images/banner/footer-bg.png" alt='' />
    </div>
    <div className="container">
      <div className="row justify-content-center g-4">
        <div className="col-lg-4">
          <div className="footer-about text-lg-start text-center">
            <p>
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
              venenatis hendrerit a id lectus. Suspendissendt molestie
              turpis nec lacinia vehicula.
            </p>
            <div className="footer-social-wrap">
              <h5>Follow Us On:</h5>
              <ul className="footer-social-links justify-content-lg-start justify-content-center">
                <li>
                  <a href="#"><i className="bx bxl-instagram" /></a>
                </li>
                <li>
                  <a href="#"><i className="bx bxl-facebook" /></a>
                </li>
                <li>
                  <a href="#"><i className="bx bxl-twitter" /></a>
                </li>
                <li>
                  <a href="#"><i className="bx bxl-whatsapp" /></a>
                </li>
                <li>
                  <a href="#"><i className="bx bxl-pinterest-alt" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="footer-widget">
            <h4 className="footer-widget-title">Quick Link</h4>
            <ul className="footer-links">
              <li><a href="about.html">About Us</a></li>
              <li><a href="package.html">Tour Package</a></li>
              <li><a href="destination.html">Destination</a></li>
              <li><a href="guide.html">Tour Guide</a></li>
              <li><a href="package-details.html">Booking Process</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="footer-widget">
            <h4 className="footer-widget-title">Tour Type</h4>
            <ul className="footer-links">
              <li><a href="#">Wild &amp; Adventure Tours</a></li>
              <li><a href="#">Group Tour</a></li>
              <li><a href="#">Seasonal Tours</a></li>
              <li><a href="#">Relaxation Tours</a></li>
              <li><a href="#">Family Friendly Tours</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-8">
          <div className="footer-widget">
            <h4 className="footer-widget-title text-center">Gallery</h4>
            <div className="footer-gallary-grid">
              <div className="footer-gallary-item">
                <a href="assets/images/gallary/fg-1.png" data-fancybox="footer" data-caption="Caption Here"><img src="assets/images/gallary/fg-1.png" alt='' /></a>
              </div>
              <div className="footer-gallary-item">
                <a href="assets/images/gallary/fg-2.png" data-fancybox="footer" data-caption="Caption Here"><img src="assets/images/gallary/fg-2.png" alt='' /></a>
              </div>
              <div className="footer-gallary-item">
                <a href="assets/images/gallary/fg-3.png" data-fancybox="footer" data-caption="Caption Here"><img src="assets/images/gallary/fg-3.png" alt='' /></a>
              </div>
              <div className="footer-gallary-item">
                <a href="assets/images/gallary/fg-4.png" data-fancybox="footer" data-caption="Caption Here"><img src="assets/images/gallary/fg-4.png" alt='' /></a>
              </div>
              <div className="footer-gallary-item">
                <a href="assets/images/gallary/fg-5.png" data-fancybox="footer" data-caption="Caption Here"><img src="assets/images/gallary/fg-5.png" alt='' /></a>
              </div>
              <div className="footer-gallary-item">
                <a href="assets/images/gallary/fg-6.png" data-fancybox="footer" data-caption="Caption Here"><img src="assets/images/gallary/fg-6.png" alt='' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-contact-wrapper">
        <h5>Contact Us:</h5>
        <ul className="footer-contact-list">
          <li>
            <i className="bi bi-telephone-x" />
            <a href="tel:+17632275032">+1 763-227-5032</a>
          </li>
          <li>
            <i className="bi bi-envelope-open" />
            <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#761f18101936021903040e0604195815191b"><span className="__cf_email__" data-cfemail="eb82858d84ab9f849e99939b9984c5888486">[email&nbsp;protected]</span></a>
          </li>
          <li>
            <i className="bi bi-geo-alt" />
            <a href="#">2752 Willison Street Eagan, United State</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-4 col-md-6 order-lg-1 order-3">
          <div className="copyright-link text-lg-start text-center">
            <p>
              Copyright 2021 TourXPro | Design By <a href="#"> Egens Lab</a>
            </p>
          </div>
        </div>
        <div className="col-lg-4 order-lg-2 order-1">
          <div className="footer-logo text-center">
            <a href="index.html"><img src="assets/images/logo-w.png" alt='' /></a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-lg-3 order-2">
          <div className="policy-links">
            <ul className="policy-list justify-content-lg-end justify-content-center">
              <li><a href="#">Terms &amp; Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Footer
