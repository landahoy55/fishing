import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'; //provider allows the store to be passed to all components

import AppRouter from './routers/AppRouter';
import configureStore from './store/configStore';
import { addSession } from './actions/sessions'; //can drop
import { startGetSessions } from './actions/sessions-api';
import { setLocationFilter }  from './actions/filters';
import { setNoteFilter } from './actions/filters';
import { getFilteredSessionsByLocation } from './selectors/sessions';

//CSS -  bring in styles.css or component css.
//webpack builds css
import 'normalize.css/normalize.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

const store = configureStore();

//add temp sessions
//store.dispatch(addSession( { location: 'Torquay', note: 'Catching fish'} ));
//store.dispatch(addSession( { location: 'Plymouth', note: 'Note many fish today'} ));
// store.dispatch(setLocationFilter('plymouth'));

// const state = store.getState();
// const visibleSessions = getFilteredSessionsByLocation(state.sessions, state.filters);
//console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState())
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider> 
);


//inital load
ReactDOM.render(<p>Loading fishy friends</p>, document.getElementById('app'));

//when dispatch is called, then show app!
store.dispatch(startGetSessions()).then( () => {
    ReactDOM.render(jsx, document.getElementById('app'));
});



