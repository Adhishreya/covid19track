import React, { useState, useEffect, useMemo } from "react";
import { Chart } from "react-charts";
const About = () => {
  const [vaccine, setVaccine] = useState([]);
  // const []
  // const [fetch,setFet]
  useMemo(() => {
    //  const fetc =
    let arr = [];
    fetch(
      "https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=&district_id=&date=2021-07-13"
    )
      .then((data) => data.json())
      .then((data) => {
        //   console.log(data)
        //   setVaccine(data["last30DaysAgeWiseVaccination"]);
        //   setVaccine(Object.values(data));
        arr = Object.values(data);
        setVaccine(arr[0]);
        //  console.log(arr[0][29]);
        //   console.log(Object.values(data));

        //   console.log(data["last30DaysAgeWiseVaccination"][29]);
      });

    //   console.log(vaccine);
  }, []);
  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );
  return (
    <div>
      {/* <Chart
          data={vaccine}
          series={series}
          axes={axes}
          getSeriesStyle={getSeriesStyle}
          getDatumStyle={getDatumStyle}
          tooltip
        /> */}
      {/* <div>{vaccine[29]}</div> */}
    </div>
  );
};

export default About;
