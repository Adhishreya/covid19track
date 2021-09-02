import axios from 'axios';

const url="https://covid19.mathdro.id/api";

export const fetchData=async()=>{
    try
    {
        const {data :{confirmed,deaths,recovered,lastUpdate}} = await axios(url);
        return {confirmed,deaths,recovered,lastUpdate};
    }
    catch(error)
    {
        console.log("error!")
    }
}

export const fetchDailyData = async()=>
{
    try {

        const {data} = await axios(`${url}/daily`);
        // console.log(data);
        return data;
        
    } catch (error) {
        
    }
}