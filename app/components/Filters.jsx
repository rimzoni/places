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
       <div className="filterMenu">
        {data.map((filter, i) => {
          return (
              <div id="loopObject" key={i}>
              <button id="filter" className={filter.is_active==true ? 'mdl-button mdl-js-button mdl-button--raised' :'mdl-button mdl-js-button' }  onClick={this.addFilterState} data-id={filter.name} >
                {filter.name}
              </button>
              </div>
          );
        })}
      </div>         
    );
  }
};

module.exports = Filters;
