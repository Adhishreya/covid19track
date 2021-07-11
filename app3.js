import React, { useState, useEffect, useMemo } from "react";
const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    //   let result = [];
    fetch("https://api.covid19india.org/data.json")
      .then((res) => res.json())
      .then(
        (res) => {
          // console.log(res.statewise);
          // setData(..res.statewise());
          // result = Object.keys(res.statewise).map((key) => [
          //   Number(key),
          //   res.statewise[key]
          // ]);
          // console.log(Object.values(res.statewise)[0].active);
          setData(Object.values(res.statewise));
          // console.log(typeof result);
          // dat.push({ ...result });
        },
        [data]
      );

    // console.log(data);
  }, [data]);

  return <div></div>;
};

export default App;
