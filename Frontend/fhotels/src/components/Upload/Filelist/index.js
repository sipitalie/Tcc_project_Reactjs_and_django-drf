import React from 'react';
//import 'react-circular-progressbar/dist/buildStyles';

import {MdCheckCircle,MdError, MdLink} from 'react-icons/md';

import {CircularProgressbar} from 'react-circular-progressbar';
import {Container, FileInfo, Preview} from './styles' ;

export default function FileList(props){
   
    const files = props.files
    return(
        <Container>
            {files.map(uploadeFile=>(
                <li key={uploadeFile.id}>
                    <FileInfo>
                        <Preview src={uploadeFile.preview}/>
                        <div>
                            <strong>profile.png</strong>
                            <span>
                                {uploadeFile.readableSze}{''}
                                {!!uploadeFile.url && (<button onClick={() => {}}>Excluir</button>)}
                            </span>
                        </div>
                    </FileInfo>
                    <div>
                        {!uploadeFile.uploaded && !uploadeFile.error &&(<CircularProgressbar styles={
                            {root:{width:24},
                            path:{stroke:'#7159c1'}
                             }}
                            strokeWidth={10}
                            value={uploadeFile.progress} />
                        )}
                        {uploadeFile.url &&(
                            <a 
                                href="http://127.0.0.1:8000/media/imagens/perfil_home_alojamento/h6.jpeg"
                                target="_blank"
                                rel="noopener norefrrer"
                            >
                                <MdLink style={{marginRght:8}} size={24} color ="#222"/>
                            </a>)}
                        {uploadeFile.uploaded && <MdCheckCircle size={24} color="#78e5d5"/>}
                        {uploadeFile.error && <MdError size={24} color="#e57878"/>} 
                    
                    </div>
                </li>
            ))}
        </Container>
    )
};

//http://127.0.0.1:8000/media/imagens/perfil_home_alojamento/h6.jpeg