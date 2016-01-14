var PlaceActions = require('../actions/PlaceActions');

var mockData = [
  { id: 0, name: 'Druga kuca', description: 'Druga kuca.', image: 'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/11227029_553539268128639_4307026916955335460_n.png?oh=ce6f0c0ea999e753acd0f053e1c5e4a4&oe=57467E21',lat: '43.8539973',lng: '18.3860037', category:'Food' , active: true },
  { id: 1, name: 'Slatko i Slano', description: 'Veoma dobra kuhinja koja nudi razne kobinacije slatkog i slanog.', image: 'http://slatkoislano.ba/wp-content/uploads/2015/11/logo21.png',lat: '43.8530275',lng: '18.3834648', category:'Bar' , active: true},
  { id: 2, name: 'Paper Moon', description: 'Restoran/Vinarija', image: 'http://depo.ba/media/pictures/2015/05/16/thumbs/55571592-dbb4-4ef5-9b39-635e0a0a0a6d-paper-moon-previewOrg.jpg',lat: '43.8508628',lng: '18.38866', category:'Club', active: true },
  { id: 3, name: 'Buenos Aires', description: 'Juzno Americka kuhinja', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRvi2Gyc49hQY9_cQesVCuXgWJI7keMUrdG_auLonY6FLlfNm-3yw',lng: '18.3860037', category:'Food' , active: true},
  { id: 4, name: 'Cairo', description: 'Very prestious bar.', image: 'https://cdn.kiwicollection.com/media/property/PR006896/xl/006896-02-buddha-bar.jpg',lat: '43.8539973',lng: '18.3860037', category:'Bar' , active: true},
  { id: 5, name: 'Chicago', description: 'Club in the middle of the city', image: 'http://www.nz9f.com/yahoo_site_admin/assets/images/chiclub.98122413_large.JPG',lat: '43.8539973',lng: '18.3860037', category:'Club', active: true }
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