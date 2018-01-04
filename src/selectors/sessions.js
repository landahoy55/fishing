//get filtered sessions
//use filter to check through sessions, return only that with a location matching the specifified filter
export const getFilteredSessionsByLocation = (sessions, filters) => {
    return sessions.filter((session) => {
        const locationMatch = session.location.toLowerCase().includes(filters.location.toLowerCase());
        return locationMatch;
    });
};

//get filtered sessions by note
//use filter to check through sessions, return only that with a note matching the specified filter
export const getFilteredSessionsByNote = (sessions, filters) => {
    return sessions.filter((session) => {
        const noteMatch = session.note.toLowerCase().includes(filters.note.toLowerCase());
        return noteMatch;
    });
};