import { auth } from "@/auth";
import { Button } from "./Button";
import { createPost } from "@/actions";
import Logout from "./Logout";

const Form = async () => {
  const users = await auth();
  const userEmail = users?.user?.email as string;

  console.log(userEmail);

  return (
    <div className=" flex flex-col gap-1">
      <form
        className=" flex flex-col gap-2 w-full"
        action={createPost.bind(null, userEmail)}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="  text-gray-700 rounded-sm outline-none border border-black px-1"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="  text-gray-700 rounded-sm outline-none border border-black px-1"
        />

        <input
          type="text"
          name="content"
          placeholder="Content"
          className="  text-gray-700 rounded-sm outline-none border border-black px-1"
        />
        <Button type="submit" className=" bg-blue-400 ">
          Submit
        </Button>
      </form>
      <Logout />
    </div>
  );
};

export default Form;
