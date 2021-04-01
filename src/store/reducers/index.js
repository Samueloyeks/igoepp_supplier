import { combineReducers } from 'redux';

const { userReducer } = require('./userReducer');
const { alertReducer } = require('./alertReducer');



const rootReducer = combineReducers({
    user: userReducer,
    alert: alertReducer
});

export default rootReducer;