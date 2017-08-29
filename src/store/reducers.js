import C from './constants'
import { combineReducers } from 'redux'

export const tasks = (state = [], action) => {


  switch (action.type) {

    case C.ADD_TASK:
      let newTask = [...state, action.payload];
      return newTask;

    case C.REMOVE_TASK:
      console.log("RMV ", action.payload);
      let removedTask = state.filter((itm) => itm.summary != action.payload.summary);
      return removedTask

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




