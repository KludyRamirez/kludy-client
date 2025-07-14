import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  pause?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  speed = 200,
  pause = 1500,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);

  useEffect(() => {
    setShowWord(true); // start typing

    const pauseTimeout = setTimeout(() => {
      setShowWord(false); // start deleting
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
      }, speed * words[wordIndex].length + 500); // allow smooth deletion time
    }, pause + speed * words[wordIndex].length);

    return () => clearTimeout(pauseTimeout);
  }, [wordIndex, words, speed, pause]);

  return (
    <div className="typewriter font-[semi-bold]">
      <span className={`text-wrapper text-white ${showWord ? "show" : ""}`}>
        {words[wordIndex]}
      </span>
    </div>
  );
};

export default Typewriter;
