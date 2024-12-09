import { auth } from "@/auth";

import Logout from "./Logout";

import PostForm from "./PostForm";

const Form = async () => {
  const users = await auth();
  const userEmail = users?.user?.email as string;
  const name = users?.user?.name as string;
  const id = users?.user?.id as string;

  return (
    <div className=" flex flex-col gap-1">
      <PostForm userEmail={userEmail} name={name} id={id} />
      <Logout />
    </div>
  );
};

export default Form;
