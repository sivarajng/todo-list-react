import C from './constants'
import { combineReducers } from 'redux'

export const tasks = (state = { "addStatus": "", "tasks": [] }, action) => {


  switch (action.type) {

    case C.ADD_TASK:
      let newTask = [...state.tasks, action.payload];
      let addStatus = "task added successfully";
      return { ...state, tasks: newTask, addStatus };

    case C.SET_STATUS:
     
      return { ...state, addStatus:action.payload };

    case C.REMOVE_TASK:
      console.log("RMV ", action.payload);
      let removedTask = state.tasks.filter((itm) => itm.summary != action.payload.summary);
      return { ...state, tasks: removedTask };

    case C.COMPLETE_TASK:

      let completeTask = state.tasks.map((itm) => {
        if (itm.summary == action.payload.summary) {
          itm.completed = action.payload.completed;
        }
        return itm;
      }
      )
      return { ...state, tasks: completeTask };

    case C.EDIT_TASK:
      return state

    case C.LIST_TASK:
      return state

    default:
      return state
  }

}


export default combineReducers({
  tasks
})




