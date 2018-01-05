import React from 'react';
import { Link } from 'react-router-dom';

//component to choose location - replace with navigator
const ChooseLocation = (props) => {

    const test = () => {
        console.log('triggered on click')
    };
    
    console.log(props);

    return (
        <div>
            <h3>Choose a location</h3>
            <Link to="/torquay" onClick={test}><h3>Torquay</h3></Link>
            <Link to="/exmouth"><h3>Exmouth</h3></Link>
            <Link to="/plymouth"><h3>Plymouth</h3></Link>
        </div>
    )
};

export default ChooseLocation;