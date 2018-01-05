import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './SessionListItem.css'

//component for each list item.
//using moment to manipulate date
//props passed down down from session list.
//Link is a part of react router dom, allows for navigation without page reloads.
const SessionListItem = (props) => (
    <div>
        <Link to={`/edit/${props.session.id}`}>
            <h3 className="listTitle">{props.session.location}</h3>
        </Link>
        {props.session.didCatch ? <p className="listElements">{moment(props.session.sessionStart).format("d MMMM YYYY")} - <b> {props.session.numberCaught} </b>fish were caught</p> : <p className="listElements">{moment(props.session.sessionStart).format("d MMMM YYYY")} - No fish were caught</p>}
        <p className="listElementsSecondary">{props.session.note}</p>
        <p className="listElementsSecondary">On a {props.session.tide} tide, {props.session.temp}°C</p>
        <hr />
    </div>
);

export default SessionListItem;