export const LOGIN_CONTROLS = [
  {
    id: 1,
    type: "text",
    name: "userId",
    placeholder: "User ID",
  },
  {
    id: 2,
    type: "password",
    name: "password",
    placeholder: "Password",
  },
];

export const SIGNUP_CONTROLS = [
  {
    title: "Create login",
    attributes: [
      {
        id: 3,
        type: "text",
        name: "userId",
        placeholder: "User ID",
      },
      {
        id: 4,
        type: "password",
        name: "password",
        placeholder: "Password",
      },
      {
        id: 5,
        type: "password",
        name: "confirmPassword",
        placeholder: "Confirm password",
      },
    ],
  },
  {
    title: "Personal information",
    attributes: [
      {
        id: 6,
        type: "text",
        name: "firstName",
        placeholder: "First name",
      },
      {
        id: 7,
        type: "text",
        name: "initial",
        placeholder: "Middle initial",
      },
      {
        id: 8,
        type: "text",
        name: "lastName",
        placeholder: "Last name",
      },
      {
        id: 9,
        type: "text",
        name: "maidenName",
        placeholder: "Maiden name",
      },
      {
        id: 10,
        type: "date",
        name: "dob",
        placeholder: "Date of birth",
      },
      {
        id: 11,
        type: "text",
        name: "ssn",
        placeholder: "SSN",
      },
      {
        id: 12,
        type: "text",
        name: "ein",
        placeholder: "EIN",
      },
    ],
  },
  {
    title: "Contact information & residency",
    attributes: [
      {
        id: 13,
        type: "text",
        name: "street",
        placeholder: "Street address",
      },
      {
        id: 14,
        type: "text",
        name: "state",
        placeholder: "State",
      },
      {
        id: 15,
        type: "text",
        name: "city",
        placeholder: "City",
      },
      {
        id: 16,
        type: "text",
        name: "zipCode",
        placeholder: "Zip code",
      },
      {
        id: 17,
        type: "email",
        name: "email",
        placeholder: "Email address",
      },
      {
        id: 18,
        type: "text",
        name: "phone1",
        placeholder: "Primary phone no.",
      },
      {
        id: 19,
        type: "text",
        name: "phone2",
        placeholder: "Secondary phone",
      },
    ],
  },
  {
    title: "Upload Valid ID",
    attributes: [
      {
        id: 20,
        type: "file",
        name: "file",
        placeholder: "Valid ID",
      },
    ],
  },
];
