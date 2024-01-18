import React from 'react';
import logo from '../assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Service" className="nav-link">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
