import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number; // Total duration per word
  fadeDuration?: number; // Duration of fade in/out
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  speed = 3000,
  fadeDuration = 500,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setOpacity(0);
    }, speed - fadeDuration * 2); // Start fade out before switching

    const switchWordTimeout = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
      setOpacity(1);
    }, speed - fadeDuration); // Switch word after fade out

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(switchWordTimeout);
    };
  }, [wordIndex, words.length, speed, fadeDuration]);

  return (
    <div className="typewriter font-semibold text-white overflow-hidden">
      <span
        key={wordIndex}
        className="transition-opacity duration-500 font-[semi-bold]"
        style={{ opacity }}
      >
        {words[wordIndex]}
      </span>
    </div>
  );
};

export default Typewriter;
