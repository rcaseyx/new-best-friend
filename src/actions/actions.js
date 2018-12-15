import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './errors';

export const INCREMENT_POSITION = 'INCREMENT_POSITION';
export const incrementPosition = () => ({
    type: INCREMENT_POSITION
});

export const RESET_POSITION = 'RESET_POSITION';
export const resetPosition = () => ({
    type: RESET_POSITION
});

export const API_FETCH = 'API_FETCH';
export const apiFetch = () => ({
    type: API_FETCH
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
    dispatch(apiFetch());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/dogs/filtered/${age}/${size}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({dogs}) => dispatch(filterDogs(dogs)))
        .catch(err => {
            dispatch(fetchDogsError(err));
        });
};

export const filterDogs = dogs => (dispatch, getState) => {
    const savedDogs = getState().auth.currentUser.savedDogs;
    let savedDogIds = [];
    savedDogs.forEach(savedDog => savedDogIds.push(savedDog._id));
    const filteredDogs = dogs.filter(dog => !savedDogIds.includes(dog.id));
    dispatch(fetchDogsSuccess(filteredDogs));
}

export const FETCH_SAVED_DOGS_SUCCESS = 'FETCH_SAVED_DOGS_SUCCESS';
export const fetchSavedDogsSuccess = dogs => ({
    type: FETCH_SAVED_DOGS_SUCCESS,
    dogs
});

export const FETCH_SAVED_DOGS_ERROR = 'FETCH_SAVED_DOGS_ERROR';
export const fetchSavedDogsError = error => ({
    type: FETCH_SAVED_DOGS_ERROR,
    error
});

export const fetchSavedDogs = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const id = getState().auth.currentUser.id;
    return fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(fetchSavedDogsSuccess(res.savedDogs)))
        .catch(err => {
            dispatch(fetchSavedDogsError(err));
        });
};
