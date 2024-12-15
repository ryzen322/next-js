import React from "react";
import { Button } from "./Button";
import { signOutAuth } from "@/actions";
import Link from "next/link";

const Logout = () => {
  return (
    <form className=" flex flex-col gap-2 w-full" action={signOutAuth}>
      <Button type="submit" className=" bg-blue-400 ">
        Log out
      </Button>
      {/* <Link
        href={"tweet"}
        className=" w-full  bg-blue-400 flex items-center justify-center"
      >
        To Tweet
      </Link> */}
    </form>
  );
};

export default Logout;
