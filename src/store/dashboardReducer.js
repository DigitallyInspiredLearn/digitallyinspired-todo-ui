/* eslint-disable default-case */
import { 
    DELETE_DASHBOARD, 
    CHANGE_DASHBOARD_TITLE, 
    DELETE_TASK, 
    ADD_TASK, 
    CHANGE_TASK_NAME,
    CHANGE_TASK_SELECTED
} from '../index'

const generateId = () => {
    return Math.floor(Math.random() * 1000000);
  };

const initialState = {
    data: [
        {
            dashboard_id: generateId(),
            title: 'title1',
            tasks: [
                {
                    task_id: generateId(),
                    selected: false,
                    name: "task11",
                },
                {
                    task_id: generateId(),
                    selected: false,
                    name: "task12",
                }
            ],
            
        },
        {
            dashboard_id: generateId(),
            title: 'title2',
            tasks: [
                {
                    task_id: generateId(),
                    selected: true,
                    name: "task21",
                }
            ],
        }
    ]
};
  
export const dashboardReducer = (state = initialState, action) => {   
    switch (action.type) {
        case DELETE_DASHBOARD: {       
            return { ...state, data: state.data.filter(item => item.dashboard_id !== action.payload)}       
        }

        case CHANGE_DASHBOARD_TITLE: {
            return { data: state.data.map(i => 
                i.dashboard_id === action.payload.id ? { ...i, title: action.payload.title } : i)
            }
        }

        case DELETE_TASK: {
            return { data: state.data.map(i => {
                if (i.dashboard_id === action.payload.dashboard_id) {
                  return {...i, tasks: i.tasks.filter(task => task.task_id !== action.payload.task_id)}
                }
                return i;
            })}
        }

        case ADD_TASK: {
            if (action.payload.name !== '') {
                let newTask = {
                    task_id: generateId(),
                    selected: false,
                    name: action.payload.name,
                }
          
                return {
                    data: state.data.map(item =>
                      item.dashboard_id === action.payload.dashboard_id
                        ? {
                            ...item,
                            tasks: [...item.tasks, newTask]
                          }
                        : item
                    )
                  }
                
            } else {
                return state
            }
        }

        case CHANGE_TASK_NAME: {
            return {
                data: state.data.map(item => {
                  if (item.dashboard_id === action.payload.dashboard_id) {
                    item.tasks = item.tasks.map(task => {
                      if (task.task_id === action.payload.task_id) {
                        return {...task, name: action.payload.name}
                      }
                      return task;
                    })
                  }
                  return item;
                })
            }
        }

        case CHANGE_TASK_SELECTED: {
            return {
                data: state.data.map(item => {
                  if (item.dashboard_id === action.payload.dashboard_id) {
                    item.tasks = item.tasks.map(task => {
                      if (task.task_id === action.payload.task_id) {
                        return {...task, selected: action.payload.selected}
                      }
                      return task;
                    })
                  }
                  return item;
                })
              }
        }
        default:
            return state
    }
};