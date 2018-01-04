import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import sessionsReducer from '../reducers/sessions';
import filtersReducer from '../reducers/filters';
import weatherReducer from '../reducers/weather'

//create state store adding multiple reducers.
export default () => {
        const store = createStore(combineReducers({
            sessions: sessionsReducer,
            filters: filtersReducer,
            weather: weatherReducer
            }), 
            applyMiddleware(thunk)
        );
    return store;
};