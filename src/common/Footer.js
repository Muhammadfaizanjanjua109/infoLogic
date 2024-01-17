import React from "react";
import  logo from '../assets/images/logo.png'
import  footer from '../assets/images/footer.png'
import Image from "next/image";
function Footer() {
  return (
    <div>
    <div className="row bg-dark">
   <div className="col-lg-6 col-md-6 col-sm-12">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid flex-column justify-content-start align-items-start">
          <a className="navbar-brand" href="#">
            <Image src={logo} width={150} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav  flex-column" >
              <li className="nav-item">
                <a className="nav-link active font-primary" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-primary" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-primary" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-primary" href="#">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav></div>


      <div className="col-lg-6 col-md-6 col-sm-12">
      <Image src={footer}  alt="logo" />
      </div>
    </div>
    </div>
  );
}

export default Footer;
