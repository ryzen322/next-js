import Logout from "@/components/Logout";
import TweetComponents from "@/components/TweetComponents";
import Tweets from "@/components/Tweets";
import React from "react";

const TweetPage = () => {
  return (
    <div className=" h-dvh w-full flex flex-col items-center justify-center ">
      <div className=" flex flex-col w-1/2 items-center justify-center gap-1">
        <TweetComponents />
        <Logout />
        <Tweets />
      </div>
    </div>
  );
};

export default TweetPage;
