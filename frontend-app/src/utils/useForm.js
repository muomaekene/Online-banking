import { useState } from "react";

export const useForm = (options) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    setData({ ...data, [key]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validations = options?.validations;

    if (validations) {
      let valid = true;
      const newError = {};

      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];

        const required = validation?.required;
        const pattern = validation?.pattern;
        const custom = validation?.custom;

        if (required.value && !value) {
          valid = false;
          newError[key] = required.message;
        } else if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newError[key] = pattern.message;
        } else if (custom?.isMatch && !custom.isMatch(value, data.password)) {
          valid = false;
          newError[key] = custom.message;
        }

        if (!valid) {
          setErrors(newError);
          return;
        }
      }
    }

    setErrors({});

    if (Object.keys(errors).length === 0 && Object.keys(data).length !== 0) {
      await options?.onSubmit();
    }
  };

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
  };
};
