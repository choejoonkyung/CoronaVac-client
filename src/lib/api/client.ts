import axios from "axios";

const client = axios.create();

// client.defaults.baseURL =
//   process.env.NODE_ENV === "development" ? "/" : "https://api.";

client.defaults.baseURL = process.env.REACT_APP_GO_DATA_URL;

export default client;
