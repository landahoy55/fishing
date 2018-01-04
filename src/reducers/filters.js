const filtersDefault = {
    location: '', //by town
    note: '', //in notes
    tide: '', //low or high
    didCatch: undefined
};

const filtersReducer = (state = filtersDefault, action) => {
    switch (action.type) {
        case 'SET_LOCATION_FILTER':
            return { //using object spread opeator, create a new object from an existing one
                ...state,
                location: action.location
            };
        case 'SET_TIDE_FILTER':
            return { 
                ...state,
                tide: action.tide
            };
        case 'SET_NOTE_FILTER':
            return { 
                ...state,
                note: action.note
            };
        case 'SORT_BY_CATCH': 
            return {
                ...state,
                tide: '',
                note: '',
                location: '',
                didCatch: true
            };
        default: 
            return state;
    }
};

export default filtersReducer;