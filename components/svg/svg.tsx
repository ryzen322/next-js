import React from "react";

const Svg = ({
  icon,
  className,
  fill,
  stroke,
}: {
  icon: string;
  className: string;
  fill?: string;
  stroke?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={` ${fill ? fill : "none"}`}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={` ${stroke ? stroke : "currentColor"}`}
      className={` size-4 ${className}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
};

export default Svg;
