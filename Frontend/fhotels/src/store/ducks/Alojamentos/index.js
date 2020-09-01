import {createReducer, createAction} from '@reduxjs/toolkit';


const INITIAL_STATE=[];
    
export const post_alojamento = createAction('ALOJAMENTOSPOST');
export const get_alojamento = createAction('ALOJAMENTOSGET');
export const detail_alojamento = createAction('ALOJAMENTOSDETAILS');


export default createReducer(INITIAL_STATE, {
    [post_alojamento.type]:(state, action) => [...state, action.payload],
    [get_alojamento.type]:(state, action) =>[...action.payload],
    [detail_alojamento.type]:(state, action) => [action.payload]
});


