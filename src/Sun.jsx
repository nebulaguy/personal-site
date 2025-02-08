import React, { useRef, useEffect, useState } from "react";
import rough from "roughjs";

function Sun() {
  const canvasRef = useRef(null);
  const [roughness, setRoughness] = useState(2);

  // Oscillate roughness between 2 and 3 every 2 seconds
  useEffect(() => {
    let current = 90;
    const intervalId = setInterval(() => {
      current = current === 2 ? 3 : 2;
      setRoughness(current);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // Redraw the circle whenever roughness changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create a rough canvas
    const rc = rough.canvas(canvas);

    // Draw a circle (x=100, y=100, diameter=80)
    rc.circle(100, 100, 160, {
      fill: "yellow",
      stroke: "black",
      fillStyle: "hatchure",
      fillWeight: 2.5,
      roughness: roughness,
    });
  }, [roughness]);

  // Absolute position in top-left corner
  return (
    <>
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        style={{ position: "absolute", top: 50, left: 50, zIndex: 2 }}
      />

      <img
        src="/sunglasses.svg"
        alt="Smiley"
        style={{
          position: "absolute",
          top: "70px",
          left: "75px",
          width: "160px",
          height: "160px",
          zIndex: 2, // above the canvas
        }}
      />
    </>
  );
}

export default Sun;
