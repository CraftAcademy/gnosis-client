import axios from "axios";

const saveArticle = async (author, title, body) => {
  try {
    let response = await axios.post("/articles", {
      data: {
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