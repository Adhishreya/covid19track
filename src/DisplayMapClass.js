// src/DisplayMapClass.js
import * as React from 'react';
import Data from './Data'
export default class DisplayMapClass extends React.Component {
  constructor(props){
    super(props)
  }
  mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    map: null
  };

  componentDidMount() {

    const H = window.H;
    const platform = new window.H.service.Platform({
        apikey:  "cnZcFjVRvgIoYcmGQDjPhBTVheJtnJNaxMgpNSg8PqQ"
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {

        // This map is centered over Europe
        center: { lat: 20.5937, lng:78.9629 },
        zoom: 1,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    //  const group = new H.map.Group();
     const mapevents=new H.mapevents.MapEvents(map);
  const behaviour=new H.mapevents.Behavior(mapevents);
  const ui=H.ui.UI.createDefault(map,defaultLayers)
  // map.addObject(group);
  // group.addEventListener('tap', this.handle, true);
  // const marker1 = new H.map.Marker( {lat: 23.40189534,lng:88.15177428 });
  const markers=Data.map(p=>{
    const marker1 = new H.map.Marker(  {      lat: p. Latitude,      lng: p.Longitude   });
     const dic=this.props.data.filter(op=>{return op.state==p.State})
    //  console.log(dic[0])
    if(dic.length>0)
    {
      console.log(dic.cases)
       marker1.setData(`<p>${p.State}<p>Cases${dic[0].cases}</p><p>Deaths ${dic[0].deaths}</p><p>Recovered ${dic[0].recovered}</p></p>`)
    }
   
       marker1.addEventListener("tap",function(event){
    // console.log(event)
    const bubble=new H.ui.InfoBubble(event.target.b,
    {
      content:event.target.getData()
    });
    ui.addBubble(bubble)
  },false)
    return(
      marker1
     
    )
  })
  const marker1 = new H.map.Marker( {      lat: 11.87026029,      lng: 79.71055403    });
  marker1.setData("<p>uiiuiui</p>");
  marker1.addEventListener("tap",function(event){
    console.log(event)
    const bubble=new H.ui.InfoBubble(event.target.b,
    {
      content:event.target.getData()
    });
    ui.addBubble(bubble)
  },false)
const marker2 = new H.map.Marker( {      lat: 11.87026029,      lng: 79.71055403    });
  map.addObjects(markers);
  // map.addObject(marker2);
  // this.addMarkerToGroup(group, {
  //     lat: 23.40189534,
  //     lng:88.15177428
  //   },
  //   '<div><a href="http://www.mcfc.co.uk" target="_blank">Manchester City</a>' +
  //   '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');

  // this.addMarkerToGroup(group, {
  //     lat: 11.87026029,
  //     lng: 79.71055403
  //   },
  //   '<div><a href="http://www.liverpoolfc.tv" target="_blank">Liverpool</a>' +
  //   '</div><div >Anfield<br>Capacity: 45,362</div>');
      // this.addInfoBubble(map);
       this.setState({ map });



  }
  // handle=(ev)=>{
  //   alert(12)
    
  //   // event target is the marker itself, group is a parent event target
  //   // for all objects that it contains
  //   var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
  //     // read custom data
  //     content: evt.target.value
  //   });
  //   // show info bubble
  //   ui.addBubble(bubble);
  
  // }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    return (
      // Set a height on the map so it will display
      <div ref={this.mapRef} style={{ height: "500px" }} />
    );
  }
}
