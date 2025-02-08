// src/App.jsx
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "wired-elements"; // So we can use <wired-button>, etc.
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./App.css";
import Projects from "./Projects";
import Typewriter from "./Typewriter";
import Sun from "./Sun";
import MovingClouds from "./MovingClouds";

function Home({ musicOn, toggleMusic }) {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popupName) => setActivePopup(popupName);
  const closePopup = () => setActivePopup(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "skyblue", // match your top bar color
        color: "#000",
        paddingTop: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ========== FIXED TOP BAR ========== */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0, // Remove "width: '100%'" in favor of right: 0
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0.5rem 1rem", // reduce horizontal padding from "2rem" to "1rem"

          zIndex: 999,
        }}
      >
        <Sun />
        <MovingClouds />

        {/* Buttons on the right side */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <wired-button
            elevation="2"
            style={{ color: "#FFF" }}
            onClick={() => openPopup("resume")}
          >
            Resume
          </wired-button>

          <wired-button
            elevation="2"
            style={{ color: "#FFF" }}
            onClick={() => openPopup("contact")}
          >
            Contact
          </wired-button>

          <Link to="/projects" style={{ textDecoration: "none" }}>
            <wired-button
              style={{ color: "#000", backgroundColor: "yellow" }}
              class="projects"
              elevation="2"
            >
              Projects
            </wired-button>
          </Link>
        </div>
      </div>
      {/* ========== END TOP BAR ========== */}

      {/* ========== MAIN CONTENT ========== */}
      <div
        style={{
          marginTop: "6rem", // push below fixed nav
          padding: "0 2rem",
          textAlign: "left",
          maxWidth: "800px",
          width: "100%",
          color: "white",
          zIndex: 3,
        }}
      >
        {/* Typed Name (smaller) */}
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          <Typewriter text="Hi! My name is Vrishank!" speed={80} />
        </h1>

        {/* Typed About Text */}
        <p style={{ fontSize: "1.1rem", lineHeight: "1.5" }}>
          <Typewriter
            text="I'm a junior in college with a passion for C++, systems programming, 
                  full-stack, and machine learning! I'm interested in learning more about ml, infrastructure engineering, and UX!"
            speed={30}
          />
        </p>
      </div>

      {/* Music Toggle Button (Bottom Right) */}
      <div
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <p style={{ color: "white" }}>Music</p>
        <wired-toggle onClick={toggleMusic}></wired-toggle>
      </div>

      {/* ========== POPUP OVERLAYS ========== */}
      {activePopup && (
        <div
          onClick={closePopup}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              // The parent container for the card
              maxWidth: "90%",
              maxHeight: "90%",
              overflowY: "auto",
            }}
          >
            {/* ========== REPLACE POPUP DIV with WIRED-CARD ========== */}
            {activePopup === "resume" && (
              <wired-card
                elevation="3"
                style={{
                  display: "block",
                  padding: "1.5rem",
                  background: "#fff",
                  color: "#000",
                }}
              >
                <img
                  src="/Vrishank_Bangari_Resume-1.png"
                  alt="Vrishank Bangari Resume"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <wired-button style={{ color: "blue" }}>
                  <a href="/Vrishank_Bangari_Resume.pdf" download>
                    Download PDF
                  </a>
                </wired-button>
              </wired-card>
            )}

            {/* Contact Popup in a Card */}
            {activePopup === "contact" && (
              <wired-card
                elevation="3"
                style={{
                  display: "block",
                  padding: "1.5rem",
                  background: "#fff",
                  color: "#000",
                }}
              >
                <h3>Contact</h3>
                <a href="mailto:vrish.2013@gmail.com">
                  Email: vrish.2013@gmail.com
                </a>
                <br></br>
                <a href="https://www.linkedin.com/in/vrishankb/">linkedin</a>
                <br></br>
                <a href="https://github.com/nebulaguy">github</a>
              </wired-card>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current = new Audio("/guitar.mp3");
  }, []);

  // Toggle Music Playback
  const toggleMusic = () => {
    if (musicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.loop = true; // Ensure looping
      audioRef.current.play();
    }
    setMusicOn(!musicOn);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home musicOn={musicOn} toggleMusic={toggleMusic} />}
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
