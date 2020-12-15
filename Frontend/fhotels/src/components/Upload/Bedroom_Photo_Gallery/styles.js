import styled ,{css}from 'styled-components';

const dragActive =css`
    border-color: #78e5d5;
`;

const dragReject =css`
    border-color: #e57878;
`;
export const Container=styled.div.attrs({className:"Container_upload"})`
    display:flex;
    height:auto;
    width: 100%;
    max-width: 500px;
    justify-content:center;
    align-items:center;
    background:purple;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
    width: 720px;
    height:auto;
    max-width: 500px;
    margin: 10px;
    background: #FFF;
    border-radius:4px;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone"
})`
    border:1px dashed #ddd;
    border-radius: 4px;
    cursor:pointer;
    transition: height 0.2s ease;

    ${props=>props.isDragActive && dragActive};
    ${props=>props.isDragReject && dragReject};
`;

const messageColors={
    default: '#999',
    error:'#e57878',
    success:'#78e5d5',
}
export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default' ]};
    justify-content: center;
    align-items: center;
    padding: 15px;
`;