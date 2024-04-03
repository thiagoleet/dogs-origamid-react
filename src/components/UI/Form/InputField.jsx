import React from "react";
import Input from "./Input";
import Label from "./Label";
import Error from "../Error";

import styles from "./InputField.module.css";

const InputField = ({ label, setValue, error, validate, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <Label className={styles.label} htmlFor={props.name}>
        {label}
      </Label>
      <Input className={styles.input} {...props} />
      {error && <Error className={styles.erro}>{error}</Error>}
    </div>
  );
};

export default InputField;
