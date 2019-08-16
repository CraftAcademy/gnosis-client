import axios from "axios";

const apiUrl = "http://localhost:3000/api/v0";

const saveArticle = async (author, title, body) => {
  const path = apiUrl + "/articles";

  let response = await axios.post(path, {
    data: {
      author: author,
      title: title,
      body: body
    }
  });
  return response;
};

export { saveArticle };