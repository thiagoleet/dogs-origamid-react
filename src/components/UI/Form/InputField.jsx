import React from "react";
import Input from "./Input";
import Label from "./Label";

import styles from "./InputField.module.css";

const InputField = ({ label, type, name, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <Label className={styles.label} htmlFor={name}>
        {label}
      </Label>
      <Input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        onChange={onChange}
      />
      <p className={styles.erro}>Error</p>
    </div>
  );
};

export default InputField;
