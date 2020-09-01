import React from 'react';
import {useState, } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand  } from "react-icons/fa";
import ImgComp from './ImgComp';
import h1 from '../assets/h1.jpg';
import h2 from '../assets/h2.jpg';
import h4 from '../assets/h4.jpg';
import h5 from '../assets/h5.jpg';
import h7 from '../assets/h7.jpg';
//import DrawerToggleButton from '../../Header/SideDrawe/DrawerToggleButton';
//import {useSelector, useDispatch} from 'react-redux'
//import LogoutService from '../../../service/logout.service';

export default function Slider(props){
    let sliderArr=[<ImgComp src={h1}/>,<ImgComp src={h7}/>,
        <ImgComp src={h2}/>, <ImgComp src={h4}/>,
        <ImgComp src={h5}/>, <ImgComp src={h7}/>]
    const [x, setX]=useState(0)

    const goLeft=()=>{
        //console.log(x);
        //x=== 0 ? setX(- 100 * (sliderArr.length - 1)) : setX(x + 100); //aqui se clicar em left   e
        //etiver na primeira imagem ela vai para ultima.

        x=== 0 ? setX( 0 ) : setX(x + 100); //aqui se clicar em left   e
        //etiver na primeira imagem ela se mantem na primeira.
    }
    const goRight=()=>{
        //console.log(x);
        x=== -100 * (sliderArr.length -1) ? setX(0) : setX(x -100);   
    }
   //const autoPlay=()=>{
   //    setTimeout(() => {goRight(); }, 7000);
   // }
    const expand =()=>{
        console.info("ola")
       
    }    
    return(
        <div className="Slider">
            {
                sliderArr.map((item, index)=>{
                    return(
                        <div key={index} className="Slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <span className="span-goLeft" >
                <button id ="goLeft" onClick={goLeft}>
                    <div><FaChevronLeft/></div>  
                </button>
            </span>

            <span  className="span-goRight">
                <button id ="goRight" onClick={goRight}>
                    <div><FaChevronRight/></div>  
                </button>   
            </span>


            <span className="span-expandSlide">
                <button id ="expandSlider" onClick={expand}>
                    <div><FaExpand/></div>  
                </button> 
            </span>


            
        </div>
        
    )   
};
                    
                    
                    
                    

