import React, { useState, useEffect, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});
const StateWise = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [keys, setKeys] = useState([]);
  useMemo(() => {
    let result = [];
    fetch("https://api.covid19india.org/data.json")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.statewise);
        res.statewise.map((data) => {
          setKeys(Object.keys(data));
          result.push(Object.values(data));
        });

        setData(Object.values(result));
        console.log(keys);
      })

      .catch((e) => {
        console.log(e);
        setErr("Unable to fetch data currently");
      });
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow></TableRow>
            {keys.map((val) => {
              return <TableCell align="right">{val}</TableCell>;
            })}
          </TableHead>
          <TableBody>
            {data.map((rows) => {
              return (
                <TableRow>
                  {rows.map((cols) => {
                    return <TableCell align="right">{cols}</TableCell>;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StateWise;
