import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Navbar from "../Navbar/Navbar";

import ARVR from "./images/AR-VR-Dev.jpg";
import BlockChain from "./images/blockchain-development.webp";
import webDev from "./images/WebDevlopment.jpg";
import dataSci from "./images/data-science.jpg";
import embeddedC from "./images/Embedded-c-programming.jpg";
import Programming from "./images/programming-language.png";
import Assembly from "./images/Assembly.avif";
import AppointmentFormSoftware from "../components/FabLab/AppointmentFormSoftware";
export default function Software() {
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
    height: "100vh" /* Full height of the viewport */,
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
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const slideImages = [
    {
      url: dataSci,
      //caption: 'Image 1'
    },
    {
      url: webDev,
      // caption: 'Image 2'
    },
    {
      url: Programming,
      // caption: 'Image 3'
    },
    {
      url: BlockChain,
      // caption: 'Image 3'
    },
    {
      url: embeddedC,
      // caption: 'Image 3'
    },
    {
      url: ARVR,
      // caption: 'Image 3'
    },
    {
      url: Assembly,
      // caption: 'Image 3'
    },
  ];
  return (
    <>
      <Navbar />
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="w-full h-full">
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
        <h1>Software Solutions</h1>

        {/* software info */}
        <div className="w-full max-w-[80%] grid grid-cols-3 grid-rows-2 gap-14 mt-4">
          <div className="flex flex-col  min-h-[700px] items-center shadow-lg rounded-lg bg-[#539ab5] hover:scale-95 transition:all duration-200 hover:bg-[#5bb1d3] cursor-pointer">
            <div>
              <img src={dataSci} alt="image" className="w-fit p-4" />
            </div>
            <p className="font-[Nexa]">Data Science</p>
            <p className="w-fit mx-0 px-4">
              Dive into the realm of data science and uncover the latest
              techniques, tools, and algorithms that drive data-driven decision
              making. From predictive analytics to machine learning, this
              platform equips you with the knowledge and resources to navigate
              the vast landscape of data science.
            </p>
          </div>

          <div className="flex flex-col  min-h-[700px] items-center shadow-lg rounded-lg bg-[#539ab5] hover:scale-95 transition:all duration-200 hover:bg-[#5bb1d3] cursor-pointer">
            <div>
              <img src={webDev} alt="image" className="w-fit p-4" />
            </div>
            <p className="font-[Nexa]">Web Development</p>
            <p className="w-fit mx-0 px-4">
              Discover the world of web development through insightful
              tutorials, cutting-edge frameworks, and practical examples.
              Whether you're a beginner or an experienced developer, this
              website is your go-to resource for mastering the art of building
              dynamic and visually stunning websites.
            </p>
          </div>

          <div className="flex flex-col  min-h-[700px] items-center shadow-lg rounded-lg bg-[#539ab5] hover:scale-95 transition:all duration-200 hover:bg-[#5bb1d3] cursor-pointer">
            <div>
              <img src={Programming} alt="image" className="w-fit p-4" />
            </div>
            <p className="font-[Nexa]">Programming & Coding</p>
            <p className="w-fit mx-0 px-4">
              Welcome to an ultimate destination for programming language
              enthusiasts. Explore the intricacies of various languages, from
              Python to Java, C++ to Ruby. Unleash your coding potential with
              comprehensive tutorials, expert tips, and a vibrant community of
              developers, all under one roof.
            </p>
          </div>

          <div className="flex flex-col  min-h-[700px] items-center shadow-lg rounded-lg bg-[#539ab5] hover:scale-95 transition:all duration-200 hover:bg-[#5bb1d3] cursor-pointer">
            <div>
              <img src={embeddedC} alt="image" className="w-fit p-4" />
            </div>
            <p className="font-[Nexa]">Embedded C</p>
            <p className="w-fit mx-0 px-4">
              Explore the world of embedded C programming. Dive into
              microcontrollers, learn how to interface with hardware, and
              develop efficient and reliable embedded systems. Join our
              community of passionate developers and unlock the possibilities of
              the embedded world
            </p>
          </div>

          <div className="flex flex-col  min-h-[700px] items-center shadow-lg rounded-lg bg-[#539ab5] hover:scale-95 transition:all duration-200 hover:bg-[#5bb1d3] cursor-pointer">
            <div>
              <img src={BlockChain} alt="image" className="w-fit p-4" />
            </div>
            <p className="font-[Nexa]">Blockchain Development</p>
            <p className="w-fit mx-0 px-4">
              Step into the world of blockchain, where innovation and
              decentralization intersect. Unlock the secrets of blockchain
              technology, smart contracts, and decentralized applications
              (dApps). Join a community of passionate builders as we
              revolutionize industries and redefine trust in the digital era.
            </p>
          </div>

          <div className="flex flex-col  min-h-[700px] items-center shadow-lg rounded-lg bg-[#539ab5] hover:scale-95 transition:all duration-200 hover:bg-[#5bb1d3] cursor-pointer">
            <div>
              <img src={ARVR} alt="image" className="w-fit p-4" />
            </div>
            <p className="font-[Nexa]">AR/VR Development</p>
            <p className="w-fit mx-0 px-4">
              Embark on an immersive adventure into the realms of augmented
              reality (AR) and virtual reality (VR). Discover the latest
              advancements, development frameworks, and mind-bending experiences
              in AR and VR. Unleash your creativity and reshape reality through
              the power of technology.
            </p>
          </div>
        </div>

        <p></p>
        <br></br>
        <h1>Request for Demo </h1>
        <AppointmentFormSoftware />
        <br></br>
        <h1>Contact us </h1>
        <p>
          <span>John Wick</span>
          <br />
          Software and Coding <br />
          <span> Email:</span> John@gmail.com
          <br />
          <span>Mobile No.</span> +91-323244422
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
