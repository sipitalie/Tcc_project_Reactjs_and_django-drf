import {configureStore} from '@reduxjs/toolkit';

import authReducer from './ducks/auth';
import GetPostAlojamentoReducer from './ducks/hotel';


export default configureStore({
    reducer:{
        auth: authReducer,
        Alojamento: GetPostAlojamentoReducer,
        
    }
});
