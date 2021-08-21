import "regenerator-runtime/runtime";
import Axios from "axios";

const APIKEY = "0f9d628bec1441ffb6c3d1d1527a76d8";

const getData = async (value, sortBy, pageSize, page) => {
  const response = await Axios.get(
    `https://newsapi.org/v2/everything?` +
      `q=${value}` +
      `&pageSize=${pageSize || 10}` +
      `&page=${page || 1}` +
      `&sortBy=${sortBy || "popularity"}` +
      `&apiKey=${APIKEY}`
  );
  return response;
};

export default getData;
