import React, { FC } from "react";
import styles from "./Select.module.scss";

interface SelectProps {
  options: string[];
  selectedOption: string;
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({ options, selectedOption, onChange, }) => {

  return (
    <div className={styles.container}>
      {options.map((option) => (
        <label key={option} className={styles.label}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => onChange(option)}
            className={styles.input}
          />
          <div className={styles.button}>{option}</div>
        </label>
      ))}
    </div>
  );
};

export default Select;
