import React, { useEffect, useState } from "react";
import { Gradient } from "./assets/Gradient.js";
import "./assets/gradient.css";

const DEFAULT_COLORS = {
  color1: "#0bf1ff",
  color2: "#d000ff",
  color3: "#ff85f7",
  color4: "#ff943d",
};

function App() {
  const [activePopup, setActivePopup] = useState(null);
  const [colors, setColors] = useState(DEFAULT_COLORS);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");

    return () => {
      if (gradient.disconnect) {
        gradient.disconnect();
      }
    };
  }, []);

  const closePopup = () => setActivePopup(null);

  const resetColors = () => {
    setColors(DEFAULT_COLORS);
    const canvas = document.getElementById("gradient-canvas");
    Object.entries(DEFAULT_COLORS).forEach(([key, value], index) => {
      canvas.style.setProperty(`--gradient-color-${index + 1}`, value);
    });

    // Reinitialize the gradient after resetting colors
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  };

  const handleColorChange = (colorNum, value) => {
    const newColors = { ...colors, [`color${colorNum}`]: value };
    setColors(newColors);
    const canvas = document.getElementById("gradient-canvas");
    canvas.style.setProperty(`--gradient-color-${colorNum}`, value);

    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  };

  return (
    <section className="section_top">
      <div className="section-container">
        <div className="section-layout-container container-medium with-padding">
          <div className="section-layout">
            <div className="gradient-area">
              <div className="gradient-title-area">
                <h1 className="text text-above section-title-1">
                  Vrishank <br /> Bangari
                </h1>
                <div className="section_background-wrap">
                  <canvas
                    id="gradient-canvas"
                    data-js-darken-top
                    data-transition-in
                  ></canvas>
                </div>
                <div className="text text-under text-under-blended section-title-1">
                  Vrishank <br /> Bangari
                </div>
                <div className="text text-under text-under-overlay section-title-1">
                  Vrishank <br /> Bangari
                </div>
              </div>
            </div>
            <h2 className="section-title-2 subtitle">
              Hi! I'm Vrishank. I'm a junior in college with a passion for
              systems programming, full stack, and machine learning! <br />
              <br />
              I'm currently building projects in ML and computer graphics!
            </h2>
            <div className="social-icons">
              <a
                href="https://github.com/nebulaguy"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/vrishankb"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pixel-buttons">
        <button
          className="pixel-button"
          onClick={() => setActivePopup("resume")}
        >
          Resume
        </button>
        <button
          className="pixel-button"
          onClick={() => setActivePopup("projects")}
        >
          Projects
        </button>
        <button
          className="pixel-button"
          onClick={() => setActivePopup("contact")}
        >
          Contact
        </button>
      </div>
      {activePopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            {activePopup === "resume" && (
              <div className="resume-container">
                <img
                  src="/Vrishank_Bangari_Resume-1.png"
                  alt="Vrishank Bangari Resume"
                  style={{
                    width: "100%",
                    maxHeight: "none",
                    objectFit: "contain",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    display: "block",
                  }}
                />
                <a
                  href="/Vrishank_Bangari_Resume.pdf"
                  download
                  className="download-button"
                  style={{
                    position: "fixed",
                    bottom: "40px",
                    right: "40px",
                    padding: "12px 24px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "4px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    transition: "all 0.3s ease",
                    zIndex: 101,
                    backdropFilter: "blur(5px)",
                  }}
                >
                  Download PDF
                </a>
              </div>
            )}
            {activePopup === "projects" && (
              <div className="popup-text">
                <h3>My Projects</h3>
                <h2>Meddy</h2>
                <p>
                  Meddy AI is a medical assistant application designed to bridge
                  the communication gap between patients and doctors. The
                  primary target audience is elderly patients with limited
                  English. The app provides a simple, single-screen interface
                  where users interact with an AI assistant in any language
                  through voice or text input. Additionally, the app can
                  transcribe doctor appointments and provide live translation,
                  analyze healthcare documents, and connect to fitness apps to
                  provide a more detailed analysis.
                </p>
                <h2>Gentrif.ai</h2>
                <p>
                  Gentrif.ai is a app that allows people to see if their zip
                  codes are susceptible to gentrification to gentrification. The
                  app uses a logistic regression machine learning model to
                  analyze the data and provide a score for each zip code, based
                  on factors like changes in home prices, average income, amount
                  of new businesses in the area, with higher score to "luxury"
                  businesses, and more. Won 1st place at VTHacks 2023.
                </p>
                <h2>Systems Projects</h2>
                <p>
                  I've worked on a few systems projects, including a terminal
                  shell, a dynamic memory allocator, a personal server, and a
                  threadpool.
                </p>
                <h2>Graphics</h2>
                <p>
                  Was in the process of creating a simple graphics engine in C++
                  and OpenGL, currently on a hiatus due to no longer owning a
                  windows machine. Starting from scratch with Metal and SwiftUI.
                </p>
              </div>
            )}
            {activePopup === "contact" && (
              <div className="popup-text">
                <h3>Contact</h3>
                <p>Email: vrish.2013@gmail.com</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="color-controls">
        <div className="sliders">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="slider-container">
              <label>Color {num}</label>
              <input
                type="color"
                value={colors[`color${num}`]}
                onChange={(e) => handleColorChange(num, e.target.value)}
                className="color-slider"
              />
            </div>
          ))}
        </div>
        <button onClick={resetColors} className="reset-button">
          Reset Colors
        </button>
      </div>
    </section>
  );
}

export default App;
