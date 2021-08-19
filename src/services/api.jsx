import "regenerator-runtime/runtime";
import Axios from "axios";

const APIKEY = "3f106e848b03452c9d0ea400d6386554";

const getData = async (value, sortBy, startDate, endDate) => {
  const response = await Axios.get(
    `https://newsapi.org/v2/everything?` +
      `q=${value}` +
      `&from=${startDate || "2021-08-16"}` +
      `&to=${endDate || "2021-08-16"}` +
      `&sortBy=${sortBy || "popularity"}` +
      `&apiKey=${APIKEY}`
  );
  return response;
};

export default getData;
