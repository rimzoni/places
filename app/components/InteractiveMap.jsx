var React = require('react');
var GoogleMapReact = require('google-map-react');

class InteractiveMap extends React.Component {
    constructor() {
    super();
    // this.ref.myInput.getDOMNode().setAttribute('nwdirectory')
  }

  render() {
    return (
        <div>
            <div style={{width: '100%', height: 700}}>
                <GoogleMapReact
                center={[43.8490677,18.3935693]}
                zoom={15}
                >
             
                </GoogleMapReact>
                
             </div>
               <div>
               <h3>Markers: </h3>
                  {this.props.places
                  .filter((place) => {
                                 return place.active == true
                                 }).map((place, i) => {
                                 return (
                <div key={i} >                     
                <myComponent  data-lat={place.lat || ''} data-lng={place.lng || ''}>
                {place.name},{place.lat},{place.lng}
                </myComponent>
                 </div>
                                );
                                })
            }   
                </div>
                

        </div>
    );
  }
}

module.exports = InteractiveMap;