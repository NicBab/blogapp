export const loginStart = () => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
})

export const updateStart = (user) => ({
    type: "UPDATE_START",
    payload: user,
})

export const updateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
})

export const updateFailure = () => ({
    type: "UPDATE_FAILURE"
})

export const Logout = () => ({
    type: "LOGOUT"
})