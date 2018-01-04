import React from 'react';
import { connect } from 'react-redux';
import { setLocationFilter } from '../actions/filters'

//onchange is required to change values. Error was displayed.
//e is the event, as with standard js.
//dispatch is on props thanks to connect.
const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.location} onChange={(e) => {
            props.dispatch(setLocationFilter(e.target.value));
        }}/> 
    </div>
);

//connect function, allows us to take store state and return it as a prop.
//easier to manage.
const mapStateToProps = (state) => {
    //console.log(state.filters);
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);