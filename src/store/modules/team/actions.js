import http from '~utils/http'

/**
 * 获取团队列表接口
 * @param res 入参
 */
export const getTeamList = req => (dispatch, getState) => http.get('/team/teamList', req).then((res) => {
    return res
})

/**
 * 删除团队接口
 * @param res 入参
 */
export const delTeam = req => (dispatch, getState) => http.post('/team/delTeam', req).then((res) => {
    return res
})