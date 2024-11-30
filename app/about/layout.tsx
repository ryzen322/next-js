import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className=" h-24 bg-stone-300 w-full ">
        <h1 className=" text-black text-2xl"></h1>
      </div>
      {children}
    </div>
  );
};

export default AboutLayout;
