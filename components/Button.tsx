"use client";

import { useFormStatus } from "react-dom";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonType> = ({ children, ...props }) => {
  const status = useFormStatus();

  return <button {...props}>{status.pending ? "saving" : children}</button>;
};
