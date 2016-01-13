
var React = require('react');
var PlaceStore = require('../stores/PlaceStore');
var Place = require('./Place');
import {Button, Card, Grid} from 'react-mdl';

class PlaceList extends React.Component{
  render() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }

    if (PlaceStore.isLoading()) {
      return (
        <div className="mdl-spinner mdl-js-spinner is-active"></div>
      )
    }
    return (
      <Grid className="mdl-grid">
      { this.props.places
          .filter((place) => {
            return place.active == true
          })
          .map((place, i) => {
            return (
            <div className="mdl-cell mdl-cell--6-col" key={i}>
            <Place data={place}
            />
            </div>    
            
          );
        })}
      </Grid>
    );
  }
};

module.exports = PlaceList;