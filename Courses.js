import React, { useState, useEffect }  from 'react';
import { Query } from "react-apollo";
import Course from './Course';
import gql from "graphql-tag";
import Trial from './Trial'

import DisplayMapClass from './DisplayMapClass'
const h=` country(name: "India") {
    states {
      state
      cases
      deaths
      recovered
    }

       historical(reverse: true, count: 30) {
      date
      todayCases
      todayRecovered
      todayDeaths
    }
  
  }`
function Courses () {

    const [count, setCount] = useState(h);
    const [data,setData]=useState([])
    const [cntry, setCase] = useState(true);
// useEffect(()=>{
// cntry=false
// alert(cntry)
// })
return(

 
  cntry===true ?
  <Query
    query={gql`
      {
     ${count}
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Could not fetch the data(</p>;
      if(data){
     
      }
      

  return(
   
      <div style={{marginLeft:"0%" ,display:"grid",gridTemplateColumns:"1fr ",width:"100%"}}>
      
    <div>
  <Trial data={data.country.historical}/></div>
  <marquee attribute_name = "attribute_value">
  { "Last updated on "+new Date()}
</marquee>
  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
<div className="cards">{data.country.historical[0].todayCases}<h2 style={{background:"orange"}}>Reported</h2></div>
<div className="cards">{data.country.historical[0].todayDeaths}<h2 style={{background:"red"}}>Deaths</h2></div>
<div className="cards">{data.country.historical[0].todayRecovered}<h2 style={{background:"green"}}>Cured</h2></div>
  </div>
  <div className="bright">Click on the state name to view state wise statistics</div>
    <table>

  <tr>
    <th style={{background:"#325956"}}>State</th>
    <th style={{background:"orange"}}>Cases</th>
    <th style={{background:"red"}}>Deaths</th>
    <th style={{background:"green"}}>Recovered</th>
  </tr>


  { data.country.states.map((currentCourse) => (


<tr>
{currentCourse.state!=="State Unassigned" ?[
<td onClick={
  
  ()=>{
    
   
    setCount(`  state(countryName: "India", stateName: "${currentCourse.state==="State Unassigned"?"Uttar Pradesh":currentCourse.state}") {
    state
    cases
    deaths
    districts {
      district
      cases
      deaths
    }
       historical(reverse: true, count: 30) {
      date
      todayCases
      todayRecovered
      todayDeaths
    }

  }`)
   setCase(false)
    
  }}>{currentCourse.state==="State Unassigned"?"Uttar Pradesh":currentCourse.state}</td>,
    <td  style={{background:"orange"}}>{currentCourse.cases}</td>,
    <td style={{background:"red"}}>{currentCourse.deaths}</td>,
  <td style={{background:"green"}}>{currentCourse.recovered}</td>
  ]:null}
</tr>
))}</table>

<DisplayMapClass data={ data.country.states} style={{width:"100%"}}/>
</div>
    
);
    }}
  </Query>
  :<Query
    query={gql`
      {
     ${count}
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      

  return(
   <div style={{marginLeft:"10%",display:"grid",gridTemplateColumns:"1fr"}}>
    <div onClick={()=>{setCase(true)
    
    setCount(h)
    }
    
    }>Nation wide statistics

<marquee>{"Last updated on "+new Date()}</marquee>
    <Trial data={data.state.historical}/>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
    <div className="cards">{data.state.historical[0].todayCases}<h2 style={{background:"orange"}}>Reported</h2></div>
<div className="cards">{data.state.historical[0].todayDeaths}<h2 style={{background:"red"}}>Deaths</h2></div>
<div className="cards">{data.state.historical[0].todayRecovered}<h2 style={{background:"green"}}>Cured</h2></div>
  </div>
   
    <table>

  <tr>
    <th >State</th>
    <th  style={{background:"orange"}}>Cases</th>
    <th  style={{background:"red"}}>Deaths</th>

  </tr>
  <tr>
<td  >{data.state.state}</td>
<td  style={{background:"orange"}}>{data.state.cases}</td>
<td  style={{background:"red"}}>{data.state.deaths}</td>
  </tr>
  


  { data.state.districts.map((currentCourse) => (


<tr>

<td  >{currentCourse.district}</td>
    <td  style={{background:"orange"}}>{currentCourse.cases}</td>
    <td  style={{background:"red"}}>{currentCourse.deaths}</td>

</tr>
))}</table>

    </div>
    
    </div>
);
    }}
    
  </Query>
);}
export default Courses;

//  <Course course={currentCourse} onClick={()=>console.log(2)}/>