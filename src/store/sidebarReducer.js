/* eslint-disable default-case */
import { SHOW_SIDEBAR,  HIDE_SIDEBAR, ADD_INPUT_TITLE, ADD_INPUT_TASK, ADD_DASHBOARD} from '../index'

const initialState = {
    inputTitle: '',
    inputTask: '',
    className: "block-add"
};
  
export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INPUT_TITLE: {
            return {...state, inputTitle: action.payload};
        }

        case ADD_INPUT_TASK: {
            return {...state, inputTask: action.payload};
        }

        case SHOW_SIDEBAR: {
            return {...state, className: "block-add current"};
        }

        case HIDE_SIDEBAR: {
            return {...state, className: "block-add"};
        }

        case ADD_DASHBOARD: {
            //return {...state, className: "block-add"};
        }
    }
    return state;
};