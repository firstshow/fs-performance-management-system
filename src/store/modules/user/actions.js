import * as types from './types'
import http from '~utils/http'

/**
 * 登陆api
 * @param res 入参
 */
export const login = req => (dispatch, getState) => {
    return http.post('/user/login', req).then((res) => {
        if (res.resultCode === 200) {
            dispatch({
                type: types.LOGIN_SUCCESS,
                data: res.data
            })
        }
        return res
    })
}
