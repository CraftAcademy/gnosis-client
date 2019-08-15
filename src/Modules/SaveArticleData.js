import axios from 'axios'


const apiUrl = 'http://localhost:3000/api/v1';

const saveData = async (author, title, body) => {
  const path = apiUrl + '/saved_articles';
  return new Promise((resolve, reject) => {
    axios.post(path, {
      saved_articles: { data: 
        { 
          author: author, 
          title: title, 
          body: body 
        }
      }
    })
    .then(response => {
      resolve(response.data);
    });  
  });
};

export { saveData }