import { userConstants } from '../constants';
import { alertActions } from './alertActions';
import { userService } from '../../services';



export const userActions = {
    login,
    signup,
    forgotPassword,
    logout
};

function login(user) {
    return dispatch => {
        dispatch(request(user));

        userService.login(user)
            .then(
                resp => {
                    if (resp && resp.data) {
                        const userData = {
                            email: resp.data.user.email,
                            fullName: resp.data.user.fullName,
                            phone: resp.data.user.phone,
                            passport: resp.data.user.passport,
                            signature: resp.data.user.signature,
                            id: resp.data.user._id
                        }
                        const userToken = resp.token
                        dispatch(success(userData, userToken));
                    } else { 
                        dispatch(failure('error'));
                        dispatch(alertActions.error('Error'));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            ).catch(ex => {
                dispatch(failure(ex.toString()));
                dispatch(alertActions.error(ex.toString()));
            })
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(data, token) { return { type: userConstants.LOGIN_SUCCESS, data, token } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


function signup(user) {
    return dispatch => {
        dispatch(request(user));

        userService.signup(user)
            .then(
                resp => {
                    if (resp && resp.data) {
                        dispatch(alertActions.success('Registration successful'));
                        const userData = {
                            email: resp.data.user.email,
                            fullName: resp.data.user.fullName,
                            phone: resp.data.user.phone,
                            passport: resp.data.user.passport,
                            signature: resp.data.user.signature,
                            id: resp.data.user._id
                        }
                        const userToken = resp.token
                        dispatch(success(userData, userToken));
                    } else {
                        dispatch(failure('error'));
                        dispatch(alertActions.error('Error'));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            ).catch(ex => {
                dispatch(failure(ex.toString()));
                dispatch(alertActions.error(ex.toString()));
            })
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(data, token) { return { type: userConstants.REGISTER_SUCCESS, data, token } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function forgotPassword(data) {
    return dispatch => {
        dispatch(request(data));

        userService.forgotPassword(data)
            .then(
                user => {
                    if (user && user.data) {
                        console.log(user.data)
                        dispatch(success());
                    } else {
                        dispatch(failure('error'));
                        dispatch(alertActions.error('Error'));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            ).catch(ex => {
                dispatch(failure(ex.toString()));
                dispatch(alertActions.error(ex.toString()));
            })
    };

    function request(user) { return { type: userConstants.RESET_REQUEST, user } }
    function success(user) { return { type: userConstants.RESET_SUCCESS, user } }
    function failure(error) { return { type: userConstants.RESET_FAILURE, error } }
}

function logout() {
    return dispatch => {
        userService.logout()
            .then(() => {
                // const store = configureStore();
                // persistStore(store).purge();
                dispatch(success())
            }
            )
    };

    function success() { return { type: userConstants.LOGOUT_SUCCESS } }
}





