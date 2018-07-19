import * as types from './types'
import http from '~utils/http'

/**
 * 获取小组列表接口
 * 当已经保存了小组列表了，则不需要重新获取
 * 当没有小组列表时候，保存小组列表，因为在其它列表中，会有筛选项，这边做保存，就不需要每一次都调接口获取了
 * @param res 入参
 */
export const getGroupList = req => (dispatch, getState) => {
    console.log(getState().Team)
    if (getState().Team.groupData) {
        return new Promise((resolve) => {
            resolve(getState().Team.groupData)
        })
    }

    return http.get('/team/teamList', req).then((res) => {
        dispatch({
            type: types.SAVE_GROUP_LIST,
            data: res
        })
        return res
    })
}
