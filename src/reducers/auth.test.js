import authReducer from './auth';
import {setAuthToken, clearAuth, authRequest, authSuccess, authError} from '../actions/auth';

describe('authReducer', () => {
    const authToken = 'abcdefghijklmnop';
    const currentUser = {
        username: 'test',
        savedDogs: [],
        preferences: {
            age: 'any',
            size: 'any'
        },
        firstName: 'Test'
    };
    const error = 'An error occurred';

    it('Should set the initial state when nothing is passed in', () => {
        const state = authReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            authToken: null,
            currentUser: null,
            loading: false,
            error: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = authReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setAuthToken', () => {
        it('Should set the authToken', () => {
            let state;
            state = authReducer(state, setAuthToken(authToken));
            expect(state.authToken).toEqual(authToken);
        });
    });

    describe('clearAuth', () => {
        it('Should clear the authToken', () => {
            let state = {
                authToken: authToken,
                currentUser: currentUser
            };
            state = authReducer(state, clearAuth());
            expect(state.authToken).toBe(null);
            expect(state.currentUser).toBe(null);
        });
    });

    describe('authRequest', () => {
        it('Should set loading to true', () => {
            let state = {
                loading: false
            };
            state = authReducer(state, authRequest());
            expect(state.loading).toBe(true);
        });
    });

    describe('authSucces', () => {
        it('Should set loading to false and return user', () => {
            let state = {
                loading: true,
                currentUser: null
            };
            state = authReducer(state, authSuccess(currentUser));
            expect(state.loading).toBe(false);
            expect(state.currentUser).toEqual(currentUser);
        });
    });

    describe('authError', () => {
        it('Should set loading to false and set an error', () => {
            let state = {
                loading: true,
                error: null
            };
            state = authReducer(state, authError(error));
            expect(state.loading).toBe(false);
            expect(state.error).toEqual(error);
        });
    });
});
