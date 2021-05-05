import axios from "axios";

const client = axios.create();

// client.defaults.baseURL =
//   process.env.NODE_ENV === "development" ? "/" : "https://api.";

client.defaults.baseURL = process.env.DATA_GO_API_URL;

export default client;
