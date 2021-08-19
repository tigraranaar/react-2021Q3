import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import NewsItem from "../NewsItem/NewsItem";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Options from "../Options/Options";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <div className="wrapper">
      <SearchBar
        setArticles={setArticles}
        setIsLoading={setIsLoading}
        searchValue={searchValue}
        sortBy={sortBy}
        setSearchValue={setSearchValue}
      />

      {isLoading ? <LoadingSpinner /> : null}

      <div className="newsList">
        {articles.length ? (
          <Options
            setArticles={setArticles}
            setIsLoading={setIsLoading}
            searchValue={searchValue}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        ) : null}
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
