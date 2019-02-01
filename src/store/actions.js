// import { DELETE_DASHBOARD, 
//     CHANGE_DASHBOARD_TITLE, 
//     DELETE_TASK, ADD_TASK, 
//     CHANGE_TASK_NAME, 
//     CHANGE_TASK_SELECTED,
//     SHOW_SIDEBAR,
//     HIDE_SIDEBAR,
//     ADD_INPUT_TITLE,
//     ADD_INPUT_TASK,
//     ADD_DASHBOARD
// } from '../index'


// export const deleteDashboard = (dashboard_id) => {
//     console.log("ACTION_DELETE_DASHBOARD ID:"+dashboard_id)
//     return {
//         type: DELETE_DASHBOARD,
//         payload: dashboard_id
//     }
// }

// export const changeDashboardTitle = (dashboard_id, newTitle) => {
//     console.log("ACTION_CHANGE_DASHBOARD_TITLE ID:"+dashboard_id+" New Title: "+newTitle)
//     return {
//         type: CHANGE_DASHBOARD_TITLE,
//         payload: {
//             id: dashboard_id,
//             title: newTitle
//         }
//     }
// }

// export const deleteTask = (dashboard_id, task_id) => {
//     console.log("ACTION_DELETE_TASK ID:"+dashboard_id+" TASK_ID: "+task_id)
//     return {
//         type: DELETE_TASK,
//         payload: {
//             dashboard_id: dashboard_id,
//             task_id: task_id
//         }
//     }
// }

// export const addTask = (dashboard_id, e) => {
//     console.log("ACTION_ADD_TASK ID:"+ dashboard_id +" NAME: " + e.target.value)
//     let name = e.target.value ;
//     e.target.value = "";
//     return {
//         type: ADD_TASK,
//         payload: {
//             dashboard_id: dashboard_id,
//             name: name
//         }
//     }
// }

// export const changeTaskName = (dashboard_id, task_id, newName) => {
//     console.log("ACTION_CHANGE_TASK_NAME ID: "+dashboard_id+"TASK_ID: "+task_id+" New Title: "+ newName)
//     return {
//         type: CHANGE_TASK_NAME,
//         payload: {
//             dashboard_id: dashboard_id,
//             task_id: task_id,
//             name: newName
//         }
//     }
// }

// export const changeTaskSelected = (dashboard_id, task_id, value) => {
//     console.log("ACTION_CHANGE_TASK_SELECTED ID: "+dashboard_id+"TASK_ID: "+task_id+" New Value: "+ value)
//     return {
//         type: CHANGE_TASK_SELECTED,
//         payload: {
//             dashboard_id: dashboard_id,
//             task_id: task_id,
//             selected: value
//         }
//     }
// }

// export const showSidebar = (className) => {
//     console.log("ACTION_SHOW_SIDEBAR"+className)
//     return {
//         type: SHOW_SIDEBAR,
//         payload: className
//     }
// }

// export const hideSidebar = (className) => {
//     console.log("ACTION_HIDE_SIDEBAR"+className)
//     return {
//         type: HIDE_SIDEBAR,
//         payload: className
//     }
// }

// export const addInputTitle = (title) => {
//     console.log("ACTION_ADD_INPUT_TITLE: "+title)
//     return {
//         type: ADD_INPUT_TITLE,
//         payload: title
//     }
// }

// export const addInputTask = (task) => {
//     console.log("ACTION_ADD_INPUT_TASK: "+task)
//     return {
//         type: ADD_INPUT_TASK,
//         payload: task
//     }
// }

// export const addDashboard = (title, task) => {
//     console.log("ACTION_ADD_DASHBOARD: TITLE"+title+"TASK: "+task)
//     return {
//         type: ADD_DASHBOARD,
//         payload: {
//             title: title,
//             task: task
//         }
//     }
// }