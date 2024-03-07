import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Navbar from "../Navbar/Navbar";
import AppointmentFormIndustry4_0 from "../components/FabLab/AppointmentFormIndustry4_0";

export default function Industry() {
  const [showBasic, setShowBasic] = useState(false);

  // const spanStyle = {
  //   padding: '20px',
  //   background: '#efefef',
  //   color: '#000000'
  // }

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
      url: "https://www.plm.automation.siemens.com/media/global/en/industry-4.0-glossary_tcm27-52750.jpg",
      caption: "Image 1",
    },
    {
      url: "https://media.istockphoto.com/id/1183043211/photo/man-is-working-to-control-a-robotic-arm.jpg?s=612x612&w=0&k=20&c=7AXnES2mRV8UVzbwQ8HPg5RmsmkvNkTvTaTwb9RKe4k=",
      caption: "Image 2",
    },
    {
      url: "https://www.calsoft.com/wp-content/uploads/2022/07/27.-Industry-4.0-1-1024x655.png",
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
        <h1>Industry 4.0</h1>
        <p>
          Immerse yourself in the cutting-edge technologies and innovations of
          Industry 4.0. Explore the transformative potential of artificial
          intelligence, internet of things (IoT), big data analytics, and
          robotics. Discover real-world case studies, research papers, and
          practical implementation strategies to drive the future of
          manufacturing and beyond.
        </p>
        <br></br>
        <h1>Request for Appointment </h1>
        <AppointmentFormIndustry4_0 />
        <br></br>
        <h1>Contact us </h1>
        <p>
          <span>Prof. Vishant Kumar</span>
          <br />
          Industry 4.0 Lab Coordinator
          <br />
          <span> Email:</span> vishantkumar@gmail.com
          <br />
          <span>Mobile No.</span> +91-9311896871
        </p>
      </FormContainer>
    </>
  );
}
const FormContainer = styled.div`
  height: 150vh;
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
    font-size: 70px;
  }
  span {
    font-weight: bold;
    color: #496099;
  }
  button {
  }
`;
