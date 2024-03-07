import React, { useState } from "react";
import logo from "../pages/Sanjivani.png";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar
      style={{ backgroundColor: "#2C3E50", padding: "15px 0" }}
      expand="lg"
      dark
    >
      <MDBContainer fluid style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://png.pngtree.com/png-clipart/20230330/original/pngtree-modern-demo-logo-design-vector-png-image_9013069.png"
          alt="logo"
          style={{ height: "40px", width: "auto", marginRight: "10px" }}
        />

        <MDBNavbarBrand
          style={{
            fontFamily: "Nexa-Light, Arial, sans-serif",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ffffff",
            paddingLeft: "0",
          }}
          href="/landing"
        >
          Software Courses 
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <span className="navbar-toggler-icon" />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="/software"
                style={{
                  fontFamily: "Nexa-Light, Arial, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "20px 30px",
                  transition: "transform 0.3s ease",
                }}
                className="zoom-on-hover"
              >
                Software
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="/landing"
                style={{
                  fontFamily: "Nexa-Light, Arial, sans-serif",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "20px 30px",
                  transition: "transform 0.3s ease",
                }}
                className="zoom-on-hover"
              >
                About us
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* Add similar MDBNavbarItems for other links */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
      <style>{`
        .zoom-on-hover:hover {
          transform: scale(1.1);
        }
      `}</style>
    </MDBNavbar>
  );
}
