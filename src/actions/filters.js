//setLocationFilter
export const setLocationFilter = ( location = '') => ({
    type: 'SET_LOCATION_FILTER',
    location
});

//setLocationFilter
export const setTideFilter = ( tide = '') => ({
    type: 'SET_TIDE_FILTER',
    tide
});

//setLocationFilter
export const setNoteFilter = ( note = '') => ({
    type: 'SET_NOTE_FILTER',
    note
});

//sortByCatch
export const sortByCatch = () => ({
    type: 'SORT_BY_CATCH'
});