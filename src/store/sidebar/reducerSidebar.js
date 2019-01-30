import
{
    SHOW_SIDEBAR,
    CLOSE_SIDEBAR,
    NEW_DASBOARD_TITLE_TEXT,
    NEW_DASBOARD_TASK_TEXT
} from "./actionSidebar";

const sidebarState = {
    inputTitle: '',
    inputTask: '',
    display: false
};

export const sidebarReducer = (state = sidebarState, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR: {
            return {...state, display: action.payload}
        }
        case CLOSE_SIDEBAR: {
            return {...state, display: action.payload}
        }
        case NEW_DASBOARD_TITLE_TEXT: {
            return {...state, inputTitle: action.payload}
        }
        case NEW_DASBOARD_TASK_TEXT: {
            return {...state, inputTask: action.payload}
        }
        default:
            return state
    }
};