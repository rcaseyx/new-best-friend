import * as actions from '../actions/actions';

const initialState = {
    dogs: [],
    savedDogs: [],
    position: 0,
    savedDogObjs: [],
    error: null,
    updating: false
};

export const nbfReducer = (state=initialState, action) => {
    if (action.type === actions.INCREMENT_POSITION) {
        const position = state.position +1;
        return Object.assign({}, state, {
            position
        });
    }
    else if (action.type === actions.RESET_POSITION) {
        const position = 0;
        return Object.assign({}, state, {
          position
        });
    }
    else if (action.type === actions.API_FETCH) {
        return Object.assign({}, state, {
            updating: true,
            error: null
        });
    }
    else if (action.type === actions.FETCH_DOGS_SUCCESS) {
        return Object.assign({}, state, {
            dogs: action.dogs,
            updating: false,
            error: null
        });
    }
    else if (action.type === actions.FETCH_DOGS_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            updating: false
        });
    }
    else if (action.type === actions.FETCH_SAVED_DOGS_SUCCESS) {
        return Object.assign({}, state, {
            savedDogObjs: action.dogs
        });
    }
    return state;
};
