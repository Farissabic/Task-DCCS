import React from 'react'
import styled from 'styled-components';
import { useState,useRef,useEffect } from 'react';

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
      <form onSubmit={handleAdd}>
                <h1>Add Supplier</h1>
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
                    <input type="submit" value="Add" />
                    <input
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
   margin-top:5rem;
   display:flex;
   align-items: center;
   justify-content:center;
   width:100%;

   form{
    display:flex;
    flex-direction: column;
    width:80%;
    gap:1rem;
   }

   form input,select{
    padding:1rem;
   }
`;