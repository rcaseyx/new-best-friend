export const UPDATE_PREFERENCES = 'UPDATE_PREFERENCES';
export const updatePreferences = (age, size) => ({
    type: UPDATE_PREFERENCES,
    age,
    size
});

export const ADD_DOG = 'ADD_DOG';
export const addDog = dog => ({
    type: ADD_DOG,
    dog
});

export const INCREMENT_POSITION = 'INCREMENT_POSITION';
export const incrementPosition = () => ({
    type: INCREMENT_POSITION
});

export const RESET_POSITION = 'RESET_POSITION';
export const resetPosition = () => ({
    type: RESET_POSITION
});

export const UPDATE_AGE = 'UPDATE_AGE';
export const updateAge = (age, size) => ({
    type: UPDATE_AGE,
    age,
    size
});

export const UPDATE_SIZE = 'UPDATE_SIZE';
export const updateSize = (age, size) => ({
    type: UPDATE_SIZE,
    age,
    size
});
