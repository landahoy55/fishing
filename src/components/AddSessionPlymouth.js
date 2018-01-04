// lat={50.3755} 
// long={-4.143841} 

import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { startAddSession } from '../actions/sessions-api';

//import * as weatherActions from '../actions/weather';

//import weather action - running multiple times. does this need to be changed?
//send result to form.

//onsubmit prop added to session form - this component is triggering the submit.

export class AddSession extends React.Component {

  onSubmit = (session) => {
    this.props.startAddSession(session);
    //return to main page - using history prop
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
        <h1>Add Session - Plymouth</h1>
        <SessionForm
          //weather={props.weather.color}
          lat={50.3755} 
          long={-4.143841}
          location={'Plymouth'}
          onSubmit={this.onSubmit}
        
        />
        
      </div>
    );
  }

}

//dispatch action call required in props. This is a 'Connect' method much like mapStateToProps
const mapDispatchToProps = (dispatch) => ({
  startAddSession: (session) => dispatch(startAddSession(session))
});

export default connect(undefined, mapDispatchToProps)(AddSession);