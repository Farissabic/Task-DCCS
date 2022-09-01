import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

function SupplierMenu({setIsAdding,childToParent}) {

  const [openSearch,setOpenSearch]= useState(false);


  return (
    <Menu>
      <h1>Supplier Menagement Sistem</h1>
      <button onClick={()=> setIsAdding(true)}>Add Certificate</button>
      <button onClick={()=> childToParent(!openSearch)}>Search for supplier</button>
    </Menu>

  )
}

export default SupplierMenu;


const Menu = styled.div`
  margin-top: 2rem;
  position:relative;

  button{
    margin-top: 2rem;
    padding: 1rem;
    background : #002B5B;
    color : white;
    border-radius: 20px;
    font-family: 'Roboto', sans-serif;
    cursor:pointer;
    transition : 300ms;
    font-size:1rem;
    margin-right:1rem;
    border:none;
    
  }

  button:hover{
    
    background : #8FE3CF;
  }  
`;