var PlaceActions = require('../actions/PlaceActions');

var mockData = [
  { id: 0, name: 'Druga kuca', description: 'Druga kuća - Lora je nastala iz želje da svojim prijateljima', image: 'http://placehold.it/150x100',lat: '43.8539973',lng: '18.3860037', category:'Food' , active: true },
  { id: 1, name: 'Slatko i Slano', description: 'Veoma dobra kuhinja.', image: 'http://placehold.it/150x100',lat: '43.8530275',lng: '18.3834648', category:'Bar' , active: true},
  { id: 2, name: 'Paper Moon', description: 'Restoran/Vinarija', image: 'http://placehold.it/150x100',lat: '43.8508628',lng: '18.38866', category:'Club', active: true },
  { id: 3, name: 'Buenos Aires', description: 'Juzno Americka kuhinja', image: 'http://placehold.it/150x100',lat: '43.8539973',lng: '18.3860037', category:'Food' , active: true},
  { id: 4, name: 'Cairo', description: 'Very prestious bar.', image: 'http://placehold.it/150x100',lat: '43.8539973',lng: '18.3860037', category:'Bar' , active: true},
  { id: 5, name: 'Chicago', description: 'Club in the middle of the city', image: 'http://placehold.it/150x100',lat: '43.8539973',lng: '18.3860037', category:'Club', active: true }
];

var PlaceSource = {
  fetchPlaces() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockData);
            } else {
              reject('Things have broken');
            }
          }, 250);
        });
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: PlaceActions.updatePlaces,
      error: PlaceActions.placesFailed,
      loading: PlaceActions.fetchPlaces
    }
  }
};

module.exports = PlaceSource;