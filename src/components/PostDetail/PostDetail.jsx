import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import getData from "../../services/api";
import "./PostDetail.scss";

const placeholder = "https://via.placeholder.com/150";

const PostDetail = () => {
  const match = useRouteMatch("/details/:value/:query");
  const title = decodeURIComponent(match.params.query);
  const [find, setFind] = useState({});

  useEffect(() => {
    getData(match.params.value, "publishedAt", 100)
      .then((obj) => {
        const searchPost = obj.data.articles.find(
          (post) => post.title === title
        );
        setFind(searchPost);
      })
      .catch((err) => console.log(err)); // eslint-disable-line no-console
  }, [setFind]);

  if (!find) {
    return (
      <h3>
        This post isn`t available right now. Please go back to the Home page and
        try again.
      </h3>
    );
  }
  return (
    <div className="details">
      <h2 className="details__title">
        <a href={find.url || "newsapi.org"}>{find.title || "Title"}</a>
      </h2>
      <img
        src={find.urlToImage || placeholder}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholder;
        }}
        alt="post"
        className="details__image"
      />
      <p className="details__description">
        {find.description || "description"}
      </p>
      <h3 className="details__author">{find.author || "author"}</h3>
      <p className="details__date">
        Published At: {find.publishedAt || "date"}
      </p>
    </div>
  );
};

export default PostDetail;
