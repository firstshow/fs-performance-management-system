import * as types from './types'

export default (
    state = {
        username: '222',
        password: ''
    },
    action
) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            console.log(action)
            return {
                ...state,
                username: action.username
            }
        default:
            return state
    }
}
