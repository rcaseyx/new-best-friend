import { createStore, applyMiddleware, combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken, loadCurrentUser} from './local-storage';
import authReducer from './reducers/auth';
import { nbfReducer } from './reducers/nbfReducer';
import {setAuthToken} from './actions/auth';
import {setCurrentUser} from './actions/users';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        data: nbfReducer
    }), composeWithDevTools(
          applyMiddleware(thunk)
));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

const currentUser = loadCurrentUser();
if (currentUser) {
    store.dispatch(setCurrentUser(currentUser));
}

export default store;
