import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Navbar from "../Navbar/Navbar";

import AppointmentFormIndustry4_0 from "../components/FabLab/AppointmentFormIndustry4_0";
export default function Automation() {
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
      url: "https://datasemantics.co/wp-content/uploads/2021/02/Automation-in-workplace-today-1.jpg",
      caption: "Image 1",
    },
    {
      url: "https://media.istockphoto.com/id/1442677960/photo/robotic-machine-visual-system.webp?b=1&s=170667a&w=0&k=20&c=JzwDumS20cuMomtZHhphtaWvrMZm5bk2tq0OfZxbv78=",
      caption: "Image 2",
    },
    {
      url: "https://img.freepik.com/free-photo/cloud-computing-banner-background-smart-city_53876-108504.jpg?size=626&ext=jpg",
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
        <h1>Automation</h1>
        <p>
          Automation is a pivotal component of the mechatronics field,
          revolutionizing industries and transforming the way we work. By
          integrating mechanical, electrical, and computer systems, automation
          enables businesses to streamline processes, increase efficiency, and
          enhance productivity. In the realm of mechatronics, automation entails
          the use of advanced technologies such as robotics, programmable logic
          controllers (PLCs), and intelligent control systems. These
          cutting-edge solutions eliminate manual labor, reduce human error, and
          accelerate production cycles, resulting in significant time and cost
          savings. From industrial manufacturing to logistics and beyond,
          automation plays a crucial role in optimizing operations. It enables
          tasks to be performed with precision, consistency, and speed, allowing
          businesses to meet increasing demands and maintain a competitive edge
          in today's fast-paced market.
        </p>
        <br></br>
        <h1>Details </h1>
        <AppointmentFormIndustry4_0 />
        <br></br>
        <h1>Contact us </h1>
        <p>
          <span>Dr. Naveen Kumar</span>
          <br />
          Automation Lab Coordinator <br />
          <span> Email:</span> naveenkumar@gmail.com
          <br />
          <span>Mobile No.</span> +91-9311896871
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
    font-size: 70px;
  }
  span {
    font-weight: bold;
    color: #496099;
  }
  button {
  }
`;
