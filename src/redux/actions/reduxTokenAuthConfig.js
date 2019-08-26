import { generateAuthActions } from "redux-token-auth";
let baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;
let authUrl = baseUrl + "/auth";
const config = {
  authUrl: authUrl,
  userAttributes: {
    uid: "uid",
    role: "role",
    subscriber: "subscriber"
  },
  userRegistrationAttributes: {
    password_confirmation: "password_confirmation",
    role: "role",
    name: "name",
    subscriber: "subscriber",
    registration_key: "registration_key"
  }
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
} = generateAuthActions(config);

export { registerUser, signInUser, signOutUser, verifyCredentials };
