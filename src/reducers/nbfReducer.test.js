import {nbfReducer} from './nbfReducer';
import {incrementPosition, resetPosition, apiFetch, fetchDogsSuccess} from '../actions/actions';

describe('nbfReducer', () => {
    const dog1 = {
        name: 'Test',
        age: 'puppy',
        size: 'large'
    }

    const dog2 = {
        name: 'Test2',
        age: 'mature',
        size: 'small'
    }

    const dogs = [dog1, dog2];

    it('Should set the initial state when nothing is passed in', () => {
        const state = nbfReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
          dogs: [],
          savedDogs: [],
          position: 0,
          savedDogObjs: [],
          error: null,
          updating: false
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = nbfReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('incrementPosition', () => {
        it('Should increment the position', () => {
            let state;
            state = nbfReducer(state, incrementPosition());
            expect(state.position).toEqual(1);
        });
    });

    describe('resetPosition', () => {
        it('Should reset the position', () => {
            let state = {
              position: 5
            }
            state = nbfReducer(state, resetPosition());
            expect(state.position).toEqual(0);
        });
    });

    describe('apiFetch', () => {
        it('Should set updating to true', () => {
            let state;
            state = nbfReducer(state, apiFetch());
            expect(state.updating).toBe(true);
        });
    });

    describe('fetchDogsSuccess', () => {
        it('Should return dogs and set updating to false', () => {
            let state = {
              updating: true
            }
            state = nbfReducer(state, fetchDogsSuccess(dogs));
            expect(state.updating).toBe(false);
            expect(state.dogs).toEqual(dogs);
        });
    });
});
