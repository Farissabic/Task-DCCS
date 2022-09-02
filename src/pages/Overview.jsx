import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Suppliers } from '../data/data';
import SupplierMenu from '../components/SupplierMenu';
import SupplierList from '../components/SupplierList';
import AddSupplier from '../components/AddSupplier';
import EditSupplier from '../components/EditSupplier';
import Search from '../components/Search';

function Overview() {

    const [suppliers,setSuppliers] = useState(Suppliers);
    const [selectSupplier, setSelectSupplier] = useState(null);
    const[isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const Edit = (id)=>{
        console.log(id);
        const [supplier] = suppliers.filter(supplier => supplier.id === id);
        setSelectSupplier(supplier);
        setIsEditing(true);
    };

    const Delete = (id) =>{
        const [supplier] = suppliers.filter(supplier => supplier.id === id);
        setSuppliers(suppliers.filter(supplier => supplier.id !== id));
        //setSuppliers(suppliers.splice(0,id-1));
    };


    const [popup, setPopup]= useState(false);
    const childToParent = (popupData) => {
        setPopup(popupData);
    }

    console.log(popup);

  return (

    <Container>
        {!isAdding && !isEditing && (
            <>
                <SupplierMenu   setIsAdding = {setIsAdding}
                                childToParent={childToParent}/>

                <SupplierList   suppliers = {suppliers}
                                handelEdit = {Edit}
                                handelDelete = {Delete}
                />
            </>
        )}


        {isAdding && (
            <AddSupplier
                        suppliers = {suppliers}
                        setSuppliers= {setSuppliers}
                        setIsAdding = {setIsAdding}
            />
        )}


        {isEditing && (
            <EditSupplier
                    suppliers={suppliers}
                    selectSupplier={selectSupplier}
                    setSuppliers={setSuppliers}
                    setIsEditing={setIsEditing}
            />
            )}

        <Search open={popup} setPopup={setPopup} suppliers={suppliers}></Search>
    </Container>
   
  )
}

export default Overview

const Container = styled.div`
    width: 80%;
    margin: 0 auto 4rem auto;
`;