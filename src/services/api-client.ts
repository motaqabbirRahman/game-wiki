import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f9c9ee269ba84cd49a54bf4cfe1527ad",
  },
});
