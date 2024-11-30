"use client";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = (props: ButtonType) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
