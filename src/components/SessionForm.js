import React from 'react';
import moment from 'moment';
import SimpleMap from './Map';
import axios from 'axios';
import Chat from './Chat'
import './SessionForm.css'


//local component state necessary, the session isn't in the redux store until saved.
//retriving third party api data here. temp solution - create proxy calls via server for better security
export default class SessionForm extends React.Component {

   constructor(props) {
       super(props);

       this.state = {
            //if the session exists then use the props, if not use default
            note: props.session ? props.session.note : '',
            numberCaught: props.session ? props.session.numberCaught : 0,
            sessionStart: props.session ? props.session.sessionStart : moment().valueOf(),
            lat: props.session ? props.session.lat : '',
            long: props.session ? props.session.long : '',
            weatherDesc: props.session ? props.session.weatherDesc :'',
            tideTime: '',
            tideStatus: props.session ? props.session.tide : '',
            temp: props.session ? props.session.temperature : '',
            species: 'mackerel',
            catchToLogCount: 0
       }
       //console.log('session form state lats');
       //console.log(this.state.lat);
   }

    noteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
        //console.log(this.state.note)
    };

    catchCountChange = (e) => {
        const numberCaught = e.target.value;
        //regex set to ints, no letters
        if (numberCaught.match(/^\d*/)) {
            this.setState(() => ({ numberCaught }))
            console.log(this.state.numberCaught)
        }
    };

    onSubmit = (e) => {
        e.preventDefault()

        //could this be refactored as a factory? based on number in??

        if(this.state.numberCaught === 0 || !this.state.numberCaught){
            console.log('nothing caught - submitted');
            //submit with 0, set didCatch to false, set endtime
            //create session onSubmit prop that is passed down
            this.props.onSubmit({
                didCatch: false,
                numberCaught: 0,
                sessionStart: this.state.sessionStart,
                sessionEnd: moment().valueOf(),
                note: this.state.note,
                weatherDesc: this.state.weatherDesc,
                tide: this.state.tideStatus,
                temperature: this.state.temp,
                lat: this.props.lat,
                long: this.props.long,
                location: this.props.location
            })
            //redirect to dashboard
            
        } else {

            console.log('fish caught - submitted');
            //submit numberCaught and set didCatch to true
            //create session onSubmit prop that is passed down
            this.props.onSubmit({
                didCatch: true,
                numberCaught: this.state.numberCaught,
                sessionStart: this.state.sessionStart,
                sessionEnd: moment().valueOf(),
                note: this.state.note,
                weatherDesc: this.state.weatherDesc,
                tide: this.state.tideStatus,
                temp: this.state.temp,
                lat: this.props.lat,
                long: this.props.long,
                location: this.props.location

            })
        }
    }

    //request weather, use props passed down if new session or state if editing
    componentDidMount() {
        const lat= this.props.lat || this.state.lat; 
        const long= this.props.long || this.state.long;
        //`String text ${expression}`
        
        //will run when component is ready
        // Update weather
        //create a proxy server to carry out requests, rather than heroku app.
        
        //only run if new session
        if ( !this.props.weatherDesc ){
            // axios.get( `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/091b10e504d40b509cc0809dfdba898f/${lat},${long}` )
            //     .then( ( res ) => {
            //         //when returns run a render
            //         this.setState({
            //             weatherDesc: res.data.minutely.summary,
            //             temp: Math.round((res.data.currently.temperature - 32) * .5556)
            //         });
            //         //console.log(state.test);
            //     })
            //     .catch( ( err ) => {
            //         this.setState({
            //             weatherDesc: 'Oops',
            //             temp: 'Ooops'
            //         });
            //     });

                // axios.get( `https://www.worldtides.info/api?extremes&lat=50.461921&lon=-3.525315&key=4da92c80-97d1-4aec-ba57-856f2bc66532` )
                // .then( ( res ) => {
                //     //when returns run a render
                //     this.setState({
                //         tideTime: res.data.extremes[0].date.substr(11, 5),
                //         tideStatus: res.data.extremes[0].type.toLowerCase()
                //     });
                //     //console.log(state.test);
                // })
                // .catch( ( err ) => {
                //     this.setState({
                //         tideTime: 'Oops',
                //         tideStatus: 'Oops'
                //     });
                // });
            }
    }

    numberToLogChange = (e) => {
        const catchToLogCount = e.target.value;
        this.setState(() => ({ catchToLogCount }));
    };

    speciesToLog = (e) => {
        const species = e.target.value;
        this.setState(() => ({ species }));
    }

    logCatch() {
        //take species value - set state
        const species = this.state.species;
        //take number value - set state
        const numberToLogStr = this.state.catchToLogCount;
        const numberToLog = parseInt(numberToLogStr)
        this.setState((prevState) => ({
            numberCaught: prevState.numberCaught + numberToLog,
            species: species
        }));
        console.log('**************click', species, numberToLog);
    };

    //add conditional rendering on is/was a tide. Look at greater than or less than current time
    render() {
        return (
            <div>
               
                <h4>Session Summary</h4>
                    <br />
                <p>The temperature is currrently {this.state.temp}°C. {this.state.weatherDesc}</p>
                <p>The last tide was a {this.state.tideStatus} at {this.state.tideTime}</p>
                    <br />
                <h4>Catch Count: {this.state.numberCaught ? this.state.numberCaught : '0' }</h4>
                    <br />
                
                <div className="row">
                    <div className="col-md-4"> 
                        <form 
                            name="log"
                        >
                            <div>
                                <p><b>Record your catch</b></p>
                                <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Number to log"
                                    autoFocus
                                    value={this.state.catchToLogCount}
                                    onChange={this.numberToLogChange}
                                >
                                </input>
                                <select
                                    className="form-control"
                                    value={this.state.species}
                                    onChange={this.speciesToLog}
                                    name="species" value={this.state.species}>
                                        <option value="mackerel">Mackerel</option>
                                        <option value="bass">Bass</option>
                                        <option value="eel">Eel</option>
                                        <option value="whiting">Whiting</option>
                                </select>
                                <br />
                                <button style={{float:"right"}} className="btn logButton" type="button" onClick={this.logCatch.bind(this)}>Log</button>
                            </div>
                        </form>
                        
                        <br />
                        <br />

                        <form onSubmit={this.onSubmit}>
                            <p><b>Complete session</b></p>
                            <div className="form-group">
                                
                                <input 
                                    className="form-control"
                                    type="text"
                                    placeholder="Note"
                                    value={this.state.note}
                                    onChange={this.noteChange}
                                />

                                <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Caught"
                                    value={this.state.numberCaught}
                                    onChange={this.catchCountChange.bind(this)}
                                />

                                <br />

                                <button style={{float:"right"}} className="saveButton btn">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                <br/>
                <h5>Your catches are shared with others, and shown below</h5>
                <p>Show your support to others by writing a message</p>
                <Chat numberCaught={this.state.numberCaught} species={this.state.species} location={this.props.location}/>
                <SimpleMap lat={this.props.lat || this.state.lat} long={this.props.long || this.state.long}/>
            </div>
        )
    }
}