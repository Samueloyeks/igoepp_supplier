import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk';



const store = () => {
    return createStore(
        rootReducer,
        // persistedReducer,
        applyMiddleware(thunkMiddleware)
    )
};

export default store;