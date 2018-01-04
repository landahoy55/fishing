const defaultState = {weather: 'dry and lovely'};

const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_WEATHER': //using array spread to add on to array
            return {
                ...state,
                weather: action.weather
            };
        default:
        return state;
    };
};

export default weatherReducer;