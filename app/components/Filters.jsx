var React = require('react');
var FilterActions = require('../actions/FilterActions');
var PlaceActions = require('../actions/PlaceActions');
import {Grid} from 'react-mdl';

class Filters extends React.Component {
  addFilterState(ev) {
    var filter = ev.target.getAttribute('data-id');
    PlaceActions.filterPlaces(filter);
    FilterActions.setActiveFilters(filter);
  }
   
  render() {
    var { data } = this.props;
    return (
       <Grid className="filterMenu mdl-shadow--1dp">
        {data.map((filter, i) => {
          return (
              <div id="loopObject" className="mdl-cell mdl-cell--4-col" key={i}>
              <button id="filter" className={filter.is_active==true ? 'mdl-button mdl-js-button mdl-button--raised' :'mdl-button mdl-js-button' }  onClick={this.addFilterState} data-id={filter.name} >
                {filter.name}
              </button>
              </div>
          );
        })}
      </Grid>         
    );
  }
};

module.exports = Filters;
