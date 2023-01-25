import { FC, InputHTMLAttributes } from "react";

import s from "./Input.module.scss";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type,
  name,
  ...props
}) => {
  return <input className={s.input} type={type} id={name} {...props} />;
};

export default Input;
