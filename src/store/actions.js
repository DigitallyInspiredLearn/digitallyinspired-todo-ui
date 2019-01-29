import {DELETE_DASHBOARD} from '../index'

export const deleteDashboard = (dashboard_id) => {
    console.log(dashboard_id)
    return {
        type: DELETE_DASHBOARD,
        payload: dashboard_id
    }
}
