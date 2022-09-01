import React from 'react'
import styled from 'styled-components';
import * as BsIcons from 'react-icons/bs';
import { useState } from 'react';

function SupplierList({suppliers,handelEdit,handelDelete}) {

  const data = suppliers;
  console.log(data);

 
  
  

  const [actionMenu, setActionMenu] = useState(false);
  const showActionMenu = ()=> {setActionMenu(!actionMenu)};

  

  return (
    <List>
      <table>
        <thead>
           <tr>
              <th>Supplier</th>
              <th>Certificate type</th>
              <th>Valid From</th>
              <th>Valid To</th>
              <th>Actions</th>
           </tr>
        </thead>
        <tbody>
      {suppliers.length > 0  ?( suppliers.map((supplier)=>(

        <tr key={supplier.id}>
            <td>{supplier.name}</td>
            <td>{supplier.certificate}</td>
            <td>{supplier.Dfrom}</td>
            <td>{supplier.Dto}</td>
            <td>
                <button onClick={()=> handelEdit(supplier.id)}>Edit</button>
                <button onClick={()=> handelDelete(supplier.id)} className='delete'>Delete</button>
            </td>
        </tr>
      
        ))): (
          <tr>
              <td colSpan={5}>No Suppliers</td>
          </tr>
      )}
        </tbody>
      </table>
    </List>
  )
}

export default SupplierList

const List = styled.div`
  margin-top : 5rem;

  table{
    border-collapse: collapse;
    width:100%;
  }

  table th{
    background:#2B4865;
    color:white;
  }

  table, th, td {
    border: 1px solid black;
    padding: 1rem;
    text-align:center;
  }

  button{
    padding: 1rem;
    background : #002B5B;
    color : white;
    min-width:20%;
    
    border-radius: 20px;
    border:none;
    font-family: 'Roboto', sans-serif;
    margin-right:1rem;
    cursor:pointer;
    transition : 300ms;
  }

  button.delete{
    background : red;

  }

  
`;

