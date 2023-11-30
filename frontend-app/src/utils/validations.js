export const validations = {
  userId: {
    required: {
      value: true,
      message: "*Please provide a user id",
    },
    pattern: {
      value: "^(?=.*[A-Za-z])(?=.*[0-9])[0-9a-zA-Z]{4,16}$",
      message:
        "*User id should be between 4-16 alphanumeric characters and shouldn't include any special characters",
    },
  },
  password: {
    required: {
      value: true,
      message: "*Please enter a valid password",
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
      message: "*Please confirm password",
    },
    custom: {
      isMatch: (value, passw) => value === passw,
      message: "*Passwords do not match",
    },
  },
  firstName: {
    required: {
      value: true,
      message: "*First name is required",
    },
    pattern: {
      value: "^[A-Za-z]{2,20}$",
      message:
        "*Your first name must have more than one character and begin with an alphabet",
    },
  },
  initial: {
    required: {
      value: true,
      message: "*Middle initial is required",
    },
    pattern: {
      value: "^^[A-Za-z]{1}$",
      message:
        "*Your initial must be an alphabet and contain only one character",
    },
  },
  lastName: {
    required: {
      value: true,
      message: "*Last name is required",
    },
    pattern: {
      value: "^[A-Za-z]{2,20}$",
      message:
        "*Your last name must have more than one character and begin with an alphabet",
    },
  },
  maidenName: {
    required: {
      value: true,
      message: "*Maiden name is required",
    },
    pattern: {
      value: "^[A-Za-z]{2,20}$",
      message:
        "*Your maiden name must have more than one character and begin with an alphabet",
    },
  },
  dob: {
    required: {
      value: true,
      message: "*Please provide your date of birth",
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
  zipCode: {
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
    // pattern: {
    //   value: // LOOK UP THE CORRECT REGEX FOR EMAIL VALIDATION
    //     "^(([^<>()[]\\.,;:s@']+(.[^<>()[]\\.,;:s@']+)*)|('.+'))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$",
    //   message: "*Provide valid email address",
    // },
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
