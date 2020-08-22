import {createReducer, createAction} from '@reduxjs/toolkit';


const INITIAL_STATE=[];
    

export const post_alojamento = createAction('POST');
export const get_alojamento = createAction('GET');

export default createReducer(INITIAL_STATE, {
    [post_alojamento.type]:(state, action) => [...state, action.payload],
    [get_alojamento.type]:(state, action) =>[...action.payload]
});


