import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css'
import {countryData} from '../../api';

const CountryPicker=({handleCountryChange})=>{
    const [countryName,setCountryName] = useState([]);
useEffect(()=>{
    const fetchCountries=async()=>{
        setCountryName(await countryData());

    }

    fetchCountries();
},[]);
    return (<FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value="Global">Global</option>
            {countryName.map((country,i)=><option value={country} key={i}>{country}</option>)}
        </NativeSelect>
    </FormControl>);
}
export default CountryPicker;