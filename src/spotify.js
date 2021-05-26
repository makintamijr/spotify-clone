// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

//redirect to spotify for login credentials
export const authEndpoint = "https://accounts.spotify.com/authorize";
//redirect to our localhost build
const redirectUri = "http://localhost:3000/";
//client id from spotify developer
const clientId = "eb70fbb34ed040b0b82f1bbf206cc95e";

//
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
// to pull access token after user login
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
