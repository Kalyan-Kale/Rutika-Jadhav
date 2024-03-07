import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Navbar from "../Navbar/Navbar";

export default function Landing() {
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
      url: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      caption: "Image 1",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661373704604-7c4d230c8928?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      caption: "Image 2",
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
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
      </div>
      <FormContainer>
        <br></br>
        <h2>Free Software Solutions</h2>
        <h1>Software Consultancy Services </h1>
        <p>
        Welcome to our free software consultancy services! We specialize in providing expert guidance and support to businesses and individuals looking to navigate the world of open-source software. Our team of experienced consultants offers tailored solutions to help you harness the power of free software, from selecting the right tools to optimizing your workflows and ensuring compliance with licensing requirements. Whether you're a startup looking to minimize costs or a large enterprise seeking to leverage the advantages of open-source technologies, we're here to assist you every step of the way. Let us empower your journey towards innovation and efficiency with our comprehensive free software consultancy services.
        </p>
        <br></br>

        <br></br>
        <h1>Contact us </h1>
        <p>
          <span>Free Software Solutions</span>
      <br />
          <span> Email:</span> freesoftwaresolutions@gmail.com
          <br />
          <span>Mobile No.</span> +91-123456789
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
    color: #496099;
    font-size: 35px;
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
  .slide-container {
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    overflow: hidden; /* Hide overflow content */
  }

  .slide-container .slide {
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
  }

  .slide-container .slide > div {
    width: 100%; /* Full width */
    height: 100%; /* Full height */
  }

  .slide-container .slide > div > div {
    width: 100%; /* Full width */
    height: 100%; /* Full height */
  }
`;
