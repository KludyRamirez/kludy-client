import React from "react";

interface BubblesProps {
  colors: string[]; // e.g., ['red', 'blue', 'yellow']
}

const Bubbles: React.FC<BubblesProps> = ({ colors }) => {
  const bubbles = [
    [20, 2, 8.8], [25, 2.5, 7.5], [16, 2.8, 9.2],
    [18, 2, 8.8], [22, 2.5, 7.5], [26, 2.8, 9.2],
    [5, 4.4, 8.8], [5, 4.1, 7.5], [8, 3.8, 9.2],
    [3, 4.4, 8.8], [7, 4.1, 7.5], [10, 4.3, 9.2],
    [1.2, 5.4, 8.8], [5.2, 5.1, 7.5], [10.2, 5.3, 9.2],
    [3.2, 5.4, 8.8], [14.2, 5.1, 7.5], [17.2, 4.8, 9.2],
  ];

  return (
    <svg viewBox="0 0 24 24" className="bubble-effect">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 13 -9"
            result="goo"
          />
        </filter>
      </defs>

      <g className="gooeff" filter="url(#goo)">
        {bubbles.map(([cx, cy, r], index) => {
          const color = colors[index % colors.length];
          return (
            <circle
              key={index}
              className={`drop drop${(index % 6) + 1}`}
              cx={cx}
              cy={cy}
              r={r}
              fill={color}
              stroke={color}
            />
          );
        })}
        <use id="wave1" className="wave" href="#wave" x="0" y="1" />
      </g>
    </svg>
  );
};

export default Bubbles;
