import React from 'react';

import {Line} from 'react-chartjs-2';



const state = {

  labels: ['January', 'February', 'March',

           'April', 'May'],

  datasets: [

    {

      label: 'Covid Cases',

      backgroundColor: 'transparent',

      borderColor: 'white',

      borderWidth: 1,

      data: [65, 59, 80, 81, 56]

    }

  ]

}



export default class Trial extends React.Component {
constructor(props){
  super(props)

  this.state={
    data:[]
  }
}
componentDidMount(){
  



}
  render() {
    console.log(this.props.data)
    const g=this.props.data.map(q=>{
  return(
    Number(q.todayCases)
  )
})
  const z=this.props.data.map(q=>{
  return(
    new Date(q.date).getDate()
  )
})
state.datasets[0].data=g.sort();
state.labels=z.sort();
console.log(z)

    return (

         <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Covid cases per day',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>

    );

  }

}