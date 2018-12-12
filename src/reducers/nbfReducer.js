import * as actions from '../actions/actions';

const initialState = {
    dogs: [
      {
        id: 1,
        name: 'Carl',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCw0jlf5A-EJwYWQ8yi0a8TyibY6Z4TvJ-pewFaG8A2AYJAmGw',
        age: 'Puppy',
        size: 'Large',
        link: 'www.aspca.org'
      },
      {
        id: 2,
        name: 'Woof',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCw0jlf5A-EJwYWQ8yi0a8TyibY6Z4TvJ-pewFaG8A2AYJAmGw',
        age: 'Mature',
        size: 'Small',
        link: 'www.aspca.org'
      },
      {
        id: 3,
        name: 'Warf',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCw0jlf5A-EJwYWQ8yi0a8TyibY6Z4TvJ-pewFaG8A2AYJAmGw',
        age: 'Elderly',
        size: 'Medium',
        link: 'www.aspca.org'
      },
      {
        id: 4,
        name: 'Spock',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCw0jlf5A-EJwYWQ8yi0a8TyibY6Z4TvJ-pewFaG8A2AYJAmGw',
        age: 'Puppy',
        size: 'Small',
        link: 'www.aspca.org'
      }
    ],
    savedDogs: [],
    preferences: {
      age: 'any',
      size: 'any'
    },
    position: 0,
    user: {
      username: 'testing',
      firstName: 'Test'
    }
};

export const nbfReducer = (state=initialState, action) => {
    if (action.type === actions.UPDATE_PREFERENCES) {
        //send to API
        console.log(action.age);
        console.log(action.size);
    }
    else if (action.type === actions.ADD_DOG) {
        return Object.assign({}, state, {
            savedDogs: [...state.savedDogs, action.dog]
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
    return state;
};
