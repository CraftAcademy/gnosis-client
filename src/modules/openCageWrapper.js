import axios from "axios";

const getAddress = async (lat, long) => {
  var apiKey = "09a3f3539e5949878aeb212e4bcce44a";
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
  return results.data.results[0];
};

export default getAddress;
