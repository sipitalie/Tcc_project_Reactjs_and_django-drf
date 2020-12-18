import React ,{useState}from 'react';


 import {Conteainer, Content} from './styles';
 import api from '../../../service/api';
 /*
 "new_preco": 10000.0,
    "valid_data": "2020-06-24",
    "hotel": 25,
    "quartos_em_prom": [
      3
    ] */

export default function CreatePromo(props){
    const [NovoPreço, SetNewpreco] = useState('');
    const [DataDeValidade, SetDataDeValidade] = useState('');
    const [QuartosEmProm, SetQuartosEmProm] = useState([]);
    const hotel_owner=props.idhotel
    async function handleNewPromo(e){
         e.preventDefault();
         const data = {
             new_preco:NovoPreço,
             valid_data:DataDeValidade,
             hotel:hotel_owner,
             quartos_em_prom:QuartosEmProm,
         };
         try{
             await api.post('api.v1/promoçao/', data /*, {
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
                 <form onSubmit={handleNewPromo}>
                     <div>
                         <input
                             placeholder="Quartos em promoção"
                             value= {QuartosEmProm}
                             onChange ={e => SetQuartosEmProm(e.target.value)}
                         />
                         <input
                             placeholder="data de validade"
                             value= {DataDeValidade}
                             onChange ={e => SetDataDeValidade(e.target.value)}
                         />
                         <input
                             placeholder="Preço"
                             value= {NovoPreço}
                             onChange ={e => SetNewpreco(e.target.value)}
                         />
                         <button className="button" type = "submit">Criar</button>
                     </div>
                    
                 </form>
             </Content>
 
         </Conteainer>
         
     )
    
 }
 