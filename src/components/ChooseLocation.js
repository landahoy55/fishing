import React from 'react';
import { Link } from 'react-router-dom';

//component to choose location - replace with navigator
const ChooseLocation = (props) => {

    const hello = () => {
        console.log('triggered on click')
    };
    
    console.log(props);

    return (
        <div>
            <h2>Choose a location</h2>
            <Link to="/torquay" onClick={hello}><h5>Torquay</h5></Link>
            <Link to="/exmouth"><h5>Exmouth</h5></Link>
            <Link to="/plymouth"><h5>Plymouth</h5></Link>
        </div>
    )
};

export default ChooseLocation;