import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';

function EditSupplier({suppliers,selectSupplier,setSuppliers,setIsEditing}) {

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [certificate, setCertificate] = useState('');
  const [Dfrom, setDateFrom] = useState('');
  const [Dto, setDateTo] = useState('');

  const id = selectSupplier.id;

  const handleUpdate = e =>{
    e.preventDefault();

    if (!name || !city || !certificate || !Dfrom || !Dto){
      window.alert('All fields are required !');
    }
    else{

      const supplier ={
        id,
        name,
        city,
        certificate,
        Dfrom,
        Dto
      };
  
      for(let i =0; i<suppliers.length;i++){
        if(suppliers[i].id === id){
          suppliers.splice(i,1,supplier);
          break;
        }
      }
  
      setSuppliers(suppliers);
      setIsEditing(false);

    }


  }


  return (
    <Container>
      <form onSubmit={handleUpdate}>
                <h1>Edit Supplier</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder={suppliers[id-1].name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    value={city}
                    placeholder={suppliers[id-1].city}
                    onChange={e => setCity(e.target.value)}
                />
                <label htmlFor="certificate">Certificate</label>
                <select
                  id="certificate"
                  type="text"
                  name="certificate"
                  value={certificate}
                  onChange={e => setCertificate(e.target.value)}
                >
                    <option value="">{suppliers[id-1].certificate}</option>
                    <option value="AAA">AAA</option>
                    <option value="BBB">BBB</option>
                    <option value="CCC">CCC</option>
                </select>
                <label htmlFor="Dfrom">Valid From</label>
                <input
                    id="Dfrom"
                    type="text"
                    name="Dfrom"
                    value={Dfrom}
                    placeholder={suppliers[id-1].Dfrom}
                    onChange={e => setDateFrom(e.target.value)}
                />
                <label htmlFor="Dto">Valid To</label>
                <input
                    id="Dto"
                    type="text"
                    name="Dto"
                    value={Dto}
                    placeholder={suppliers[id-1].Dto}
                    onChange={e => setDateTo(e.target.value)}
                />
                <div>
                    <input type="submit" value="Add" />
                    <input
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
      </form>
    </Container>
  )
}

export default EditSupplier

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