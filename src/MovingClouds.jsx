// MovingClouds.jsx
import React, { useState, useEffect, useRef } from "react";
import Cloud from "./Cloud";

function MovingClouds() {
  const [clouds, setClouds] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Set a 1-second timeout for the first cloud
    const firstTimeout = setTimeout(() => {
      setClouds((prev) => [...prev, generateCloud()]);

      // After the first cloud, spawn more every 10 seconds
      intervalRef.current = setInterval(() => {
        setClouds((prev) => [...prev, generateCloud()]);
      }, 10000);
    }, 1);

    // Cleanup: clear both the timeout and interval
    return () => {
      clearTimeout(firstTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Continuously update cloud positions
  useEffect(() => {
    let animationFrameId;

    const updatePositions = () => {
      setClouds((prevClouds) =>
        prevClouds
          .map((cloud) => {
            const { x, direction, speed } = cloud;
            // move cloud left or right
            const newX = direction === "left" ? x - speed : x + speed;
            return { ...cloud, x: newX };
          })
          // Filter out clouds that have gone off-screen
          .filter((cloud) => {
            // A cloud's canvas width is 200, so give some buffer
            return cloud.x > -300 && cloud.x < window.innerWidth + 100;
          })
      );

      animationFrameId = requestAnimationFrame(updatePositions);
    };

    updatePositions(); // start the loop

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {clouds.map((cloud) => (
        <Cloud key={cloud.id} x={cloud.x} y={cloud.y} />
      ))}
    </>
  );
}

// Helper function to generate a new cloud object
function generateCloud() {
  // Random direction: 50% chance left -> right or right -> left
  const direction = Math.random() < 0.5 ? "right" : "left";

  // If the direction is right, start near left edge; else start near right edge
  const startX = direction === "right" ? -250 : window.innerWidth + 50;

  // Y range: from 5% to 95% of the viewport height
  const viewportHeight = window.innerHeight;
  const minY = 0.05 * viewportHeight;
  const maxY = 0.95 * viewportHeight;
  const randomY = Math.random() * (maxY - minY) + minY;

  // Random speed for variety (e.g., 0.3 to 0.8 px/frame)
  const speed = 0.3 + Math.random() * 0.5;

  return {
    id: Date.now() + Math.random(),
    x: startX,
    y: randomY,
    direction,
    speed,
  };
}

export default MovingClouds;
