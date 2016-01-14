var alt = require('../alt');
var FilterActions = require('../actions/FilterActions');
var FilterSource = require('../sources/FilterSource');

class FiltersStore {
  constructor() {
    this.filters = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateFilters: FilterActions.UPDATE_FILTERS,
      handleFetchFilters: FilterActions.FETCH_FILTERS,
      handleFiltersFailed: FilterActions.FILTERS_FAILED,
      activeFilters: FilterActions.ACTIVE_FILTERS,
      setActiveFilters: FilterActions.SET_ACTIVE_FILTERS,
    });

    this.exportPublicMethods({
      getFilter: this.getFilter
    });

    this.exportAsync(FilterSource);
  }

  handleUpdateFilters(filters) {
    this.filters = filters;
    this.errorMessage = null;
  }

  handleFetchFilters() {
    this.filters = [];
  }

  handleFiltersFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
  
  activeFilters(){
       for (var i = 0; i < this.filters.length; i += 1) {
        if (this.filters[i].is_active == true) {
          var filter =this.filters[i];
          return filter;
          break;
        }   
      }
  }
  
  removeActiveFilter() {
    this.filters = this.filters.map((filter) => {
      return {
        id: filter.id,
        name: filter.name,
        is_active: false
      };
    });
  }
  
  setActiveFilters(filter) {
    
    if(filter == 'all'){
       this.removeActiveFilter();
       return true; 
    }
    
    this.removeActiveFilter();
    
    this.filters.map((filterIndex, i) => {
            if (filterIndex.name == filter) {
            filterIndex.is_active = true;
            }  
          });
  }
 
   getFilter(id) {
    var { filters } = this.getState();
    for (var i = 0; i < filters.length; i += 1) {
      if (filters[i].id === id) {
        return filters[i];
      }
    }

    return null;
  }
}

module.exports = alt.createStore(FiltersStore);