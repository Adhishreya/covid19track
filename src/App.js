import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
class App extends React.Component
{
    state={
        data : {},
        country:''
    }

    handleCountryChange=async (country)=>{
        this.setState({country:country});
        const responseData = await fetchData(country);
        this.setState({data:responseData});
    }
    async componentDidMount()
    {
        const responseData = await fetchData();
        this.setState({data:responseData});
    }
    render()
    {
        const {data , country} = this.state;
        return(
        <div className={styles.container}>
            <img className={styles.image} src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="Covid-19"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart country={country} data = {data}/>
            
        </div>
        );
    }
}
export default App;
