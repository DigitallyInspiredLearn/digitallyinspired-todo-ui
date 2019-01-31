/* eslint-disable default-case */
import {ADD_INPUT_TITLE, ADD_DASHBOARD} from '../index'

const initialState = {
    
        title: '',
        task: '',
        className: "block-add"
    
};
  
export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INPUT_TITLE: {
            return state;
        }
    }
    return state;
};