import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../actions/auth';

import * as actions from '../actions/users';

const initialState = {
    authToken: null,
    currentUser: null,
    loading: false,
    error: null
};

export default function reducer(state=initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    }
    else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    }
    else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser
        });
    }
    else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    else if (action.type === actions.UPDATE_AGE) {
        return Object.assign({}, state, {
            currentUser: {
                ...state.currentUser,
                preferences: {
                    ...state.currentUser.preferences,
                    age: action.age
                }
            },
            loading: false
        });
    }
    else if (action.type === actions.UPDATE_SIZE) {
        return Object.assign({}, state, {
            currentUser: {
                ...state.currentUser,
                preferences: {
                    ...state.currentUser.preferences,
                    size: action.size
                }
            },
            loading: false
        });
    }
    else if (action.type === actions.API_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === actions.UPDATE_PREFERENCES_SUCCESS) {
        return Object.assign({}, state, {
            currentUser: {
                ...state.currentUser,
                preferences: action.preferences
            },
            loading: false
        });
    }
    else if (action.type === actions.UPDATE_PREFERENCES_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    else if (action.type === actions.ADD_DOG_SUCCESS) {
        return Object.assign({}, state, {
            currentUser: {
                ...state.currentUser,
                savedDogs: action.savedDogs
            },
            loading: false
        });
    }
    else if (action.type === actions.ADD_DOG_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    else if (action.type === actions.SET_CURRENT_USER) {
        const user = JSON.parse(action.user);
        return Object.assign({}, state, {
            currentUser: user,
            loading: false
        });
    }
    return state;
}
