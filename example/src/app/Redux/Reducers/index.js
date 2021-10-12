import {combineReducers} from "redux";
import {sidebarCollapseReducer} from "./SidebarCollapseReducer";

export const reducers = combineReducers({
    sidebarCollapse: sidebarCollapseReducer,
})