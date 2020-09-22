import {configureStore} from '@reduxjs/toolkit';

import authReducer from './ducks/auth';
import EventosReducer from './ducks/Eventos';
import PomoReducer from './ducks/Promoções';
import GetPostAlojamentoReducer from './ducks/Alojamentos';
import AvaliaçoesReducer from './ducks/Avaliaçoes';
import QuartosReducer from './ducks/Avaliaçoes';


export default configureStore({
    reducer:{
        auth: authReducer,
        Alojamento: GetPostAlojamentoReducer,
        Eventos: EventosReducer,
        Promoçoes:PomoReducer,
        Avaliacoes:AvaliaçoesReducer,
        Quartos: QuartosReducer,
        
    }
});
