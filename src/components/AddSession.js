import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { startAddSession } from '../actions/sessions-api';

//import * as weatherActions from '../actions/weather';

//send result to form.
//onsubmit prop added to session form - this component is triggering the submit.

export class AddSession extends React.Component {

  onSubmit = (session) => {
    //saving to database.
    this.props.startAddSession(session);
    //return to main page - using history prop
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
        <h2>Session - Torquay</h2>
        <hr />
        <SessionForm
          //weather={props.weather.color}
          lat={50.4619} 
          long={-3.5253}
          location={'Torquay'}
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


//refactor to class component to break out onSubmit and to attach connect
// const AddSession = (props) => {

//   return (
//       <div>
//         <h1>Add Session - Torquay</h1>
//         <SessionForm
//           //weather={props.weather.color}
//           lat={50.4619} 
//           long={-3.5253}
          
//           onSubmit={(session) => {
//           props.dispatch(addSession(session))
//           //redirect
//           props.history.push('/');
//         }}
//         />
        
//       </div>
//   );
// }

// //use if weather is updated at action level - currently being updated on mount
// const mapStateToProps = (state) => {
//   return {
//     weather: state.weather
//   }
// };

// export default connect()(AddSession);