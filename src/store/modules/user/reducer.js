import * as types from './types'

const localLoginData = JSON.parse(sessionStorage.getItem('loginData'))
export default (
    state = Object.assign({
        accessToken: '',
        username: '222',
        headImg: '',
        realName: '',
        flowerName: '',
        gender: '',
        phone: '',
        teamId: '',
        teamName: '',
        groupId: '',
        groupName: '',
        roleId: '',
        roleName: '',
        isJoin: '',
    }, localLoginData),
    action
) => {
    switch (action.type) {
        // 存储登陆后获取的用户信息
        case types.LOGIN_SUCCESS:
            // 将获取到的登陆数据存储在session中
            sessionStorage.setItem('loginData', JSON.stringify(action.data))
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}
