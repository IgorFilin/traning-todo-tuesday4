import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type RemoveTodoistAT = {
    type:'REMOVE-TODOLIST'
    todolistId:string
}

export type AddTodolistAT = {
    type:'ADD-TODOLIST'
    title:string
}
export type ChangeTodolistTitleAT = {
    type:'CHANGE-TODOLIST-TITLE'
    idTodolist:string
    title:string
}
export type ChangeTodolistFilterAT ={
    type:'CHANGE-TODOLIST-FILTER'
    idTodolist:string
    filter:FilterValuesType
}
export type AllActionsType = RemoveTodoistAT | AddTodolistAT|  ChangeTodolistTitleAT | ChangeTodolistFilterAT


export const ReducerTodolists = (state:Array<TodolistType>,action:AllActionsType):Array<TodolistType> => {
   switch (action.type){
       case "REMOVE-TODOLIST":
           return state.filter(tl => tl.id !== action.todolistId)
       case "ADD-TODOLIST": {
           return [...state,{id: v1(), title: action.title, filter: 'all'}]
       }
       case "CHANGE-TODOLIST-TITLE":{
           return state.map(tl => tl.id === action.idTodolist? {...tl,title:action.title}: tl)
       }
       case "CHANGE-TODOLIST-FILTER":{
           return state.map(tl => tl.id === action.idTodolist? {...tl,filter:action.filter}: tl)
       }
       default:
           return state
   }
}

type ChangeTodolistFilterACType = ReturnType<typeof ChangeTodolistFilterAC>

type ChangeTodolistTitleAC = ReturnType<typeof ChangeTodolistFilterAC>
type AddTodolistAC = ReturnType<typeof AddTodolistAC>
type RemoveTodoistAC = ReturnType<typeof RemoveTodoistAC>

export const RemoveTodoistAC = (todolistId:string) => {
    return {type:'REMOVE-TODOLIST',todolistId} as const
}
export const AddTodolistAC = (title:string) => {
    return { type:'ADD-TODOLIST',title} as const
}
export const ChangeTodolistTitleAC = (idTodolist:string,
title:string) => {
    return {type:'CHANGE-TODOLIST-TITLE',idTodolist,title} as const
}
export const ChangeTodolistFilterAC = (idTodolist:string,filter:FilterValuesType) => {
    return{ type:'CHANGE-TODOLIST-FILTER',idTodolist,filter} as const
}