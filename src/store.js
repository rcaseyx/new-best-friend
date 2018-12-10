import { createStore } from 'redux';

import { nbfReducer } from './reducers';

export default createStore(nbfReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
