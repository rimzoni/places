var alt = require('../alt');

class PlaceActions {
 updatePlaces(places) {
    return places
  }

  fetchPlaces(filter) {
    return true
  }

  placesFailed(errorMessage) {
    return errorMessage;
  }

  filterPlaces(filter){
      return filter
  }
  searchPlaces(search){
      return search
  }
}

module.exports = alt.createActions(PlaceActions);