import React, { useState } from "react";
import { motion } from "framer-motion";
import {useEffect } from 'react';
import './intent.css';
import logo1 from "./assets/pcicertificate-removebg-preview.png";
import logo2 from "./assets/norton-removebg-preview.png";
const UpiIntent = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
 const [timeLeft, setTimeLeft] = useState(600);
  const buttons = [
    {
      id: 1,
      content: (
        <>
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                            <defs><linearGradient id="sT4F6bvlidZvo2wcmTTbBa_w0MU3YDSYG7T_gr1" x1="18.51" x2="37.67" y1="20.45" y2="20.45" data-name="ÐÐµÐ·ÑÐ¼ÑÐ½Ð½ÑÐ¹ Ð³ÑÐ°Ð´Ð¸ÐµÐ½Ñ 16" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".44" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><linearGradient id="sT4F6bvlidZvo2wcmTTbBb_w0MU3YDSYG7T_gr2" x1="5.62" x2="25.05" y1="27.94" y2="27.94" data-name="ÐÐµÐ·ÑÐ¼ÑÐ½Ð½ÑÐ¹ Ð³ÑÐ°Ð´Ð¸ÐµÐ½Ñ 11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fede00"></stop><stop offset="1" stop-color="#ffd000"></stop></linearGradient><linearGradient id="sT4F6bvlidZvo2wcmTTbBc_w0MU3YDSYG7T_gr3" x1="44.66" x2="5.36" y1="19.48" y2="19.48" data-name="ÐÐµÐ·ÑÐ¼ÑÐ½Ð½ÑÐ¹ Ð³ÑÐ°Ð´Ð¸ÐµÐ½Ñ 10" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#21ad64"></stop><stop offset="1" stop-color="#088242"></stop></linearGradient><linearGradient id="sT4F6bvlidZvo2wcmTTbBd_w0MU3YDSYG7T_gr4" x1="30.66" x2="4.23" y1="26.72" y2="26.72" gradientUnits="userSpaceOnUse"><stop offset=".11" stop-color="#0d62ab"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient></defs><path fill="url(#sT4F6bvlidZvo2wcmTTbBa_w0MU3YDSYG7T_gr1)" d="m44.36,21.36c-.23.42-5.54,11-5.54,11-.78,1.44-2.56,1.97-3.99,1.18l-10.4-5.51c-1.45-.8-2.24-2.58-1.43-4.03l9-17s9.38,5.22,9.84,5.47c3.15,1.74,4.27,5.72,2.52,8.89Z"></path><path fill="url(#sT4F6bvlidZvo2wcmTTbBb_w0MU3YDSYG7T_gr2)" d="m34.57,21.58s-9.84,17.28-9.99,17.56c-1.75,3.15-5.73,4.29-8.88,2.54-.26-.15-.51-.31-.75-.49,0,0,0,0,0,0-2.23-1.67-3.39-4.68-2.29-7.21,2.25-5.19,12.44-20.58,12.44-20.58l8.35,4.43c1.35.73,1.85,2.41,1.13,3.76Z"></path><path fill="url(#sT4F6bvlidZvo2wcmTTbBc_w0MU3YDSYG7T_gr3)" d="m31.45,13.67c2.08-2.52,6.57-3.28,9.55-1.67l-5.89-3.32-2.75-1.5c-2.3-1.25-5.02-1.68-7.53-.93s-4.55,2.35-5.85,4.73l-7.92,15.12c-.79,1.44-.27,3.24,1.16,4.04l4.45,2.57c1.46.8,3.29.26,4.07-1.21,0,0,9.71-16.25,9.95-16.7.22-.4.48-.78.76-1.12h0Z"></path><path fill="url(#sT4F6bvlidZvo2wcmTTbBd_w0MU3YDSYG7T_gr4)" d="m12.45,35.02c-.32,2.67.8,5.3,3.25,6.66l-8.22-4.52c-2.14-1.19-3.85-3.11-4.52-5.47s-.43-4.77.79-7l6.72-11.47c.74-1.35,2.42-1.84,3.77-1.11l6.06,3.29c1.37.75,1.86,2.46,1.09,3.82l-8.36,14.07c-.31.53-.52,1.12-.59,1.73Z"></path>
                        </svg>
          Google Pay
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                            <path fill="#4527a0" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path fill="#fff" d="M32.267,20.171c0-0.681-0.584-1.264-1.264-1.264h-2.334l-5.35-6.25	c-0.486-0.584-1.264-0.778-2.043-0.584l-1.848,0.584c-0.292,0.097-0.389,0.486-0.195,0.681l5.836,5.666h-8.851	c-0.292,0-0.486,0.195-0.486,0.486v0.973c0,0.681,0.584,1.506,1.264,1.506h1.972v4.305c0,3.502,1.611,5.544,4.723,5.544	c0.973,0,1.378-0.097,2.35-0.486v3.112c0,0.875,0.681,1.556,1.556,1.556h0.786c0.292,0,0.584-0.292,0.584-0.584V21.969h2.812	c0.292,0,0.486-0.195,0.486-0.486V20.171z M26.043,28.413c-0.584,0.292-1.362,0.389-1.945,0.389c-1.556,0-2.097-0.778-2.097-2.529	v-4.305h4.043V28.413z"></path>
                        </svg>
          PhonePe
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                            <path fill="#0d47a1" d="M5.446 18.01H.548c-.277 0-.502.167-.503.502L0 30.519c-.001.3.196.45.465.45.735 0 1.335 0 2.07 0C2.79 30.969 3 30.844 3 30.594 3 29.483 3 28.111 3 27l2.126.009c1.399-.092 2.335-.742 2.725-2.052.117-.393.14-.733.14-1.137l.11-2.862C7.999 18.946 6.949 18.181 5.446 18.01zM4.995 23.465C4.995 23.759 4.754 24 4.461 24H3v-3h1.461c.293 0 .534.24.534.535V23.465zM13.938 18h-3.423c-.26 0-.483.08-.483.351 0 .706 0 1.495 0 2.201C10.06 20.846 10.263 21 10.552 21h2.855c.594 0 .532.972 0 1H11.84C10.101 22 9 23.562 9 25.137c0 .42.005 1.406 0 1.863-.008.651-.014 1.311.112 1.899C9.336 29.939 10.235 31 11.597 31h4.228c.541 0 1.173-.474 1.173-1.101v-8.274C17.026 19.443 15.942 18.117 13.938 18zM14 27.55c0 .248-.202.45-.448.45h-1.105C12.201 28 12 27.798 12 27.55v-2.101C12 25.202 12.201 25 12.447 25h1.105C13.798 25 14 25.202 14 25.449V27.55zM18 18.594v5.608c.124 1.6 1.608 2.798 3.171 2.798h1.414c.597 0 .561.969 0 .969H19.49c-.339 0-.462.177-.462.476v2.152c0 .226.183.396.422.396h2.959c2.416 0 3.592-1.159 3.591-3.757v-8.84c0-.276-.175-.383-.342-.383h-2.302c-.224 0-.355.243-.355.422v5.218c0 .199-.111.316-.29.316H21.41c-.264 0-.409-.143-.409-.396v-5.058C21 18.218 20.88 18 20.552 18c-.778 0-1.442 0-2.22 0C18.067 18 18 18.263 18 18.594L18 18.594z"></path><path fill="#00adee" d="M27.038 20.569v-2.138c0-.237.194-.431.43-.431H28c1.368-.285 1.851-.62 2.688-1.522.514-.557.966-.704 1.298-.113L32 18h1.569C33.807 18 34 18.194 34 18.431v2.138C34 20.805 33.806 21 33.569 21H32v9.569C32 30.807 31.806 31 31.57 31h-2.14C29.193 31 29 30.807 29 30.569V21h-1.531C27.234 21 27.038 20.806 27.038 20.569L27.038 20.569zM42.991 30.465c0 .294-.244.535-.539.535h-1.91c-.297 0-.54-.241-.54-.535v-6.623-1.871c0-1.284-2.002-1.284-2.002 0v8.494C38 30.759 37.758 31 37.461 31H35.54C35.243 31 35 30.759 35 30.465V18.537C35 18.241 35.243 18 35.54 18h1.976c.297 0 .539.241.539.537v.292c1.32-1.266 3.302-.973 4.416.228 2.097-2.405 5.69-.262 5.523 2.375 0 2.916-.026 6.093-.026 9.033 0 .294-.244.535-.538.535h-1.891C45.242 31 45 30.759 45 30.465c0-2.786 0-5.701 0-8.44 0-1.307-2-1.37-2 0v8.44H42.991z"></path>
                        </svg>
          Paytm
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                            <g transform="matrix(.35278 0 0 -.35278 30.588 .01)"><linearGradient id="fZ5QJO0zpePOIUpGT06DDa_1AzdGyrT9jI0_gr1" x1="-67.013" x2="-35.864" y1="-20.175" y2="-52.601" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#21ad64"></stop><stop offset="1" stop-color="#088242"></stop></linearGradient><path fill="url(#fZ5QJO0zpePOIUpGT06DDa_1AzdGyrT9jI0_gr1)" d="M-3.488-12.991l26.973-53.638c0.605-1.203,0.349-2.66-0.629-3.586 l-56.7-53.632c-2.244-2.123-5.86,0.053-5.035,3.03L-9.152-13.546C-8.407-10.858-4.742-10.498-3.488-12.991z"></path></g><path d="M25.729,10.67l-7.631,27.536l13.43-12.698c0.661-0.625,0.837-1.629,0.429-2.44L25.729,10.67z" opacity=".05"></path><path d="M25.53,11.388l-7.173,25.885l12.828-12.129c0.502-0.475,0.636-1.236,0.326-1.853L25.53,11.388z" opacity=".07"></path><linearGradient id="fZ5QJO0zpePOIUpGT06DDb_1AzdGyrT9jI0_gr2" x1="-3.965" x2="30.418" y1="4.688" y2="39.071" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed100"></stop><stop offset="1" stop-color="#e36001"></stop></linearGradient><path fill="url(#fZ5QJO0zpePOIUpGT06DDb_1AzdGyrT9jI0_gr2)" d="M21.557,4.593l9.507,18.922c0.213,0.424,0.123,0.938-0.222,1.265L10.831,43.7	c-0.792,0.749-2.067-0.019-1.776-1.07L19.559,4.788C19.822,3.84,21.115,3.714,21.557,4.593z"></path>
                        </svg>
          BHIM UPI
        </>
      ),
    },
  ];
  const handleClick = (index) => {
    setSelectedButton(index);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedButton(null);
  };
 useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor((timeLeft % 3600) / 60); 
  const seconds = timeLeft % 60; 

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <section className="container">
      <div className="header">UPI INTENT</div>
      <div className="timer-section">
  <div className="timer-row">
    <p className="timer-label">Payment Time Left</p>
    <p className="timer-value">{formattedTime}</p>
  </div>
      </div>

      <div className="amount-section">
        <div className="amount-row">
          <p className="amount-label">
            Amount : <span className="amount-value">₹5000</span>
          </p>
        </div>
      </div>

      {!isModalVisible ? (
        <div className="button-section">
          {buttons.map((button, index) => (
            <button
              key={button.id}
              className="button"
              onClick={() => handleClick(index)}
            >
              {button.content}
            </button>
          ))}
        </div>
      ) : (
        <motion.div
          className="modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            color: "#37474f",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "12px",
            textAlign: "center",
            padding: "15px",
            fontSize: "2rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          }}
        ><p className="amount-value">₹5000</p>
          <p style={{display: "flex", alignItems: "center", gap: "10px" }}>
            {buttons[selectedButton]?.content}
          </p>
          <button onClick={closeModal} className="button1">
            Pay Here
          </button>
        </motion.div>
      )}

      <div className="logos-section">
      <div className="logos-section">
  <button className="logo-button">
    <img src={logo1} alt="Norton Secure Logo" className="logo-image" />
  </button>
  <button className="logo-button">
    <img src={logo2} alt="PCI DSS Certificate Logo" className="logo-image" />
  </button>
</div>
      </div>

      <div className="video-section">
        <div
          className="video-instruction"
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Watch a video for quick deposit instruction
        </div>
        <div
          className="language-options"
          style={{ fontSize: "16px", color: "#555", marginTop: "5px" }}
        >
          Telugu - Hindi - Tamil - English
        </div>
      </div>
    </section>
  );
};

export default UpiIntent;
