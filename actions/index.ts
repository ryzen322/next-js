"use server";

import { signIn } from "@/auth";

export const loginGoogle = async () => {
  await signIn();
};
