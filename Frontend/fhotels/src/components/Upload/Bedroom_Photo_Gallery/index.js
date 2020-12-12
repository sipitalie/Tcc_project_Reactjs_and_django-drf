import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import {Content} from './styles';
import UploadImgBedroom from './UploadImgBedroom';
import FileList from '../Filelist';



export default function SendPhotosToTheBedroomGallery(props){
/*send photos to the room gallery
enviar fotos para a galeria do quarto
*/
    let contentuploadGallery ='contentuploadGallery';
    if(props.show){
    contentuploadGallery ='contentuploadGallery open'; 
}   
    return(
        <>
            <div className={contentuploadGallery}>
                <Content>
                    <UploadImgBedroom/>
                    <FileList/>
                </Content>
            </div>
           
        </>
    )

};


