import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import img1 from "./images/laser1.jpeg";
import img2 from "./images/laser2.jpeg";
import img3 from "./images/laser3.jpeg";
import img4 from "./images/3dprinter.jpeg";
import img5 from "./images/milling.jpeg";
import Navbar from "../Navbar/Navbar";

import Explore from "../components/FabLab/ExploreFabLab";
import AppointmentFormFabLab from "../components/FabLab/AppointmentFormFabLab";

export default function FabLab() {
  const [showBasic, setShowBasic] = useState(false);

  // const spanStyle = {
  //   padding: '20px',
  //   background: '#efefef',
  //   color: '#000000'
  // }

  const handleClick = () => {
    window.open("https://forms.gle/FMdWLi2yGPEjuHCa6", "_blank");
    // or
    // window.location.href = 'https://www.example.com';
  };
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#34495E", // Change to your desired background color
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw" /* Full width of the viewport */,
    height: "91vh" /* Full height of the viewport */,
    overflow: "hidden" /* Hide overflow content */,
  };
  const slideStyle = {
    width: "100%" /* Full width */,
    height: "100%" /* Full height */,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const innerDivStyle = {
    width: "100%" /* Full width */,
    height: "100%" /* Full height */,
  };
  const slideImages = [
    {
      url: img1,
      caption: "Image 1",
    },
    {
      url: img5,
      caption: "Image 2",
    },
    {
      url: img4,
      caption: "Image 3",
    },
    {
      url: img3,
      caption: "Image 3",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>{" "}
      <FormContainer>
        <br></br>
        <h1>Fab Lab</h1>

        {/* fab Lab explore section  */}
        <div className="flex flex-col gap-8">
          <Explore />

          <div className="flex flex-col items-center justify-center">
            <h1>Request for Appointment </h1>
            <AppointmentFormFabLab />
            <br></br>
          </div>
        </div>

        <h1>Contact us </h1>
        <p>
          <span>Dr. Kiran Wakchaure</span>
          <br />
          Fablab Lab Coordinator
          <br />
          <span> Email:</span> kiranwakchaure@gmail.com
          <br />
          <span>Mobile No.</span> +91-7588025393
        </p>
      </FormContainer>
    </>
  );
}
const FormContainer = styled.div`
  height: full;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  background-color: #222222;
  p {
    color: white;
    text-align: center;
    // justify-content: center;

    margin-left: 150px;
    margin-right: 150px;
    font-size: 20px;
  }
  h1 {
    font-weight: bold;
    color: #5680e9;
    font-family: Nexa-Light;
  }
  h2 {
    font-weight: bold;
    font-family: Nexa;
    color: #5680e9;
    font-size: 60px;
  }
  span {
    font-weight: bold;
    color: #496099;
  }
  button {
  }
  .main {
    width: full;
    display: flex;
    flex-direction: row;
    flex-gap: 5px;

    .info {
      width: 30%;
    }
  }
`;
