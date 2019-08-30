import axios from "axios";

const getCity = async (lat, long) => {
  var apiKey = process.env.REACT_APP_OPEN_CAGE_API;
  console.log(apiKey)
  var latitude = lat;
  var longitude = long;

  var apiUrl = "https://api.opencagedata.com/geocode/v1/json";

  var requestUrl =
    apiUrl +
    "?" +
    "key=" +
    apiKey +
    "&q=" +
    encodeURIComponent(latitude + "," + longitude) +
    "&pretty=1" +
    "&no_annotations=1";

  let results = await axios.get(requestUrl);
  return results.data.results[0].components.city;
};

export default getCity;
