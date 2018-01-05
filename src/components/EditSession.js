import React from 'react';
import { connect } from 'react-redux'
import SessionForm from './SessionForm';
import { editSession, startRemoveSession } from '../actions/sessions-api';

//accessing the match params props. This has been injected via a dynamic URL
export class EditSession extends React.Component {
    // console.log('here is props');
    // console.log(props);

    onRemove = () => {
        console.log('clicking');
        this.props.startRemoveSession({id: this.props.session.id});
        this.props.history.push('/');
    }

    render(props){
        return (
            <div>
                Editing session with id of {this.props.match.params.id}
                <button onClick={
                    this.onRemove   
                    //props.dispatch(startRemoveSession({id: props.session.id}));
                    //props.history.push('/');
                }>Delete</button>
                <SessionForm 
                session={this.props.session}
                // lat={props.session.lat} 
                // long={props.session.long} 
                onSubmit={(session) => {
                    //console.log('Update', session);
                    //call and return home
                    props.dispatch(editSession(this.props.session.id, session));
                    props.history.push('/');
                }}
                />
            </div>  
        );
    }
}

//finding the relevants session
const mapStateToProps = (state, props) => {
    return {
        session: state.sessions.find((session) => {
            return session.id === props.match.params.id;
        })
    };
};

//setDispatchToProps
const mapDispatchToProps = (dispatch, props) => ({
    startRemoveSession: (data) => dispatch(startRemoveSession(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSession);