import axios from "axios";
import Config from "../Config";

const client = axios.create();

// client.defaults.baseURL =
//   process.env.NODE_ENV === "development" ? "/" : "https://api.";

client.defaults.baseURL = Config.dataGoApiUrl;

export default client;
