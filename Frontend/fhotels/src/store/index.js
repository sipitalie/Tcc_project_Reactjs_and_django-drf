import {configureStore} from '@reduxjs/toolkit';

import authReducer from './ducks/auth';


export default configureStore({
    reducer:{
        auth: authReducer
    }
});
