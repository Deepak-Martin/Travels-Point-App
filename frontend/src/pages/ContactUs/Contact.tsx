import React from "react";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <>
      <div className="breadcrumb breadcrumb-style-one">
        <div className="container">
          <div className="col-lg-12 text-center">
            <h2 className="breadcrumb-title">Contact Us</h2>
            <ul className="d-flex justify-content-center breadcrumb-items">
              <li className="breadcrumb-item">
                  <Link to='/'>Home</Link>
              </li>
              <li className="breadcrumb-item active">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact-wrapper pt-100">
        <div className="container">
          <div className="row align-items-center justify-content-lg-center gy-5">
            <div className="col-lg-6">
              <div className="contatc-intro-figure">
                <img
                  src="assets/images/banner/contact-bg.png"
                  alt="Here is your alt tag"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-info">
                <h3>Contact Info.</h3>
                <ul>
                  <li>
                    <h6>Let’s Talk</h6>
                    <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#0d64636b624d68756c607d6168236e6260">
                      <span
                        className="__cf_email__"
                        data-cfemail="bed7d0d8d1fedbc6dfd3ced2db90ddd1d3"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                    <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#e28b8c848da2879a838f928e87cc818d8f">
                      <span
                        className="__cf_email__"
                        data-cfemail="d3babdb5bc93b6abb2bea3bfb6fdb0bcbe"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                    <a href="tel:8801761111456">+88 0176 1111 456</a>
                  </li>
                  <li>
                    <h6>Loacation.</h6>
                    <a href="/#">
                      168/170, Ave 01, Streets Suite 666 Mirpur DOHS, Bangladesh
                    </a>
                  </li>
                  <li>
                    <h6>Visit Us.</h6>
                    <a href="/#">Facebook: https://www.facebook.com/egenslab</a>
                    <a href="/#">Twitter: https://www.twitter.com/egenslab</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-120">
          <form action="#" id="contact_form">
            <div className="contact-form-wrap">
              <h4>Get a free Keystroke quote now</h4>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="custom-input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Your name" id="name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="custom-input-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Your Email" id="email" />
                  </div>
                </div>
              </div>
              <div className="custom-input-group">
                <textarea
                  cols={20}
                  rows={7}
                  placeholder="Your message"
                  defaultValue={""}
                />
              </div>
              <div className="custom-input-group">
                <div className="submite-btn">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="container-fluid p-0">
          <div className="contact-map mt-60 mb-5">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                title="Our Location"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
