import { generateAuthActions } from "redux-token-auth";

let development = "http://localhost:3000/api/v0/auth";
let production = "https://gnosis-api.herokuapp.com/api/v0/auth";

const config = {
  authUrl: development,
  userAttributes: {
    uid: "uid",
    role: "role",
    subscriber: "subscriber"
  },
  userRegistrationAttributes: {
    password_confirmation: "password_confirmation",
    role: "role",
    name: "name",
    subscriber: "subscriber"
  }
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
} = generateAuthActions(config);

export { registerUser, signInUser, signOutUser, verifyCredentials };
