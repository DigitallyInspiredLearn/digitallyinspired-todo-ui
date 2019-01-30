export const NEW_DASBOARD_TITLE_TEXT = 'NEW_DASBOARD_TITLE_TEXT';
export const NEW_DASBOARD_TASK_TEXT = 'NEW_DASBOARD_TASK_TEXT';
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';


export const showSidebar = active => ({
    type: SHOW_SIDEBAR,
    payload: active
});

export const closeSidebar = active => ({
    type: CLOSE_SIDEBAR,
    payload: active
});

export const changeTitle = nameTitle => ({
    type: NEW_DASBOARD_TITLE_TEXT,
    payload: nameTitle
});

export const changeTask = nameTask => ({
    type: NEW_DASBOARD_TASK_TEXT,
    payload: nameTask
});