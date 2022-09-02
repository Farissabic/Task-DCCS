import React from 'react'
import styled from 'styled-components';
import { useState,useRef,useEffect } from 'react';
import * as CgIcons from 'react-icons/cg';
import Add from '../data/Add.jpg';


function AddSupplier({suppliers, setSuppliers, setIsAdding}){

  const [name, setName] = useState('');
  const [certificate, setCertificate] = useState('');
  const [Dfrom, setDateFrom] = useState('');
  const [Dto, setDateTo] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
}, [])


  const handleAdd = e => {
    e.preventDefault();

    const id = suppliers.length + 1;
    const city = '';
    const newSupplier = {
        id,
        name,
        city,
        certificate,
        Dfrom,
        Dto
    };
    console.log(newSupplier);
    suppliers.push(newSupplier);
    const data = suppliers;
    setSuppliers(suppliers);
    setIsAdding(false);

  }

  return (
    <Container>
      <Left>
        <img src={Add} alt="" />
      </Left>
      
      <form onSubmit={handleAdd}>
                <h1><CgIcons.CgProfile/>Add Supplier</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    ref={textInput}
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="certificate">Certificate</label>
                <select
                  id="certificate"
                  type="text"
                  name="certificate"
                  value={certificate}
                  onChange={e => setCertificate(e.target.value)}
                >
                    <option value="AAA">AAA</option>
                    <option value="BBB">BBB</option>
                    <option value="CCC">CCC</option>
                </select>
                <label htmlFor="Dfrom">Valid From</label>
                <input
                    id="Dfrom"
                    type="date"
                    name="Dfrom"
                    value={Dfrom}
                    onChange={e => setDateFrom(e.target.value)}
                />
                <label htmlFor="Dto">Valid To</label>
                <input
                    id="Dto"
                    type="date"
                    name="Dto"
                    value={Dto}
                    onChange={e => setDateTo(e.target.value)}
                />
                <div>
                    <input className='inputB' type="submit" value="Add" />
                    <input
                        className='inputB'
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
    </Container>
  )
}

export default AddSupplier

const Container = styled.div`

  margin:5rem 0 5rem 0;
  display:flex;
  width:100%;
  align-items: center;
  gap:5%;


   form{
    display:flex;
    flex-direction: column;
    
    width:60%;
    gap:1rem;

    

    h1{
      display:flex;
      gap:1rem;
      align-items:center;
    }
   }

   form input,select{
    padding:1rem;
    border:none;
    border-bottom:2px solid #FFB200;
   }


   .inputB{
    margin-right:1rem;
    font-family: 'Montserrat', sans-serif;
    border:none;
    background:#F0F0F0;
    transition:400ms;
    cursor:pointer;
   }

   .inputB:hover{
    border-left:5px solid #FFCB42;
    background:#0F0E0E;
    color:#F0F0F0;
   }
`;

const Left = styled.div`
  width:35%;
  height:35rem;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;