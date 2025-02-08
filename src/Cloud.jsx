import React, { useRef, useEffect, useState } from "react";
import rough from "roughjs";

function Cloud({ x, y }) {
  const canvasRef = useRef(null);

  const [roughness, setRoughness] = useState(2);
  // Oscillate roughness between 2 and 3 every 2 seconds
  useEffect(() => {
    let current = 2;
    const intervalId = setInterval(() => {
      current = current === 2 ? 3 : 2;
      setRoughness(current);
    }, 1300);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const rc = rough.canvas(canvas);
    rc.path(
      "M162 84H22C6 84 6 40 42 44 46 8 98-4 118 24c24-16 48 0 40 24 24-8 40 36 4 36",
      {
        fill: "white",
        roughness: roughness,
        fillStyle: "hatchure",
        fillWeight: 1.5,
      }
    );
  }, [roughness]);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      style={{ position: "absolute", top: y, left: x, zIndex: -99 }}
    />
  );
}

export default Cloud;
