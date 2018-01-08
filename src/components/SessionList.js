//Using higher order component pattern to provide access to the store, by modifying component
import React from 'react';
import { connect } from 'react-redux';
import SessionListItem from './SessionListItem';
import { getFilteredSessionsByLocation } from '../selectors/sessions';

//takes sessions, inprops and maps over them, creating a seperate components for each
//key is neccessary part of react - using db key
//session data being passed down props
const SessionList = (props) => (
    <div>
        {props.sessions.map((session) => {
            return <SessionListItem key={session.id}session={session} />
        })}
    </div>
);

//HOC pattern, taking sessionList component, adding connected state
const ConnectedSessionList = connect((state)=>{
    return {
        sessions: getFilteredSessionsByLocation(state.sessions, state.filters)
        // sessions: state.sessions,
        // filters: state.filters
    };
})(SessionList);

export default ConnectedSessionList;