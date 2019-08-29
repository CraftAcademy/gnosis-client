import axios from "axios";

const getLocalArticles = async (city) => {
  try {
    let response = await axios.get("/articles",
      {
        city
      }
    );
    console.log(response);
    debugger;
  } catch (error) {
    return error.response;
  }
};

export default getLocalArticles;