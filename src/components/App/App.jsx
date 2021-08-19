import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import NewsItem from "../NewsItem/NewsItem";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Options from "../Options/Options";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const createAPIUrl = (value, sort, startDate, endDate, apiKey) =>
    `https://newsapi.org/v2/everything?` +
    `q=${value}` +
    `&from=${startDate || "2021-08-16"}` +
    `&to=${endDate || "2021-08-16"}` +
    `&sortBy=${sort || "popularity"}` +
    `&apiKey=${apiKey || "0f9d628bec1441ffb6c3d1d1527a76d8"}`;

  const search = async (searchValue) => {
    setIsLoading(true);
    const res = await Axios.get(createAPIUrl(searchValue, sortBy));
    setArticles(res.data.articles);
    setIsLoading(false);
  };

  useEffect(() => {
    // console.log("Sort Method:", sortBy);
  });

  return (
    <div className="wrapper">
      <SearchBar search={search} />

      <div className="newsList">
        {isLoading ? <LoadingSpinner /> : null}
        {articles.length ? <Options setSortBy={setSortBy} /> : null}
        {sortBy}
        {articles.map(({ title, url, urlToImage, description }) => (
          <NewsItem
            key={url.toString()}
            title={title}
            url={url}
            urlToImage={urlToImage}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
