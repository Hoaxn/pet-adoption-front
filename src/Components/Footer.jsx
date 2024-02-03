/** @format */

import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <p className="fw-bold text-uppercase fs-6 text-white">
                Useful Links
              </p>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/"}>Home</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/list-pets"}>Adopt</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/about"}>About us</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <p className="fw-bold text-uppercase fs-6 text-white">
                Contact Us
              </p>
              <p>
                New Baneshwor, Kathmandu <br />
                <br /> <strong>Phone: </strong>{" "}
                <a style={{ color: "white" }} href="tel:+977 1234567890">
                  +977 1234567890
                </a>
                <br /> <strong>Email: </strong>{" "}
                <a
                  style={{ color: "white" }}
                  href="mailto:avinav.bhatta0@gmail.com"
                >
                  avinav.bhatta0@gmail.com
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>Follow Our Socials</h3>

              <div className="social-links mt-3">
                {" "}
                <a
                  href="https://twitter.com/Hoaxnn"
                  target={"_blank"}
                  className="twitter"
                >
                  <i className="fab fa-twitter" />
                </a>{" "}
                <a
                  href="https://www.facebook.com/Hoaxnn"
                  target={"_blank"}
                  className="facebook"
                >
                  <i className="fab fa-facebook" />
                </a>{" "}
                <a
                  target={"_blank"}
                  href="https://www.instagram.com/hoaxn_/"
                  className="instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
