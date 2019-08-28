import axios from "axios";

const getLocalArticles = async (city) => {
  try {
    let response = await axios.get("/articles" +  {
      data: {
        city: city
      }
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export default getLocalArticles;