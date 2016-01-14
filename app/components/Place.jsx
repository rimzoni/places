var React = require('react');
import {Card} from 'react-mdl';


class Place extends React.Component {
        
   render() {
       var { data } = this.props;
    return (
        
        <Card  className="mdl-card mdl-shadow--2dp">
           <div className="mdl-card__title">
           <img src={data.image} width="150" height="100" border="0" alt=""  />
            </div>
            <div className="mdl-card__supporting-text">
                {data.description}
            </div>
            <div className="mdl-card__actions mdl-card--border">

                <h2 className="mdl-card__title-text">
                {data.name}
                </h2>
            </div>
        </Card>
          );
    };
}

module.exports = Place;
