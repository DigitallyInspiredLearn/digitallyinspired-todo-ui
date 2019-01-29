/* eslint-disable default-case */
import {DELETE_DASHBOARD} from '../index'

const initialState = {
    dashboard_id: 1,
    title: 'title1',
    tasks: [
      {
        task_id: "1234",
        selected: false,
        name: "task1",
      }
    ],
};
  
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_DASHBOARD: {
            return state.filter(i => i.dashboard_id !== action.dashboard_id);
        }


    }
    return state;
};