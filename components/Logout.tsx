import React from "react";
import { Button } from "./Button";
import { signOutAuth } from "@/actions";

const Logout = () => {
  return (
    <form className=" flex flex-col gap-2 w-full" action={signOutAuth}>
      <Button type="submit" className=" bg-blue-400 ">
        Log out
      </Button>
    </form>
  );
};

export default Logout;
