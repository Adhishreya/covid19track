import axios from 'axios';

const url="https://covid19.mathdro.id/api";

export const fetchData=async(country)=>{
    let changeUrl = url;
    if(country && country!="Global")
    {
        changeUrl = `${url}/countries/${country}`
    }

    try
    {
        const {data :{confirmed,deaths,recovered,lastUpdate}} = await axios(changeUrl);
        console.log(changeUrl)
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
        const retrievedData = data.map((resData)=>(
            {
                confirmed:resData.confirmed.total,
                deaths:resData.deaths.total,
                date : resData.reportDate,
            }
        ))
        return retrievedData;
        
    } catch (error) {
        
    }
}


export const countryData = async()=>
{
    try {
        const { data : {countries}} = await axios(`${url}/countries`);
        const countryName = countries.map((country)=>(country.name))
        return countryName;
    } catch (error) {
        
    }
}