import React from "react";
import Input from "./Input";
import Label from "./Label";
import Error from "../helpers/Error";
import FormControl from "./FormControl";

const InputField = ({ label, setValue, error, validate, ...props }) => {
  return (
    <FormControl>
      <Label htmlFor={props.name}>{label}</Label>
      <Input {...props} />
      {error && <Error>{error}</Error>}
    </FormControl>
  );
};

export default InputField;
