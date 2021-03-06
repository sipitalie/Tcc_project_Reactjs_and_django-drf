import React, { useState} from 'react';
import {useDispatch} from 'react-redux';
import {alojamento_register} from './../../store/fetchActions';

import './index.css';
/*tipo
Type=(('Hotel','Hotel'),
    ('Apart-hotel','Apart-hotel'),
    ('Residencial/Pensão','Residencial/Pensão'),
    ('Resort/Lodge','Resort/Lodge'),
    ('Outros', 'Outros')
)
#E quanto às classificações?
estrela=(
    (1, '1 estrela'),
    (2,'2 estrelas'),
    (3,'3 estrelas'),
    (4,'4 estrelas'),
    (5,' 5 estrelas'),
)
*/

export default function RegisterAlojamento(){ 

    const [nome, setNome] = useState('');
    const [Type_Alojamento, setType]= useState('');
    const [Estrela, setEstrela] =useState('')
    const [pais, setPais] = useState('');
    const [Provincia, setProvincia]= useState('');
    const [cidade, setCidade]= useState('');
    const [linha, setLinha] =useState('')
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude]= useState('');
    const owner = localStorage.getItem('id');
    const dispatch = useDispatch();

    function handlerRegisterAlojamento(e){
        e.preventDefault();
        const data = {
            nome,
            Type_Alojamento,
            Estrela,
            pais,
            Provincia,
            cidade,
            linha,
            latitude,
            longitude,
            owner    
        };
        setNome('');
        setType('');
        setEstrela('');
        setPais('');
        setProvincia('');
        setLinha('');
        setLatitude('');
        setLongitude(''); 

        dispatch(alojamento_register(data));
        
    }
    return(
        <div className='class-register'>
            <form  onSubmit ={handlerRegisterAlojamento}>
                <div className='class-register-alojamento'>
                    <div className = 'class-icon-register'>
                        <h1>Registre seu alojamento</h1>
                    </div>
                    <div className = 'class-name-register'>              
                        <input 
                            placeholder ="Nome"
                            value = {nome}
                            required 
                            onChange ={e => setNome(e.target.value)}    
                        />
                    </div>
                               
                    <div className = 'class-tipo-estrelas'> 
                        <select value = {Type_Alojamento} onChange ={e => setType(e.target.value)}>
                            <option value={'Hotel'}>Hotel</option>
                            <option value={'Apart-hotel'}>Apart-hotel</option>
                            <option value={'Residencial/Pensão'}>Residencial/Pensão</option>
                            <option value={'Resort/Lodge'}>Resort/Lodge</option>
                            <option value={'Outros'}>Outros</option>
                        </select> 
                        <select value = {Estrela} onChange ={e => setEstrela(e.target.value)}>
                            <option value={1}>1 estrela</option>
                            <option value={2}>2 estrelas</option>
                            <option value={3}>3 estrelas</option>
                            <option value={4}>4 estrelas</option>
                            <option value={5}>5 estrelas</option>
                        </select>                              
                        
                    </div>
                    <div className = 'class-pais-provincia-Cidade'>              
                        
                        <input 
                            placeholder ="Provincia"
                            value = {Provincia}
                            required
                            onChange ={e => setProvincia(e.target.value)}
                        />
                        <input 
                            placeholder ="Pais"
                            value = {pais}
                            required 
                            onChange ={e => setPais(e.target.value)}    
                        />
                        <input 
                            placeholder ="Cidade"
                            value ={cidade}
                            required
                            onChange ={e => setCidade(e.target.value)}
                        />
                       
                    </div>
                    
                    <div className = 'class-cordenadas'>              
                        <input 
                            placeholder ="Latitude"
                            value = {latitude} 
                            onChange ={e => setLatitude(e.target.value)}    
                        />
                        <input 
                            placeholder ="Longitude"
                            value = {longitude} 
                            onChange ={e => setLongitude(e.target.value)}    
                        />           
                    </div>

                    <div className='class-checkbox'>
                        <p>pegar cordenadas atuais</p>
                        <input type="checkbox" id ="checkboxTrue" value = "TRUE"/>
                    </div>  
                    <div className = 'class-endereço'>              
                        <input 
                            placeholder ="Descrição"
                            value = {linha}
                            required 
                            type="text"
                            onChange ={e => setLinha(e.target.value)}    
                        />
                    </div>

                    <div className='button-class'>
                        <button type ="submit"> Continuar </button>
                    </div>
                </div>       
            </form>   
        </div>
           
    );
}




