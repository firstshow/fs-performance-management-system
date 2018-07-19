import http from '~utils/http'

/**
 * 获取绩效列表接口调用
 * @param res 入参
 */
export const getTotalPerformanceList = res => (dispatch, getState) => http.get('/performance/totalPerformanceList', res).then((res) => {
    return res
})

/**
 * 获取个人绩效详情列表接口调用
 * @param res 入参
 */
export const getPersonalPerformanceList = res => (dispatch, getState) => http.get('/performance/personalPerformanceList', res).then((res) => {
    return res
})

/**
 * 删除绩效
 * @param req 入参
 */
export const delPerformance = req => (dispatch, getState) => http.post('/performance/delPerformance', req).then((res) => {
    return res
})

/**
 * 获取个人绩效详情列表接口调用
 * @param res 入参
 */
export const getDimensionList = req => (dispatch, getState) => http.get('/performance/dimensionList', req).then((res) => {
    return res
})

/**
 * 删除绩效
 * @param req 入参
 */
export const delDimension = req => (dispatch, getState) => http.post('/performance/delDimension', req).then((res) => {
    return res
})