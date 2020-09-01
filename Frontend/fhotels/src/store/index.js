import {configureStore} from '@reduxjs/toolkit';

import authReducer from './ducks/auth';
import EventosReducer from './ducks/Eventos';
import PomoReducer from './ducks/Promoções'
import GetPostAlojamentoReducer from './ducks/Alojamentos';


export default configureStore({
    reducer:{
        auth: authReducer,
        Alojamento: GetPostAlojamentoReducer,
        Eventos: EventosReducer,
        Promoçoes:PomoReducer,
        
    }
});
