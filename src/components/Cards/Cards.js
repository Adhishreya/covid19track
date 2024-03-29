import React from 'react';
import styles from './Cards.module.css';
import { Grid, Card , CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import cn from 'classnames';
const Cards=({data : {confirmed,deaths,recovered,lastUpdate}})=>{
    if(!confirmed)
    {
        return("Loading...")
    }
    return (<div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cn(styles.card,styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient="body2">Number of active Covid-19 cases</Typography>
                </CardContent>
            </Grid>
            {recovered.value?
            (<Grid item component={Card} xs={12} md={3} className={cn(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient="body2">Number of recovered from Covid-19 cases</Typography>
                    
                </CardContent>
            </Grid>):null
}
            <Grid item component={Card} xs={12} md={3} className={cn(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varient="body2">Number of deaths due to Covid-19 cases</Typography>
                    <Typography color="warning">{(deaths.value/confirmed.value*100).toFixed(2)}%</Typography>
                </CardContent>
            </Grid>
        </Grid>

    </div>);
}
export default Cards;