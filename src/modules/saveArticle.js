import axios from 'axios'

const apiUrl = 'http://localhost:3000/api/v1';

const saveArticle = async (author, title, body) => {
  const path = apiUrl + '/saved_articles';

  let response = await axios.post(path, { data:
    {
      author: author,
      title: title,
      body: body,
      message: 'Post successfully created.'
    }
  })
  return response.data.message;
};

export { saveArticle }