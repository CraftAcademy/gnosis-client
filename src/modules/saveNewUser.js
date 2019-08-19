import axios from "axios";

const apiUrl = "http://localhost:3000/api/v0";

const saveNewUser = async (name, email, password, passwordConf, accountType) => {
  const path = apiUrl + "/registration";
  try {
    let response = await axios.post(path, {
      data: {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConf,
        accountType: accountType
      }
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export { saveNewUser };
