import uuid from 'uuid';
import moment from 'moment';
import axios from 'axios';

//Add session - including default values.
export const addSession = (session) => ({
    type: 'ADD_SESSION',
    session
});

//in order to access write and access to a database we need to use an async function
//middleware 'thunk' allow this.
//dispatching a function.

export const startAddSession = (sessionData = {}) => {
    return (dispatch) => {
        //write data to db, then dispatch to store.
        //set up defaults - is this neccesary now?
        const {
            location = 'Torquay',
            lat = 50.46384,
            long = -3.51434,
            tide = '',
            temp = '',
            weatherDesc = '',
            sessionStart = 0,
            sessionEnd = 0,
            didCatch = false,
            numberCaught = 0,
            note = ''
        } = sessionData;
        //obj to map against
        const session = { location, lat, long, tide, temp, weatherDesc, sessionStart, sessionEnd, didCatch, numberCaught, note };
        //access database.
        // https://stormy-temple-81926.herokuapp.com/
        // http://localhost:3001/session
        axios.post('https://stormy-temple-81926.herokuapp.com/session', 
            { ...sessionData }).then((res) => {
                //console.log(JSON.stringify(res.data));
                //console.log(res.status);
                //console.log(res.statusText);
                //console.log(JSON.stringify(res.headers));
                //console.log(axios.defaults.headers);
                
                dispatch(addSession({ id: res.data._id,
                    ...session
                }));
            })
        }
};

//Axios docs example.
// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// export const startLogin = ({ email, password }) => {
//     return () => {
//         axios.post(
//             'http://localhost:3000/users/login', 
//             { email, password }
//         ).then((res) => {
//             console.log(JSON.stringify(res.data));
//             console.log(res.status);
//             console.log(res.statusText);
//             console.log(JSON.stringify(res.headers));
//             console.log(axios.defaults.headers);
//             // login( res.data._id, res.data.email );
            
//             // store.dispatch(login(res.data._id, res.data.email));
//             // if (history.location.pathname === '/') {
//             //  history.push('/dashboard');
//             // }
//         });
//     };
// };


//Refactored, no longer being used. All go through action above.

//Add session for Plymouth - including default values.
export const addSessionPlymouth = (
    {
        location = 'Plymouth',
        lat = 50.3755,
        long = -4.1427,
        tide = '',
        temperature = '',
        weatherDesc = '',
        sessionStart = 0,
        sessionEnd = 0,
        didCatch = false,
        numberCaught = 0,
        note = '',
    } = {}
) => ({
    type: 'ADD_SESSION',
    session: {
        id: uuid(),
        location,
        lat,
        long,
        tide, //call http func
        temperature, //call http func
        weatherDesc, //call http func
        sessionStart,
        sessionEnd, 
        didCatch,
        numberCaught,
        note
    }
});

//Add session for Exmouth - including default values.
export const addSessionExmouth = (
    {
        location = 'Exmouth',
        lat = 50.6200,
        long = -3.4137,
        tide = '',
        temperature = '',
        weatherDesc = '',
        sessionStart = 0,
        sessionEnd = 0,
        didCatch = false,
        numberCaught = 0,
        note = '',
    } = {}
) => ({
    type: 'ADD_SESSION',
    session: {
        id: uuid(),
        location,
        lat,
        long,
        tide, //call http func
        temperature, //call http func
        weatherDesc, //call http func
        sessionStart,
        sessionEnd, 
        didCatch,
        numberCaught,
        note
    }
});

//Remove session
export const removeSession = ( { id } = {}) => ({
    type: 'REMOVE_SESSION',
    id
});

//async to remove
export const startRemoveSession = ( { id } ) => {
    //return
    return (dispatch) => {
        return axios.delete(`https://stormy-temple-81926.herokuapp.com/sessions/${id}`)
        .then(()=> {
            dispatch(removeSession({ id }));
        })
    }   
};

//Edit session
export const editSession = (id, update) => ({
    type: 'EDIT_SESSION',
    id,
    update
});


//get sessions
export const getSessions = (sessions) => ({
    type: 'GET_SESSIONS',
    sessions
});

//start get sessions

//get data
//parse into array
//dispatch
export const startGetSessions = () => {
    return (dispatch) => {
        return axios.get('https://stormy-temple-81926.herokuapp.com/sessions')
        .then((res) => {
            console.log(JSON.stringify(res.data.sessions));
            const results = res.data.sessions;
            //parse to array
            const sessions = []

            //now have id and _id
            results.forEach((session) => {
                sessions.push({
                    id: session._id,
                    ...session
                });
            })

            //console.log('array');
            //console.log(sessions);
            
            dispatch(getSessions(sessions));

            //console.log(res.status);
            //console.log(res.statusText);
            //console.log(JSON.stringify(res.headers));
            //console.log(axios.defaults.headers);
            
        })
    }
};