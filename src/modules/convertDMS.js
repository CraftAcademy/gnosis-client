const toDegreesMinutesAndSeconds = (coordinate) => {
  var absolute = Math.abs(coordinate);
  var degrees = Math.floor(absolute);

  var minutesNotTruncated = (absolute - degrees) * 60;
  var minutes = Math.floor(minutesNotTruncated);
  var seconds = Math.floor((minutesNotTruncated - minutes) * 60);

  return degrees + "°" + minutes + "'" + seconds + "''";
}

const convertDMS = (lat, lng) => {
  var latitude = toDegreesMinutesAndSeconds(lat) ;
  var latitudeCardinal = lat >= 0 ? "N" : "S";

  var longitude = toDegreesMinutesAndSeconds(lng);
  var longitudeCardinal = lng >= 0 ? "E" : "W";

  return latitude + " " + latitudeCardinal + " " + longitude + " " + longitudeCardinal;
}

export default convertDMS 