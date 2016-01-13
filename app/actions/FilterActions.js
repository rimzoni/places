var alt = require('../alt');

class FilterActions {
  updateFilters(filters) {
    return filters
  }

  fetchFilters() {
    return true
  }

  filtersFailed(errorMessage) {
    return errorMessage;
  }
  
  activeFilters() {
    return true
  }
  
  setActiveFilters(filter){
      return filter
  }
}

module.exports = alt.createActions(FilterActions);