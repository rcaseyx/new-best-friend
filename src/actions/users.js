import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './errors';
import {saveCurrentUser} from '../local-storage';

export const signupUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} =  err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const API_REQUEST = 'API_REQUEST';
export const apiRequest = () => ({
    type: API_REQUEST
});

export const UPDATE_PREFERENCES_SUCCESS = 'UPDATE_PREFERENCES_SUCCESS';
export const updatePreferencesSuccess = preferences => ({
    type: UPDATE_PREFERENCES_SUCCESS,
    preferences
});

export const UPDATE_PREFERENCES_ERROR = 'UPDATE_PREFERENCES_ERROR';
export const updatePreferencesError = error => ({
    type: UPDATE_PREFERENCES_ERROR,
    error
});

export const updatePreferences = preferences => (dispatch, getState) => {
    dispatch(apiRequest());
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;
    return fetch(`${API_BASE_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({preferences}),
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(updatePreferencesSuccess(res.preferences)))
        .catch(err => {
            dispatch(updatePreferencesError(err));
        });
};

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

    return fetch(`${API_BASE_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({
            savedDogs: newSavedDogs
        }),
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(addDogSuccess(res.savedDogs)))
        .catch(err => {
            dispatch(addDogError(err));
        });
};

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

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user
});

export const updateLocalUser = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;

    return fetch(`${API_BASE_URL}/users/${userId}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => saveCurrentUser(res))
        .catch(err => {
            dispatch(addDogError(err));
        });
};

export const deleteAccount = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const userId = getState().auth.currentUser.id;

    return fetch(`${API_BASE_URL}/users/${userId}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .catch(err => {
            console.error(err);
        });
};
