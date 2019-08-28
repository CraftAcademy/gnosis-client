import axios from "axios";

const saveArticle = async (title, body) => {
  try {
    let response = await axios.post("/articles", {
        title: title,
        body: body
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export { saveArticle };
  