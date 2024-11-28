import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  console.log(id);
  return (
    <div className=" text-black">
      <h1>{id}asdasd</h1>
    </div>
  );
};

export default page;
