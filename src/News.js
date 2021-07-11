import React, { useState, useEffect, useMemo } from "react";

const News = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [keys, setKeys] = useState([]);
  useMemo(() => {
    let result = [];
    fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&count=5&textFormat=Raw&safeSearch=Strict&q=covid",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "85c6f68320msha78357b55db25d8p199eafjsn87fdd9527be9",
          "x-rapidapi-host": "google-news1.p.rapidapi.com",
          useQueryString: true
        }
      }
    )
      .then((res) => {
        // console.log(res);
        res.json();
      })
      .then((res) => {
        console.log(res);
      })

      .catch((e) => {
        console.log(e);
        setErr("Unable to fetch data currently");
      });
  }, []);
  return <div></div>;
};

export default News;
