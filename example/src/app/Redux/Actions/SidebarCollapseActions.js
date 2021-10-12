export const sidebarCollapseActionsTypes = {
    SIDEBAR_TOGGLE: 'sidebar_toggle'
}

export function sidebarCollapseAction(toggle) {
    return {
        type: sidebarCollapseActionsTypes.SIDEBAR_TOGGLE,
        payload: {
            toggle: toggle
        }
    }
}