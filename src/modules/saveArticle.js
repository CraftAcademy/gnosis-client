import axios from "axios";

const saveArticle = async (title, body, pdf) => {
  try {
    let response = await axios.post("/articles", {
        title: title,
        body: body,
        pdf: pdf
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export { saveArticle };