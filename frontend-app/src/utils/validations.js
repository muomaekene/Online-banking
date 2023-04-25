export const validations = {
  accountType: {
    required: {
      value: true,
      message: "*Please choose an account",
    },
  },
  userId: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^(?=.*[A-Za-z])(?=.*[0-9])[0-9a-zA-Z]{4,16}$",
      message:
        "*User ID should be between 4-16 characters and shouldn't include any special characters",
    },
  },
  password: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$",
      message:
        "*Password must be between 8-20 characters and include at least 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character",
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: "*This field is required",
    },
    custom: {
      isMatch: (value, passw) => value === passw,
      message: "*Passwords do not match",
    },
  },
  firstName: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^[A-Za-z]{2,20}$",
      message: "*Enter correct name",
    },
  },
  initial: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^^[A-Za-z]{1}$",
      message: "*Enter a middle initial",
    },
  },
  lastName: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^[A-Za-z]{2,20}$",
      message: "*Enter correct name",
    },
  },
  maidenName: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^[A-Za-z]{2,20}$",
      message: "*Enter correct name",
    },
  },
  dob: {
    required: {
      value: true,
      message: "*This field is required",
    },
  },
  ssn: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^\\d{3}-\\d{2}-\\d{4}$",
      message: "*Provide valid SSN",
    },
  },
  ein: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^\\d{3}-\\d{2}-\\d{4}$",
      message: "*Provide valid EIN",
    },
  },
  street: {
    required: {
      value: true,
      message: "*This field is required",
    },
  },
  state: {
    required: {
      value: true,
      message: "*This field is required",
    },
  },
  city: {
    required: {
      value: true,
      message: "*This field is required",
    },
  },
  zipcode: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^[0-9]{5}$",
      message: "*Provide valid zip code",
    },
  },
  email: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value:
        "^(([^<>()[]\\.,;:s@']+(.[^<>()[]\\.,;:s@']+)*)|('.+'))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$",
      message: "*Provide valid email address",
    },
  },
  phone1: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
      message: "*Enter valid phone number",
    },
  },
  phone2: {
    required: {
      value: true,
      message: "*This field is required",
    },
    pattern: {
      value: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
      message: "*Enter valid phone number",
    },
  },
};
