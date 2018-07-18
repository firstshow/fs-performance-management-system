import * as types from './types'
import http from '~utils/http'

/**
 * 登陆api
 * @param res 入参
 */
export const getTotalPerformanceList = res => (dispatch, getState) => {
    return http.get('/performance/totalPerformanceList', res).then((res) => {
        return res
    })
}
