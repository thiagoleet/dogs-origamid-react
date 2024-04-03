import React from "react";

const types = {
  email: {
    regex: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    message: "Preencha um e-mail válido",
  },
  // password: {
  //   regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/,
  //   message:
  //     "A senha precisa ter 1 caracter maiúsculo, 1 minúsculo e 1 digito. Com no mínimo 6 caracteres.",
  // },
  number: {
    regex: /^\d+$/,
    message: "Utilize números apenas.",
  },
  zipcode: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Utilize um CEP válido.",
  },
};

const useForm = ({ type = "text", initialValue = "", validate = false }) => {
  const [value, setValue] = React.useState(initialValue);
  const [error, setError] = React.useState(null);

  function validateField(value) {
    if (!validate) {
      return true;
    }
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) {
      validateField(target.value);
    }
    setValue(target.value);
  }

  function onBlur() {
    validateField(value);
  }

  return {
    error,
    onBlur,
    onChange,
    setValue,
    type,
    value,
  };
};

export default useForm;
