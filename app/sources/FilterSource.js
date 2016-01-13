var FilterActions = require('../actions/FilterActions');

var mockData = [
  { id: 0, name: 'Food', description: 'Element for filter Food'},
  { id: 1, name: 'Club', description: 'Element for filter Clubs'},
  { id: 2, name: 'Bar', description: 'Element for filter Bars'} 
];

var FilterSource = {
  fetchFilters() {
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

      success: FilterActions.updateFilters,
      error: FilterActions.filtersFailed,
      loading: FilterActions.fetchFilters
    }
  }
};

module.exports = FilterSource;