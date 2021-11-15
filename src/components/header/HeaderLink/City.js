import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function City({ name, location, index }) {
    return (
        <div className={"CityContainer"} >
            <span>{name}</span>
            <ExpandMoreIcon className="rotate" />
            <div className={"CityListContainer" + (index < 5 ? " CityListContainerAlignmentLeft" : " CityListContainerAlignmentRight")}>
                <h2>Popular Localities</h2>
                <ul>
                    {location.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default City
