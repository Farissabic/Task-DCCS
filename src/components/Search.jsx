import React from 'react'
import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';


function Search({open,setPopup,suppliers}) {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [id, setId] = useState('');

    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(id);
        
        
    };  

    const resetForm = ()=>{
        setName('');
        setCity('');
        setId('');
    }

  return (
  (open? (
    <Cover>
        <Container>
            <Heder>
                <h3>Search for suppliers</h3>
                <button onClick={()=>setPopup(false)}><AiIcons.AiOutlineClose/></button>
            </Heder>
            <form onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder='Supplier name'
                    onChange={e => setName(e.target.value)}
                />
                <input
                    id="id"
                    type="text"
                    name="id"
                    value={id}
                    placeholder='Supplier index'
                    onChange={e => setId(e.target.value)}
                />
                <input
                    id="city"
                    type="text"
                    name="city"
                    value={city}
                    placeholder='City'
                    onChange={e => setCity(e.target.value)}
                />
                <input type="submit" value="Search" />
                <input
                        type="button"
                        value="Reset"
                        onClick={() => resetForm()}
                    />
            </form>
            <Heder>
                <h3>Suppliers list</h3>
            </Heder>
            <table>
                <thead>
                    <tr>
                        <th>Supplier Index</th>
                        <th>Supplier</th>
                        <th>Certificate type</th>
                        <th>Valid From</th>
                        <th>Valid To</th>
                    </tr>
                </thead>
                <tbody>
                {(name !== '' || id !== '' || city !== '') ?( suppliers.filter((val)=>{
                    if( name === val.name || val.id == id || city === val.city ){
                        return val;
                    }
                }).map((val)=>(

                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.certificate}</td>
                        <td>{val.Dfrom}</td>
                        <td>{val.Dto}</td>
                    </tr>
                    ))): (
                    <tr>
                        <td colSpan={5}>Supplier not searched</td>
                    </tr>
                )}
                </tbody>
            </table>
            
        </Container>
    </Cover>
  ):null)
   
    
  )
}

export default Search


const Cover= styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background : rgba(0,0,0,0.8);
    display:flex;
    justify-content:center;
    align-items:center;
`;


const Container = styled.div`
    position: relative;
    background:white;
    padding: 0.5rem;
    width:60%;
    
   

    button{
        position:absolute;
        top:1rem;
        right:1rem;
        background:none;
        color:white;
        font-size:2rem;
        cursor:pointer;
        border:none;
    }

    form{
        margin-top:1rem;
        margin-bottom:1rem;
        display:flex;
        gap:1rem
    }

    form input{
        padding:1rem;
    }

    table{
        border-collapse: collapse;
        width:100%;
        margin-top:1rem;
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

`;

const Heder = styled.div`
    width:100%;
    background:#002B5B;
    height:4rem;
    position: relative;
    display:flex;
    align-items: center;
    
    h3{
        color:white;
        margin-left:1rem;
    }
`;

