import React from 'react';
import io from 'socket.io-client';

export default class Chat extends React.Component {

    //chat function will be store in messages array
    //set default in constructor - construct only happens once.
    constructor(props){
        super(props);
        
        this.state = { 
            messages: [],
            noCaught: 0
        }
        //console.log(props);
    };

    //numberCaught is displaying an update here.
    //cannot set state, but able to read.
    componentWillUpdate(){
        console.log('num caught:', this.props.numberCaught);
    };
    
   componentDidUpdate(prevProps) {

    if (this.props.numberCaught !== prevProps.numberCaught) {
        console.log('Changed props');
        const body = `${this.props.numberCaught} ${this.props.species} just caught in ${this.props.location}`;
        //console.log(body);
        const message = {
            body,
            from: 'Fisher'
        }
        this.setState({ messages: [message, ...this.state.messages]});
        this.socket.emit('message', body);
    }

    //console.log('Did update', this.props.numberCaught);

    // const body = this.props.numberCaught;
    //     console.log(body);
    //     const message = {
    //         body,
    //         from: 'Me'
    //     }
    //     this.setState({ messages: [message, ...this.state.messages]});
    //     this.socket.emit('message', body);
   };

    componentDidMount() {
        this.socket = io('https://stormy-temple-81926.herokuapp.com/');
        this.socket.on('message', message => {
            this.setState({ messages: [message, ...this.state.messages]});
        })
    }

    //called each time a key is pressed
    handleSubmit = (e) => {
        
        const body = e.target.value;

        //on enter, and when body has value
        if (e.keyCode === 13 && body) {
            console.log(body);
            const message = {
                body,
                from: 'Fisher'
            }
            this.setState({ messages: [message, ...this.state.messages]});
            this.socket.emit('message', body);
            e.target.value = '';
        }

        //send text on enter.
        // const body = e.target.value;
        // if (e.keyCode === 13 && body) {
        //     const message = {
        //         body,
        //         from: 'Me'
        //     }
        //     this.setState({ messages: [message, ...this.state.messages]});
        //     this.socket.emit('message', body);
        //     e.target.value = '';
        // }
    }

    //messages stateless component created by mapping over the messages state
    render(){

        const messages = this.state.messages.map((message, index) => {
            const divStyle = {listStyleType: 'none'}
            return <li style={divStyle} key={index}><b>{message.from} </b>{message.body}</li>
        });

        return (
            <div className="container">
                <div className="col-md-4">
                    <br />
                    <input className="form-control"type='text' placeholder='Enter a message...' onKeyUp={this.handleSubmit} /> 
                    <br />

                    {messages}
                
                    <br />
                </div>
            </div>
        )
    }
}
