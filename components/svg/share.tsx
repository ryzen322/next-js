"use client";
import { Button } from "../Button";
import Svg from "./svg";

const Share = () => {
  return (
    <Button className=" flex items-center gap-1">
      <Svg
        className=""
        icon="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      />
      <p className=" text-xs font-light text-white/55">1</p>
    </Button>
  );
};

export default Share;
