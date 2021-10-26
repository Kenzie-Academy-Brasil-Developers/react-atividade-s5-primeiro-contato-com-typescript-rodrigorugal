import React from "react";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input placeholder={placeholder} {...rest}></input>
    </div>
  );
};
export default Input;
