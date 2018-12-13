import * as actions from '../actions/actions';

const initialState = {
    dogs: [],
    savedDogs: [],
    preferences: {
      age: '',
      size: ''
    },
    position: 0,
    savedDogObjs: [],
    error: null
};

export const nbfReducer = (state=initialState, action) => {
    if (action.type === actions.UPDATE_PREFERENCES) {
        //send to API
        console.log(action.age);
        console.log(action.size);
    }
    else if (action.type === actions.ADD_DOG_SUCCESS) {
        return Object.assign({}, state, {
            savedDogs: action.savedDogs
        });
    }
    else if (action.type === actions.INCREMENT_POSITION) {
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
    else if (action.type === actions.UPDATE_AGE) {
        return Object.assign({}, state, {
          preferences: {
              ...state.preferences,
              age: action.age
          }
        });
    }
    else if (action.type === actions.UPDATE_SIZE) {
        return Object.assign({}, state, {
          preferences: {
              ...state.preferences,
              size: action.size
          }
        });
    }
    else if (action.type === actions.FETCH_DOGS_SUCCESS) {
        // let allDogs = action.dogs;
        // let savedDogs = state.auth.currentUser.savedDogs;
        // function isSaved(dog) {
        //     return !savedDogs.includes(dog.id);
        // };
        // const displayDogs = allDogs.filter(isSaved);
        return Object.assign({}, state, {
            dogs: action.dogs,
            error: null
        });
    }
    else if (action.type === actions.FETCH_DOGS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    else if (action.type === actions.FETCH_SAVED_DOGS_SUCCESS) {
        return Object.assign({}, state, {
            savedDogObjs: action.dogs
        });
    }
    return state;
};
