import React from 'react'
import styled from 'styled-components';
import * as BsIcons from 'react-icons/bs';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function SupplierList({suppliers,handelEdit,handelDelete}) {

  const [name, setName] = useState('');
  const [actionMenu, setActionMenu] = useState(false);
  const showActionMenu = ()=> {setActionMenu(!actionMenu)};

  const props = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    delay: 400,
  })

  

  return (
    <List style={props}>
       <h2>Supplier List :</h2>
      <form>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          placeholder='Search Supplier by name'
          onChange={e => setName(e.target.value)}        
          />
          <BsIcons.BsSearch className='Licon'></BsIcons.BsSearch>
      </form>
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
        {(name !== '') ?( suppliers.filter((val)=>{
            if(name == val.name){
                return val;
            }
            }).map((val)=>(

              <tr key={val.id}>
                <td>{val.name}</td>
                <td>{val.certificate}</td>
                <td>{val.city}</td>
                <td>{val.Dfrom}</td>
                <td>{val.Dto}</td>
              </tr>
              ))): (
                (suppliers.map((supplier)=>(
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
                )))
            )}       
          </tbody>
      </table>
    </List>
  )
}

export default SupplierList

const List = styled(animated.div)`
  margin-top : 1rem;
  text-align:center;

  table{
    border-collapse: collapse;
    width:100%;
  }

  table th{
    background:#0F0E0E;
    color:#FFCB42;
  }

  table, th, td {
    border: 1px solid black;
    padding: 1rem;
    text-align:center;
  }

  button{
    padding: 1rem;
    background : #395B64;
    color : white;
    min-width:20%;
    border:none;
    font-family: 'Roboto', sans-serif;
    margin-right:1rem;
    cursor:pointer;
    transition : 300ms;
  }

  button:hover{
    background:black;
    color:#FFCB42;
  }

  button.delete{
    background : #395B64;

  }

  button.delete:hover{
    background : red;
    color:white;

  }

  form{
    width:100%;
    margin:2rem 0 2rem 0;
    display:flex;
    align-items:center;
    position:relative;
  }

  form input{
    width:100%;
    padding:0.8rem;
    border: 4px solid #FFCB42;
    border-radius : 50px;
    background:#F0F0F0;
    transition:400ms;
  }

  form input:focus{
    padding:1.5rem;
    outline: none;
  }

  form .Licon{
    position:absolute;
    right:2rem;
  }

  
`;

