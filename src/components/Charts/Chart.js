import React,{useEffect,useState} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart=()=>{
    const [dailyData,setDailyData]=useState({});
    useEffect(()=>{
        const fetchData = async ()=>{
          setDailyData(await fetchDailyData());
        }

        fetchData();
    });

    const lineChart = (
        dailyData[0]?

        (<Line
        data = {{
            labels : dailyData(({date}) => date),
            datasets : [ {
                data : dailyData(({confirmed}) => confirmed),
                label : 'Infected',
                borderColor : "#3333ff",
                fill : true
            } , {
                data : dailyData(({deaths}) => deaths),
                label : 'Deaths',
                borderColor : "rgba(255, 0, 0,0.5)",
                fill : true
            } ],
        }}
        />):null
    )
    return (<div>Chart</div>);
}
export default Chart;