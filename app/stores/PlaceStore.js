var alt = require('../alt');
var PlaceActions = require('../actions/PlaceActions');
var PlaceSource = require('../sources/PlaceSource');

class PlaceStore {
  constructor() {
    this.places = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdatePlaces: PlaceActions.UPDATE_PLACES,
      handleFetchPlaces: PlaceActions.FETCH_PLACES,
      handlePlacesFailed: PlaceActions.PLACES_FAILED,
      filterPlaces: PlaceActions.FILTER_PLACES,
      searchPlaces: PlaceActions.SEARCH_PLACES
    });

    this.exportPublicMethods({
      getPlace: this.getPlace
    });

    this.exportAsync(PlaceSource);
  }

  handleUpdatePlaces(places) {
    this.places = places;
    this.errorMessage = null;
  }

  handleFetchPlaces() {
    this.places = [];
  }

  handlePlacesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
  
   removePlacesFromDisplay() {
    this.places = this.places.map((place) => {
      return {
        id: place.id,
        name: place.name,
        description: place.description,
        image: place.image,
        lat: place.lat,
        lng: place.lng,
        category: place.category,
        active: false
      };
    }); 
  }
  
    removeFilters() {
    this.places = this.places.map((place) => {
      return {
        id: place.id,
        name: place.name,
        description: place.description,
        image: place.image,
        lat: place.lat,
        lng: place.lng,
        category: place.category,
        active: true
      };
    }); 
  }
   
   
  
    
    filterPlaces(filter) {
    
    if(filter=='all'){
        this.removeFilters();
        return this.place;
    }
    this.removePlacesFromDisplay();
    
    var filteredPlaces = [];
    var j = 0;
    this.places.map((place, i) => {
            if (place.category == filter) {
            place.active = true;
            filteredPlaces[j] = place;
            j++;
            }  
          });
    this.place = filteredPlaces;      
    }
    
  searchPlaces(search){
    
    this.removePlacesFromDisplay();
    
    var filteredPlaces = [];
    var j = 0;
    this.places.map((place, i) => {
            if (place.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 ) {
            place.active = true;
            filteredPlaces[j] = place;
            j++;
            }  
          });
    this.place = filteredPlaces;   
  }  
  
  getPlace(id) {
    var { places } = this.getState();
    for (var i = 0; i < places.length; i += 1) {
      if (places[i].id === id) {
        return places[i];
      }
    }

    return null;
  }
}

module.exports = alt.createStore(PlaceStore);
