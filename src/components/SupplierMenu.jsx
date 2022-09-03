import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import Add from '../data/Add.jpg';
import { useSpring, animated } from 'react-spring'

function SupplierMenu({setIsAdding,childToParent}) {

  const [openSearch,setOpenSearch]= useState(false);
  const props = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    delay: 200
  })


  return (

    

    <Menu style={props}>
      <h1>Supplier Menagement Sistem</h1>
      <button onClick={()=> setIsAdding(true)}>Add Certificate</button>
      <button onClick={()=> childToParent(!openSearch)}>Advance Search</button>
    </Menu>

    
   

  )
}

export default SupplierMenu;


const Menu = styled(animated.div)`
  background-image:url(${Add});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow:inset 0 0 0 2000px rgba(255, 203, 66, 0.4);
  width:100%;
  height:23rem;
  padding:4rem;

  h1{
    font-size:3rem;
  }

  button{
    margin-top: 2rem;
    padding: 1rem;
    background #0F0E0E;
    color : white;
    font-family: 'Roboto', sans-serif;
    cursor:pointer;
    transition : 400ms;
    font-size:1rem;
    margin-right:1rem;
    border:none;
    
  }

  button:hover{
    
    border-left:5px solid #FFCB42;
    background:#F0F0F0;
    color:black;
    letter-spacing:0.5px;
  }  
`;