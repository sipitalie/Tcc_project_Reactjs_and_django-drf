import {configureStore} from '@reduxjs/toolkit';

import authReducer from './ducks/auth';
import Alojamentoreducer from './ducks/hotel';


export default configureStore({
    reducer:{
        auth: authReducer,
        Alojamento: Alojamentoreducer
    }
});
