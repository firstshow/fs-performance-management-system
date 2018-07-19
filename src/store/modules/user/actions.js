import * as types from './types'
import http from '~utils/http'

/**
 * 登陆api
 * @param res 入参
 */
export const login = req => (dispatch, getState) => http.post('/user/login', req).then((res) => {
    if (res.resultCode === 200) {
        dispatch({
            type: types.LOGIN_SUCCESS,
            data: res.data
        })
    }
    return res
})

/**
 * 获取用户列表接口
 * @param req
 */
export const getUserList = req => (dispatch, getState) => http.get('/user/userList', req).then((res) => {
    return res
})

/**
 * 删除用户接口
 * @param req
 */
export const delUser = req => (dispatch, getState) => http.post('/user/delUser', req).then((res) => {
    return res
})