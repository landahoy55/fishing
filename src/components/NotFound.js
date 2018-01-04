import React from 'react';
import { Link } from 'react-router-dom';

//Using link to avoid full page refresh - clientside routing
//href should be used for external links
const NotFound = () => (
    <div>
        404! - <Link to="/">Go home</Link>
        <button type="button" className="btn btn-primary">Primary</button>
    </div>
);

export default NotFound

