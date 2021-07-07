import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer id="footer" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footerContent">
                <p className="mb-0">
                  &copy; And All Rights Reserved, {year}. Developed By
                  <NavLink to="/contact">
                    <strong> Mahabur Rahman</strong>
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
