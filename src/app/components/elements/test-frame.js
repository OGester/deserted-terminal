import React from "react";

export default function TerminalSvg({
  fill = "currentColor",
  stroke = "none",
  strokeWidth = 0,
  className = "",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 654.89 303.04"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          {/* <!-- Dilate the shape (grow it) before blurring --> */}
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="2"
            result="dilated"
          />

          {/*  <!-- Then blur that expanded shape --> */}
          <feGaussianBlur in="dilated" stdDeviation="6" result="blurred" />

          {/* <!-- Color it --> */}
          <feFlood flood-color="cyan" result="glowColor" />
          <feComposite
            in="glowColor"
            in2="blurred"
            operator="in"
            result="glowBlur"
          />

          {/* <!-- Merge the glow behind the original shape --> */}
          <feMerge>
            <feMergeNode in="glowBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/*   <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <feFlood floodColor="cyan" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glowColor" />

          <feMerge>
            <feMergeNode in="glowColor" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter> */}
      </defs>

      {/* Glow outline only */}
      <path
        d="M638.89,123.16l-64.93-107.16-9.7-16H0v195.12l16,10.92,118.73,81,23.46,16h496.7v-153.47l-16-26.41ZM638.89,287.04H163.12L16,186.67V59.49h284.64l33.67-43.49h220.94l83.64,138.04v133Z"
        fill="url(#frameGradient)"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M638.89,123.16l-64.93-107.16-9.7-16H0v195.12l16,10.92,118.73,81,23.46,16h496.7v-153.47l-16-26.41ZM638.89,287.04H163.12L16,186.67V59.49h284.64l33.67-43.49h220.94l83.64,138.04v133Z"
        fill="none"
        stroke="cyan"
        strokeWidth={2}
        filter="url(#glow)"
      />

      {/* Actual filled shape */}

      {/*   <path
        d="M638.89,123.16l-64.93-107.16-9.7-16H0v195.12l16,10.92,118.73,81,23.46,16h496.7v-153.47l-16-26.41ZM638.89,287.04H163.12L16,186.67V59.49h284.64l33.67-43.49h220.94l83.64,138.04v133Z"
        //fill={fill}
        fill="url(#frameGradient)"
        filter="url(#glow)"
        stroke={stroke}
        strokeWidth={strokeWidth}
      /> */}
    </svg>
  );
}
