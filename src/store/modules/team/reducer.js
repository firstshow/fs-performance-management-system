import * as types from './types'

export default (
    state = {
        username: '222',
        groupData: null
    },
    action
) => {
    switch (action.type) {
        case types.SAVE_GROUP_LIST:
            console.log(action)
            return {
                ...state,
                groupData: action.data
            }
        default:
            return state
    }
}
