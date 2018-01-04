import uuid from 'uuid';
import moment from 'moment';

//Add session - including default values.
export const addSession = (
    {
        location = 'Torquay',
        lat = 50.46384,
        long = -3.51434,
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
        weatherDesc, //call api - done
        sessionStart,
        sessionEnd, 
        didCatch,
        numberCaught,
        note
    }
});

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

//Edit session
export const editSession = (id, update) => ({
    type: 'EDIT_SESSION',
    id,
    update
});