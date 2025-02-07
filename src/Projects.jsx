// src/Projects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      {/* Back Button (Top Left) */}
      <div style={{ top: "1rem", left: "1rem", zIndex: 1000 }}>
        <wired-button
          style={{ backgroundColor: "#FFB7CE" }}
          elevation="2"
          onClick={() => navigate(-1)}
        >
          ← Back
        </wired-button>
      </div>
      <h1>My Projects</h1>

      <h2>Chess Engine - Current</h2>
      <wired-card fill="white">
        <p style={{ zIndex: 3, color: "black" }}>
          Building a chess engine in C++ with the focus of learning core
          decision making and game theory algorithms. Using bitboards for board
          representation (64 board squares = 64 bits). Since sliding peices can
          have 2^b (b is board squares) possible collisions in its path, I'm
          using "magic" bitboards to speed up the search. Essentially hashing
          all the possible collisions for a square.
          <br></br>
          <br></br>
          more updates to come as more progress happens!
        </p>
      </wired-card>

      <h2>Meddy</h2>
      <wired-card fill="white">
        <p style={{ zIndex: 3, color: "black" }}>
          Meddy AI is a medical assistant application designed to bridge the
          communication gap between patients and doctors. The primary target
          audience is elderly patients with limited English. The app provides a
          simple, single-screen interface where users interact with an AI
          assistant in any language through voice or text input. Additionally,
          the app can transcribe doctor appointments and provide live
          translation, analyze healthcare documents, and connect to fitness apps
          to provide a more detailed analysis.
          <br></br>
          <br></br>
          Built front end in React and Flutter for mobile app. Node.JS backend
          uses Gemini for core chat functionalities along with Whisper 3 and
          ElevenLabs for advanced voice mode. Hosted on a local PostgreSQL
          instance for now, plans to move to Supabase.
        </p>
      </wired-card>

      <h2>Gentrif.ai</h2>
      <wired-card fill="white">
        <p style={{ zIndex: 3, color: "black" }}>
          Gentrif.ai is a app that allows people to see if their zip codes are
          susceptible to gentrification to gentrification. The app uses a
          logistic regression machine learning model to analyze the data and
          provide a score for each zip code, based on factors like changes in
          home prices, average income, amount of new businesses in the area,
          with higher score to "luxury" businesses, and more.
          <br></br>
          <br></br>
          Won 1st place at VTHacks 2023.
        </p>
      </wired-card>

      <h2>Systems Projects</h2>
      <wired-card fill="white">
        <p style={{ zIndex: 3, color: "black" }}>
          I've worked on a few systems projects in C/C++, including a terminal
          shell, a dynamic memory allocator, a personal server, and a
          threadpool.
        </p>
      </wired-card>

      <h2>Graphics - Hiatus</h2>
      <wired-card fill="white">
        <p style={{ zIndex: 3, color: "black" }}>
          Was in the process of creating a simple graphics engine in C++ and
          OpenGL, currently on a hiatus due to no longer owning a windows
          machine.
        </p>
      </wired-card>
    </div>
  );
}

export default Projects;
