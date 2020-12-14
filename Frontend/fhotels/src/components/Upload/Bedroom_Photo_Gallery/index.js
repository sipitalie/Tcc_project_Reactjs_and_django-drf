import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react';
import api from '../../../service/api';
import {uniqueId} from 'lodash';
import fileSize from 'filesize';


import {Content} from './styles';
import UploadImgBedroom from './UploadImgBedroom';
import FileList from '../Filelist';
//import { Preview } from '../Filelist/styles';



export default function SendPhotosToTheBedroomGallery(props){
/*send photos to the room gallery
enviar fotos para a galeria do quarto*/  
    const [uploadeFiles, SetuploadFiles]=useState([]);
    let contentuploadGallery ='contentuploadGallery';
    if(props.show){
    contentuploadGallery ='contentuploadGallery open'; 
    }   
    const handleUpload=files=>{
        const newuploadeFiles=files.map(file=>({
            file,
            id:uniqueId(),
            name:file.name,
            readableSze: fileSize(file.size),
            preview: URL.createObjectURL(file),
            progress:0,
            uploaded:false,
            error: false,
            url:null,
        }))
        SetuploadFiles(uploadeFiles.concat(newuploadeFiles));
        console.log(uploadeFiles, 'aqui')
        uploadeFiles.forEach(processUpload); 
    };
    const updatefile =(id, data)=>{
        SetuploadFiles({
            uploadeFiles:uploadeFiles.map(updatefile=>{
                return id === updatefile.id ?{...updatefile, ...data}:updatefile;
            })
        })

    };
    const quarto=props.quarto_id
    const processUpload=(uploadeFile)=>{
        const data= new FormData();
        data.append('file',uploadeFile.file);
        data.append('quarto',quarto );

        api.post('api.v1/upload/gallery', data,{
            onUploadProgress: e =>{
                const progress= parseInt(Math.round((e.loaded *100)/e.total));
                console.log(progress ,'progress')
                updatefile(uploadeFile.id, {
                    progress
                })

            }
        }).then(response=>{
            updatefile(uploadeFile.id,{
                uploaded:true,
                id: response.data.id,
                url:'http://127.0.0.1:8000/'+response.data.file,

            });
            
        }).catch(()=>{
            updatefile(uploadeFile.id,{
                error:true,
    
            });
        })

    }
    return(
        <>
            <div className={contentuploadGallery}>
                <Content>
                    <UploadImgBedroom onUpload={handleUpload}/>
                    {!!uploadeFiles.length && (
                    <FileList files={uploadeFiles}/>
                    )}
                </Content>
            </div>
           
        </>
    )

};

//http://127.0.0.1:8000/api.v1/upload/gallery
