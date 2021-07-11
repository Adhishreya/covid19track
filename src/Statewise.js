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
          let keys = Object.keys(data);
          // console.log(keys);
          let keyArrs = keys.splice(0, 3);
          keyArrs.push("recovered");
          keyArrs.push("state");

          setKeys(keyArrs);

          let vals = Object.values(data);
          // console.log(vals);
          let valArrs = vals.splice(0, 3);
          // setKeys(Object.keys(data));
          // console.log(Object.keys(data).slice(0,3));
          // result.push(valArrs);
          // console.log(data["recovered"]);
          // result.push(data["recovered"]);
          // result.push(data["state"]);
          valArrs.push(vals[5]);
          valArrs.push(vals[6]);
          result.push(valArrs);
          // result.push(Object.values(data));
        });

        // setData(Object.values(result));
        setData(result);
        // console.log(keys);
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
            <TableRow style={{ background: "#6698ed" }}>
              {keys.map((val) => {
                return <TableCell align="right">{val}</TableCell>;
              })}
            </TableRow>
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
