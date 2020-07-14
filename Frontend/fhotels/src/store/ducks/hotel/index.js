import {createReducer, createAction} from '@reduxjs/toolkit';


const INITIAL_STATE=[];
    

export const addAlojamento = createAction('ADD_ALOJAMENTO');
export const addAlojamentoList = createAction('ADD_ALOJAMENTOLIST');

export default createReducer(INITIAL_STATE, {
    [addAlojamento.type]:(state, action) => [...state, action.payload],
    [addAlojamentoList.type]:(state, action) =>[...action.payload]
});
