import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const SessionListItem = (props) => (
    <div>
        <Link to={`/edit/${props.session.id}`}>
            <h3>{moment(props.session.sessionStart).format('L')} - {props.session.location}</h3>
        </Link>
        {props.session.didCatch ? <p>{props.session.numberCaught} fish were caught</p> : <p>No fish were caught</p>}
        <p>{props.session.note}</p>
        <p>On a {props.session.tide} tide, {props.session.temp}°C</p>
    </div>
);

export default SessionListItem;