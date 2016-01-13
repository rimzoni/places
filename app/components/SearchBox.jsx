var React = require('react');
var PlaceActions = require('../actions/PlaceActions');

class SearchBox extends React.Component {
    constructor(){
        super();
        this.filterText = '';
    }
    handleChange(e) {
        var filterText = e.target.value;
        PlaceActions.searchPlaces(e.target.value);
    }
    render() {
    return (
       <div className="mdl-textfield mdl-js-textfield">
        <input className="mdl-textfield__input" type="text" id="searchBar" placeholder="Search place Name..." 
        ref="filterTextInput" onChange={this.handleChange} 
         />
       </div>         
    );
  };
}

module.exports = SearchBox;