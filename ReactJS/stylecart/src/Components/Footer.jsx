import React, { useContext } from "react";
import ThemeContext from "../hooks/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  const gradientStyle = {
    background: darkMode
      ? "linear-gradient(90deg, #0f2027, #203a43, #2c5364)"
      : "linear-gradient(90deg, #654ea3, #eaafc8)",
    color: darkMode ? "white" : "black",
  };

  return (
    <footer className="mt-0 pt-4 pb-2 border-top border-black border-3" style={gradientStyle}>
      <div className="container">
        <div className="row">
          {/* Logo + Description */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">ShopEase</h4>
            <p>Your premium fashion destination for Men & Women clothing.</p>

            {/* Social Icons */}
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-decoration-none text-reset">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-decoration-none text-reset">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-decoration-none text-reset">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-decoration-none text-reset">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="#" className="text-decoration-none text-reset">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-reset">
                  Men's Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-reset">
                  Women's Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-reset">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mt-3 mb-1">
              <i className="bi bi-geo-alt"></i> Pune, Maharashtra, India
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope"></i> support@shopease.com
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone"></i> +91 99999 99999
            </p>
          </div>
        </div>

        <hr />

        {/* Bottom Text */}
        <div className="text-center small">
          © {new Date().getFullYear()} ShopEase. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
