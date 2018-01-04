//Reducer to manager sessions - reducer is very similar to the factory pattern - state and action go in. new state comes out.
//Includes default state
const sessionsReducerDefault = [];

const sessionsReducer = (state = sessionsReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_SESSION': //using array spread to add on to array
            return [...state,
                    action.session
                ];
        case 'REMOVE_SESSION':
            return state.filter(( { id }) => {
                return id !== action.id;
            });
        case 'EDIT_SESSION':
            return state.map((session) => {
                if(session.id === session.id) {
                    return {
                        ...session,
                        ...action.update //using object spread operator to take updates and modify exisiting session
                    }
                } else {
                    return session;
                } 
            });
        //pull down sessions from database
        case 'GET_SESSIONS':
            return action.sessions;
        default: 
            return state;
    }
};

export default sessionsReducer;