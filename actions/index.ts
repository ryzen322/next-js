"use server";

import { signIn, signOut } from "@/auth";

export const loginGoogle = async () => {
  await signIn();
};
export const signOutAuth = async () => {
  await signOut();
};
