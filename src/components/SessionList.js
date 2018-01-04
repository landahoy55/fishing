//Using higher order componenet pattern to provide access to the store, by modifying component
import React from 'react';
import { connect } from 'react-redux';
import SessionListItem from './SessionListItem';
import { getFilteredSessionsByLocation } from '../selectors/sessions';

const SessionList = (props) => (
    <div>
        <h1>Sessions</h1>
        {props.sessions.map((session) => {
            return <SessionListItem key={session.id}session={session} />
        })}
    </div>
);

const ConnectedSessionList = connect((state)=>{
    return {
        sessions: getFilteredSessionsByLocation(state.sessions, state.filters)
        // sessions: state.sessions,
        // filters: state.filters
    };
})(SessionList);

export default ConnectedSessionList;