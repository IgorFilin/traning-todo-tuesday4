import {TasksStateType} from "../App";


type removeTaskType = {
    type:'REMOVE-TASK'
    id: string,
    todolistId: string
}
type AllActionsTYpe = removeTaskType



export const ReducerTasksTest = (state:TasksStateType,action:any) => {
    switch (action.type){
        case 'xxx':{
            return state
        }
        default:
            return state
    }
};