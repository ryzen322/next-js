import Logout from "./Logout";

import PostForm from "./PostForm";

const Form = async () => {
  return (
    <div className=" flex flex-col gap-1">
      <PostForm />
      <Logout />
    </div>
  );
};

export default Form;
