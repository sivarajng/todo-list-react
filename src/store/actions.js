import C from './constants'


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

export const completeTask = (itm) =>
    ({
        type: C.COMPLETE_TASK,
        payload: itm
    })

export const setStatus = (msg) =>
    ({
        type: C.SET_STATUS,
        payload: msg
    })



