// import React from "react";
// // https://api.covid19india.org/data.json
// // import { render } from "react-dom";
// import "./styles.css";
// import "tailwindcss/tailwind.css";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//       country: "",
//       click: false
//     };
//   }
//   componentDidMount() {
//     if (this.state.click) {
//       fetch("https://disease.sh/v3/covid-19/countries")
//         .then((resp) => resp.json())
//         .then((resp) => {
//           this.setState({ data: resp.Countries });
//         });
//     }
//     fetch("https://api.covid19api.com/summary")
//       .then((resp) => resp.json())
//       .then((resp) => {
//         this.setState({ data: resp.Countries });
//       });
//   }
//   render() {
//     const doms = (
//       <div>
//         {this.state.data.map((element) => (
//           <div className="row rounded-lg container">
//             <button
//               className="country col-4 col-sm-2"
//               onClick={() => this.setState({ click: true })}
//               key={element.Country}
//             >
//               {element.Country}
//             </button>
//             <ul>
//               <li className="">{element.TotalConfirmed}</li>
//               <li className="">{element.TotalDeaths}</li>
//               <li className="">{element.TotalRecovered}</li>
//             </ul>
//           </div>
//         ))}
//       </div>
//     );

//     return <div className="App">{doms}</div>;
//   }
// }

// export default App;
