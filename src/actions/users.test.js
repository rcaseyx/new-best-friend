import {
    API_REQUEST,
    apiRequest,
    UPDATE_PREFERENCES_SUCCESS,
    updatePreferencesSuccess,
    UPDATE_PREFERENCES_ERROR,
    updatePreferencesError,
    ADD_DOG_SUCCESS,
    addDogSuccess,
    ADD_DOG_ERROR,
    addDogError,
    UPDATE_AGE,
    updateAge,
    UPDATE_SIZE,
    updateSize,
    SET_CURRENT_USER,
    setCurrentUser
} from './users';

describe('apiRequest', () => {
    it('Should return the action', () => {
        const action = apiRequest();
        expect(action.type).toEqual(API_REQUEST);
    });
});

describe('updatePreferencesSuccess', () => {
    it('Should return the action', () => {
        const preferences = {
            age: 'any',
            size: 'any'
        };
        const action = updatePreferencesSuccess(preferences);
        expect(action.type).toEqual(UPDATE_PREFERENCES_SUCCESS);
        expect(action.preferences).toEqual(preferences);
    });
});

describe('updatePreferencesError', () => {
    it('Should return the action', () => {
        const error = 'An error occurred';
        const action = updatePreferencesError(error);
        expect(action.type).toEqual(UPDATE_PREFERENCES_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('addDogSuccess', () => {
    it('Should return the action', () => {
        const savedDogs = [];
        const action = addDogSuccess(savedDogs);
        expect(action.type).toEqual(ADD_DOG_SUCCESS);
        expect(action.savedDogs).toEqual(savedDogs);
    });
});

describe('addDogError', () => {
    it('Should return the action', () => {
        const error = 'An error occurred';
        const action = addDogError(error);
        expect(action.type).toEqual(ADD_DOG_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('updateAge', () => {
    it('Should return the action', () => {
        const age = 'any';
        const action = updateAge(age);
        expect(action.type).toEqual(UPDATE_AGE);
        expect(action.age).toEqual(age);
    });
});

describe('updateSize', () => {
    it('Should return the action', () => {
        const size = 'any';
        const action = updateSize(size);
        expect(action.type).toEqual(UPDATE_SIZE);
        expect(action.size).toEqual(size);
    });
});

describe('setCurrentUser', () => {
    it('Should return the action', () => {
        const user = {
            username: 'test',
            savedDogs: [],
            preferences: {
                age: 'any',
                size: 'any'
            },
            firstName: 'Test'
        };
        const action = setCurrentUser(user);
        expect(action.type).toEqual(SET_CURRENT_USER);
        expect(action.user).toEqual(user);
    });
});
