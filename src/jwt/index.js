import { decode as atob, encode as btoa } from 'base-64';

export function decodeToken (token){
  try {
    // if the token has more or less than 3 parts or is not a string
    // then is not a valid token
    if (token.split(".").length !== 3 || typeof token !== "string") {
      return null;
    }
    // payload ( index 1 ) has the data stored and
    // data about the expiration time
    const payload = token.split(".")[1];
    // determine the padding characters required for the base64 string
    const padding = "=".repeat((4 - (payload.length % 4)) % 4);
    // convert the base64url string to a base64 string
    const base64 =
      payload.replace("-", "+").replace("_", "/") + padding;
    // parse base64 into json
    const jsonPayload = decodeURIComponent(
      
        atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    // decode json
    const decoded = JSON.parse(jsonPayload);
    return decoded;
  } catch (error) {
    // Return null if something goes wrong
    return null;
  }
};

export function isTokenExpired(token) {
  const decodedToken = decodeToken(token);
  let result = true;

  if (decodedToken && decodedToken.exp) {
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp); // sets the expiration seconds
    // compare the expiration time and the current time
    result = expirationDate.valueOf() < new Date().valueOf();
  }
  return result;
}
