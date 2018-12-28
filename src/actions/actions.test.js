import {
    INCREMENT_POSITION,
    incrementPosition,
    RESET_POSITION,
    resetPosition,
    API_FETCH,
    apiFetch,
    FETCH_DOGS_SUCCESS,
    fetchDogsSuccess,
    FETCH_DOGS_ERROR,
    fetchDogsError,
    filterDogs,
    FETCH_SAVED_DOGS_SUCCESS,
    fetchSavedDogsSuccess,
    FETCH_SAVED_DOGS_ERROR,
    fetchSavedDogsError,
    fetchSavedDogs
} from './actions';

import API_BASE_URL from '../config';

describe('incrementPosition', () => {
    it('Should return the action', () => {
        const action = incrementPosition();
        expect(action.type).toEqual(INCREMENT_POSITION);
    });
});

describe('resetPosition', () => {
    it('Should return the action', () => {
        const action = resetPosition();
        expect(action.type).toEqual(RESET_POSITION);
    });
});

describe('apiFetch', () => {
    it('Should return the action', () => {
        const action = apiFetch();
        expect(action.type).toEqual(API_FETCH);
    });
});

describe('fetchDogsSuccess', () => {
    it('Should return the action', () => {
        const dogs = [];
        const action = fetchDogsSuccess(dogs);
        expect(action.type).toEqual(FETCH_DOGS_SUCCESS);
        expect(action.dogs).toEqual(dogs);
    });
});

describe('fetchDogsError', () => {
    it('Should return the action', () => {
        const error = 'An error occurred';
        const action = fetchDogsError(error);
        expect(action.type).toEqual(FETCH_DOGS_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('fetchSavedDogsSuccess', () => {
    it('Should return the action', () => {
        const dogs = [];
        const action = fetchSavedDogsSuccess(dogs);
        expect(action.type).toEqual(FETCH_SAVED_DOGS_SUCCESS);
        expect(action.dogs).toEqual(dogs);
    });
});

describe('fetchSavedDogsError', () => {
    it('Should return the action', () => {
        const error = 'An error occurred';
        const action = fetchSavedDogsError(error);
        expect(action.type).toEqual(FETCH_SAVED_DOGS_ERROR);
        expect(action.error).toEqual(error);
    });
});
