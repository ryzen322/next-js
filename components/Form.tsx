import { Button } from "./Button";

const Form = () => {
  return (
    <form className=" flex flex-col gap-2 w-full">
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
        type="number"
        name="number"
        placeholder="Number"
        className="  text-gray-700 rounded-sm outline-none border border-black px-1"
      />
      <Button type="submit" className=" bg-blue-400 ">
        Submit
      </Button>
    </form>
  );
};

export default Form;
