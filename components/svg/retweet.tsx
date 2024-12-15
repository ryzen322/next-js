"use client";

import Svg from "./svg";

const Retweet = () => {
  return (
    <div className=" flex items-center gap-1">
      <Svg
        className=""
        icon="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
      <p className=" text-xs font-light text-white/55">1</p>
    </div>
  );
};

export default Retweet;
