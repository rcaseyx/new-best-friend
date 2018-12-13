import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './errors';

export const UPDATE_PREFERENCES = 'UPDATE_PREFERENCES';
export const updatePreferences = (age, size) => ({
    type: UPDATE_PREFERENCES,
    age,
    size
});

export const ADD_DOG_SUCCESS = 'ADD_DOG_SUCCESS';
export const addDogSuccess = savedDogs => ({
    type: ADD_DOG_SUCCESS,
    savedDogs
});

export const ADD_DOG_ERROR = 'ADD_DOG_ERROR';
export const addDogError = error => ({
    type: ADD_DOG_ERROR,
    error
});

export const addDog = dog => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    const newSavedDogs = getState().auth.currentUser.savedDogs;
    newSavedDogs.push(dog);
    console.log(newSavedDogs);

    return fetch(`${API_BASE_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
            savedDogs: newSavedDogs
        }),
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({savedDogs}) => dispatch(addDogSuccess(savedDogs)))
        .catch(err => {
            dispatch(fetchDogsError(err));
        });
}

export const INCREMENT_POSITION = 'INCREMENT_POSITION';
export const incrementPosition = () => ({
    type: INCREMENT_POSITION
});

export const RESET_POSITION = 'RESET_POSITION';
export const resetPosition = () => ({
    type: RESET_POSITION
});

export const UPDATE_AGE = 'UPDATE_AGE';
export const updateAge = age => ({
    type: UPDATE_AGE,
    age
});

export const UPDATE_SIZE = 'UPDATE_SIZE';
export const updateSize = size => ({
    type: UPDATE_SIZE,
    size
});

export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const fetchDogsSuccess = dogs => ({
    type: FETCH_DOGS_SUCCESS,
    dogs
});

export const FETCH_DOGS_ERROR = 'FETCH_DOGS_ERROR';
export const fetchDogsError = error => ({
    type: FETCH_DOGS_ERROR,
    error
});

export const fetchDogs = (age, size) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/dogs/filtered/${age}/${size}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({dogs}) => dispatch(fetchDogsSuccess(dogs)))
        .catch(err => {
            dispatch(fetchDogsError(err));
        });
};
