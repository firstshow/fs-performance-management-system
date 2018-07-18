import * as types from './types'
import http from '~utils/http'

/**
 * 登陆api
 * @param res 入参
 */
export const login = res => (dispatch, getState) => {
    const {username, password} = res
    return http.post('/user/login', {
        username,
        password
    }).then((res) => {
        dispatch({
            type: types.LOGIN_SUCCESS,
            username
        })
        return res
    })
}
