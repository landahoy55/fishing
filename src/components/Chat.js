import React from 'react';
import ReactDOM from 'react-dom';
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
        console.log(props);
    };

    //numberCaught is displaying an update here.
    //cannot set state, but able to read.
    componentWillUpdate(){
        console.log('num caught:', this.props.numberCaught);
    };

   componentDidUpdate(prevProps) {

    if (this.props.numberCaught !== prevProps.numberCaught) {
        console.log('Changed props');
        const body = `${this.props.numberCaught} ${this.props.species} were just caught in ${this.props.location}`;
        console.log(body);
        const message = {
            body,
            from: 'Me'
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
        this.socket = io('http://localhost:3001/');
        this.socket.on('message', message => {
            this.setState({ messages: [message, ...this.state.messages]});
        })
    }

    handleSubmit = (e) => {
        
        const body = e.target.value;

        if (e.keyCode === 13 && body) {
            console.log(body);
            const message = {
                body,
                from: 'Me'
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

    render(){
        const messages = this.state.messages.map((message, index) => {
            const divStyle = {listStyleType: 'none'}
            return <li style={divStyle} key={index}><b>{message.from} </b>{message.body}</li>
        });

        return (
            <div>
                <h1>CHAT</h1>
                <input type='text' placeholder='Enter a message...' onKeyUp={this.handleSubmit} /> 
                {messages}
            </div>
        )
    }
}
