import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import StateWise from "./StateWise.js";
import News from "./News.js";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
const App = () => {
  const [stateWise, setStateWise] = useState(false);
  const [news, setNews] = useState(false);

  const classes = useStyles();

  fetch(
    "https://newsapi.org/v2/everything/?q=covid19&sortBy=popularity&apiKey=4dbc17e007ab436fb66416009dfb59a8"
  )
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button
          onClick={() => {
            setStateWise(true);
            setNews(false);
          }}
        >
          StateWise Report
        </Button>
        <Button>Vaccinaion Report</Button>
        <Button
          onClick={() => {
            setStateWise(false);
            setNews(true);
          }}
        >
          Latest News
        </Button>
      </ButtonGroup>
      {stateWise && <StateWise />}

      {/* {news && <News />} */}
      {/* <News /> */}
    </div>
  );
};

export default App;
