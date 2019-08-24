import axios from 'axios'

const getAddress = async (lat, long) => {
  var apikey = process.env.REACT_APP_OPEN_CAGE_API_KEY;
  var latitude = lat;
  var longitude = long;

  var api_url = 'https://api.opencagedata.com/geocode/v1/json'

  var request_url = api_url
    + '?'
    + 'key=' + apikey
    + '&q=' + encodeURIComponent(latitude + ',' + longitude)
    + '&pretty=1'
    + '&no_annotations=1';

  let results = await axios.get(request_url)
  return results.data.results[0]
}

export default getAddress