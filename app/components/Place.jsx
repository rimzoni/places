var React = require('react');
import {Card} from 'react-mdl';


class Place extends React.Component {
        
   render() {
       var { data } = this.props;
    return (
        
        <Card  className="mdl-card">
           <div className="mdl-card__title mdl-card--expand">
           <img src={data.image}  border="0" alt=""  />
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
