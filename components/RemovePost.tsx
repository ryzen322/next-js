"use client";

import React from "react";
import { Button } from "./Button";
import { deletePostAction } from "@/actions";

const RemovePost = ({ id }: { id: number }) => {
  return <Button onClick={() => deletePostAction(id)}>X</Button>;
};

export default RemovePost;
