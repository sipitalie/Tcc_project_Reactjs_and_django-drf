import React,{useState} from 'react';

import {Conteainer, Content} from './styles';
import api from '../../../service/api';

 export default function  CreateBadroon(props){
    const [Caract_bedroom, setCaract_bedroom] = useState('');
    const [type_bedroom, settype_bedroom] = useState('');
    const [preco, setpreco] = useState('');
    const hotel_owner=props.idhotel
    async function handleNewBadroom(e){
        e.preventDefault();
        const data = {
            Caract_bedroom,
            type_bedroom,
            preco,
            hotel_owner,
        };
        try{
            await api.post('api.v1/quarto/register', data /*, {
                headers: {
                    Authorization: token,
                }
            }*/).then(response=>{
                console.log(response.data);
            })

        }catch(err){
            console.log('Erro, tente novamente', err)
        }
    }
    return(
        <Conteainer>
            <Content>
                <form onSubmit={handleNewBadroom}>
                    <div>
                        <input
                            placeholder="Categoria do quarto"
                            value= {Caract_bedroom}
                            onChange ={e => setCaract_bedroom(e.target.value)}
                        />
                        <input
                            placeholder="Tipo de quarto"
                            value= {type_bedroom}
                            onChange ={e => settype_bedroom(e.target.value)}
                        />
                        <input
                            placeholder="Preço"
                            value= {preco}
                            onChange ={e => setpreco(e.target.value)}
                        />
                        <button className="button" type = "submit">Criar</button>
                    </div>
                   
                </form>
            </Content>

        </Conteainer>
        
    )
} ;