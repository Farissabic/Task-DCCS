import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import * as CgIcons from 'react-icons/cg';
import Add from '../data/Add.jpg';

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
      <Left>
        <img src={Add} alt="" />
      </Left>
      <form onSubmit={handleUpdate}>
                <h1><CgIcons.CgProfile/>Edit Supplier</h1>
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
                    <input className='inputB' type="submit" value="Add" />
                    <input
                        className='inputB'
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