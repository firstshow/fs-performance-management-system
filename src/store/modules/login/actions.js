import * as types from './types'

export default {
    login: res => (dispatch, getState) => {
        const { username } = res
        console.log(username)
        dispatch({
            type: types.LOGIN_SUCCESS,
            username
        })
    },
}
