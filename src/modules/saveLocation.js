import axios from "axios";

const saveLocation = async (location) => {
  try {

    let response = await axios.post("/articles", {
      
      data: {
          location: location
      }
    });

  
    return response;
    
  } catch (error) {
    return error.response;
  }
};

export default saveLocation;