import { db } from "@/server/db";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Likes from "./svg/likes";
import Comment from "./svg/comment";
import Retweet from "./svg/retweet";
import Share from "./svg/share";
import { auth } from "@/auth";

export const ForYou = async () => {
  const feed = await db.query.tweets.findMany();
  const users = await auth();
  console.log(users);

  return (
    <ul className=" w-full flex flex-col gap-2">
      {feed.map((item) => (
        <li key={item.id} className=" flex gap-3 p-4 border-b">
          <div className=" w-8 h-8 rounded-full overflow-hidden shrink-0">
            <Avatar className=" w-8 h-8 rounded-full">
              <AvatarImage src={item.image ? item.image : undefined} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className=" flex flex-col gap-1">
            {/* Name */}
            <span className=" flex items-center gap-2 ">
              <h1 className=" text-sm font-medium">{item.name}</h1>
              <p className=" text-sm text-stone-400">1d</p>
            </span>
            {/* Name */}
            {/* title */}
            <p className=" text-sm  font-light">{item.title}</p>
            {/* title */}
            <div className=" flex flex-col gap-2">
              <p className=" text-xs">{item.content}</p>
              <div className=" flex items-center gap-5">
                <Likes />
                <Comment tweetId={item.id} />
                <Retweet />
                <Share />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
