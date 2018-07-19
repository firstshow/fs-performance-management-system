import * as types from './types'

export default (
    state = {

    },
    action
) => {
    switch (action.type) {
        case types.SAVE_DIMENSION_LIST:
            return {
                ...state,
            }
        default:
            return state
    }
}
