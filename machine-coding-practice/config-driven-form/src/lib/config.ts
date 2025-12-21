import * as yup from "yup";

export default [
  {
    component: "TEXT_FIELD",
    name: "name",
    label: "Your Name",
    type: "text",
    isRequired: true,
    validate: yup.string().required("Please enter your name"),
  },
  {
    component: "TEXT_FIELD",
    name: "email",
    label: "Your Email",
    type: "email",
    isRequired: true,
    validate: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter yur name"),
  },
  {
    component: "TEXT_FIELD",
    name: "password",
    label: "Your Password",
    type: "password",
    isRequired: true,
    validate: yup
      .string()
      .required("Please enter your name")
      .min(8, "Password must of atleast 8 characters"),
  },
  {
    component: "TEXT_FIELD",
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    isRequired: true,
    validate: yup
      .string()
      .oneOf([yup.ref("password")], "Password must match")
      .required("Please enter your name"),
  },
  {
    component: "RADIO_BUTTON",
    name: "gender",
    label: "Gender",
    type: "radio",
    isRequired: true,
    options: ["Male", "Female", "Other"],
    validate: yup.string().required("Please select your gender"),
  },
  {
    component: "DATE_PICKER",
    name: "birthdate",
    label: "Date of Birth",
    validate: yup.date(),
  },
  {
    component: "SLIDER",
    name: "rating",
    label: "Rating",
    validate: yup
      .number()
      .min(1, "Rating must be at least 1")
      .max(5, "Rating must be no more than 5"),
  },
  {
    component: "CHECKBOX",
    name: "acceptTerms",
    label: "I accepts the terms and conditions",
    isRequired: true,
    validate: yup
      .bool()
      .oneOf([true], "You must accept the terms and conditions")
      .required("Please accept the terms"),
  },
];
