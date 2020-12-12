import React from 'react';
//import 'react-circular-progressbar/dist/buildStyles';

import {MdCheckCircle,MdError, MdLink} from 'react-icons/md';

import {CircularProgressbar} from 'react-circular-progressbar';
import {Container, FileInfo, Preview} from './styles' ;

export default function FileList(){
    return(
        <Container>
            <li>
                <FileInfo>
                    <Preview src="http://127.0.0.1:8000/media/imagens/perfil_home_alojamento/h6.jpeg"/>
                    <div>
                        <strong>profile.png</strong>
                        <span>64kb <button onClick={() => {}}>Excluir</button></span>
                    </div>
                </FileInfo>
                <div><CircularProgressbar styles={
                    {root:{width:24},
                     path:{stroke:'#7159c1'}
                     }}
                     strokeWidth={10}
                     value={50} />
                     <a 
                        href="http://127.0.0.1:8000/media/imagens/perfil_home_alojamento/h6.jpeg"
                        target="_blank"
                        rel="noopener norefrrer"
                    >
                        <MdLink style={{marginRght:8}} size={24} color ="#222"/>

                    </a>
                    <MdCheckCircle size={24} color="#78e5d5"/>
                    <MdError size={24} color="#e57878"/>
                    
                </div>
            </li>
        </Container>
    )
};