// Typewriter.jsx
import React, { useState, useEffect } from "react";

function Typewriter({ text, speed = 120, onComplete }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return <>{displayedText}</>;
}

export default React.memo(Typewriter);
