import React from "react";

import s from "./Select.module.scss";

type SelectProps = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: any) => void;
  className?: string
};

const Select: React.FC<SelectProps> = ({ options, value, onChange, className }) => {
  return (
    <div className={`${s.select} ${className}` }>
      <select defaultValue={value} onChange={onChange}>
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <span className={s.focus}></span>
    </div>
  );
};

export default Select;
