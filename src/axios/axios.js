import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.137.1:25575/"
});

export default http;
