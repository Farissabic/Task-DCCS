import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import videoBg from '../data/videoBg.mp4';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


function Home() {

    const {text} = useTypewriter({
        words: ['Sistem...', 'Page...', 'Center...'],
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000,
        cursorStyle: '_'
    })


  return (
    <HomeWrap>
        <video src={videoBg} autoPlay loop muted />
        <div className="overlay"></div>
        <div className="content">
            <h1>
                <FaIcons.FaBookReader className='halloIcon'/>
                <br /> 
                Welcome to the 
                <br /> 
                Supplier Menagement {' '}
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                    {text}
                </span>
                <Cursor />
            </h1>
            <SMSButton to={'/overview'}>Example 1 <BsIcons.BsFillArrowRightCircleFill/></SMSButton>
        </div>
    </HomeWrap>
  )
}

export default Home

const HomeWrap = styled.div`
    width: 100%;
    height:100%;
    text-align:center;
    
    

    h1{
        color:white;
        font-size:3rem;
        font-family: 'Montserrat', sans-serif;
        width:100%;
        text-align:center;
        margin-bottom:2rem;
    }

    video {
        position:absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left:0;
        object-fit: cover;
    }

    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 178, 0, 0.3);
       
    }

    .halloIcon{
        font-size:7rem;
    }
`;

const SMSButton = styled(Link)`
    text-decoration:none;
    background: transparent;
    border: solid 3px #0F0E0E;
    color:#0F0E0E;
    padding:1.4rem;
    border-radius: 60px;
    width:fit-content;
    text-align:center;
    font-size:1.5rem;
    transition:300ms;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1rem;


    &:hover{
        background:#0F0E0E;
        color:white;
    }
`;