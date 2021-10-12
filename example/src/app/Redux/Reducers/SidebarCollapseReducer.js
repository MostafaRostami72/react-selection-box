import {sidebarCollapseActionsTypes} from "../Actions/SidebarCollapseActions";

const defaultState = {
    collapsed: false,
}

export function sidebarCollapseReducer(state = defaultState, action) {
    switch (action.type) {
        case sidebarCollapseActionsTypes.SIDEBAR_TOGGLE:
            return {
                ...state,
                collapsed: action.payload.toggle
            }

        default:
            return state
    }
}