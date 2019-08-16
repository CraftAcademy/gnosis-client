import { generateAuthActions } from "redux-token-auth";

const config = {
  authUrl: "http://localhost:3000/api/v0/auth",
  userAttributes: {
    uid: "uid",
    role: "role"
  }
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
} = generateAuthActions(config);

export { registerUser, signInUser, signOutUser, verifyCredentials };
