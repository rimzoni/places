var React = require('react');
var AltContainer = require('alt-container');
var PlaceStore = require('../stores/PlaceStore');
var FiltersStore = require('../stores/FiltersStore');
var PlaceActions = require('../actions/PlaceActions');
var FilterActions = require('../actions/FilterActions');
var Filters = require('./Filters');
var InteractiveMap = require('./InteractiveMap');
var PlaceList = require('./PlaceList');
var SearchBox = require('./SearchBox');
import {Header, Grid} from 'react-mdl';

class PlacesApp extends React.Component{
   constructor() {
    super();
    FiltersStore.fetchFilters();
    PlaceStore.fetchPlaces();
    // this.ref.myInput.getDOMNode().setAttribute('nwdirectory')
    // this.onChange = this.onChange.bind(this);
  }
  render() {  
    return (
        <div>
         <Grid className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col">
            <h2 className="logo">Places</h2>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
                <SearchBox
                    filterText={this.props.filterText}
                />
            </div>
        </Grid>
        <Grid className="mdl-grid">
        <div className="mdl-cell mdl-cell--7-col">
                <AltContainer store={PlaceStore}>
                <InteractiveMap />
                </AltContainer>
        </div>
        <div className="mdl-cell mdl-cell--5-col">
            <AltContainer
                store={FiltersStore}
                render={(props) => {
                 return <Filters data={props.filters}/>}}
                />
            <AltContainer store={PlaceStore}>
                    <PlaceList />
            </AltContainer>
        </div>
        </Grid>
       </div>
    );
  }
};

PlacesApp.propTypes = {
 filterText: React.PropTypes.string
};
PlacesApp.defaultProps = {
 filterText: ''
};

module.exports = PlacesApp;

//  <AltContainer store={LocationStore} render={(props) => {
//             return <AllLocations data={props.locations} filter={'alt'} />