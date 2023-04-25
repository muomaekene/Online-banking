import { useState } from "react";

export const useForm = (options) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    setData({ ...data, [key]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validations = options?.validations;

    if (validations) {
      let valid = true;
      const newErrors = {};

      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];

        // REQUIRED VALIDATION RULE
        const required = validation?.required;
        if (required.value && !value) {
          valid = false;
          newErrors[key] = required.message;
        }

        // PATTERN VALIDATION RULE
        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        // CUSTOM VALIDATION RULE
        const custom = validation?.custom;
        if (custom?.isMatch && !custom.isMatch(value, data.password)) {
          valid = false;
          newErrors[key] = custom.message;
        }

        if (!valid) {
          setErrors(newErrors);
          return;
        }
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
  };
};
