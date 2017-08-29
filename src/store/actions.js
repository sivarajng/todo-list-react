import C from './constants'
import fetch from 'isomorphic-fetch'

export const addTask = (item) =>
    ({
        type: C.ADD_TASK,
        payload: item
    })

export const editTask = (item) =>
    ({
        type: C.EDIT_TASK,
        payload: item
    })

export const removeTask = (item) =>
    ({
        type: C.REMOVE_TASK,
        payload: item
    })

export const listTask = () =>
    ({
        type: C.LIST_TASK
    })



