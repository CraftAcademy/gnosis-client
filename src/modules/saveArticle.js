import axios from "axios";

const saveArticle = async (city, author, title, body) => {
  try {
    let response = await axios.post("/articles", {
      data: {
        city: city,
        author: author,
        title: title,
        body: body
      }
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export { saveArticle };
  