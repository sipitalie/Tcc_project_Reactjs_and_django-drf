import {logout} from '../store/ducks/auth';


export default function Seguir(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    return logout();
}