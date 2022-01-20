import axios from "axios";

// Every request starts with the same base url
// This automatically inserts the base url
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

// one default export per file
// allows for aliases on import
export default instance;
