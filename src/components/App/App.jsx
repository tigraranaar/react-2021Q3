import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import NewsItem from "../NewsItem/NewsItem";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Sorting from "../Sorting/Sorting";
import Pagination from "../Pagination/Pagination";
import getData from "../../services/api";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("publishedAt");
  const [postsOnPage, setPostsOnPage] = useState("10");

  useEffect(() => {
    if (!searchValue) return;
    setIsLoading(true);
    getData(searchValue, sortBy, postsOnPage)
      .then((obj) => {
        setArticles(obj.data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log(err)); // eslint-disable-line no-console
  }, [sortBy, postsOnPage]);

  return (
    <div className="wrapper">
      <SearchBar
        setArticles={setArticles}
        setIsLoading={setIsLoading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className="loadingBox">{isLoading ? <LoadingSpinner /> : null}</div>

      <div className="newsList">
        {articles.length ? (
          <div className="options">
            <Pagination
              setPostsOnPage={setPostsOnPage}
              articles={articles}
              postsOnPage={postsOnPage}
              setArticles={setArticles}
              searchValue={searchValue}
              sortBy={sortBy}
              setIsLoading={setIsLoading}
            />
            <Sorting setSortBy={setSortBy} />
          </div>
        ) : null}
        {articles.map(({ title, url, urlToImage, description }) => (
          <NewsItem
            key={url.toString()}
            title={title}
            url={url}
            urlToImage={urlToImage}
            description={description}
            searchValue={searchValue}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
