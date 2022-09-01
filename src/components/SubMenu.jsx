import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';

function SubMenu({setSidebar}) {

    const [open,setOpen] = useState(false);

    const showSubnav = ()=>{ setOpen(!open) };
    console.log(open);

  return (
    <>
        <SidebarLink to = '#' onClick={showSubnav}>
            
            <SidebarTitle>Machine Learning <AiIcons.AiOutlineCaretDown/></SidebarTitle>
            
        </SidebarLink>
        {
        open? <Dropdown to = '#' >
            <DropdownTitle onClick={()=>setSidebar(false)} to = '/overview'>Example 1</DropdownTitle>
            <DropdownTitle onClick={()=>setSidebar(false)} to = '#'>Example 2</DropdownTitle>
            <DropdownTitle onClick={()=>setSidebar(false)} to = '#'>Example 3</DropdownTitle>
        </Dropdown>:null
        }
    </>
  )
}

export default SubMenu

const SidebarLink = styled(Link)`
    display : flex;
    color : white;
    text-decoration: none;
    justify-content : center;
`;

const SidebarTitle = styled.span`
    display : flex;
    align-items: center;
    justify-content:center;
    gap : 1rem;
    width : 100%;
    padding : 1rem;
    transition : 200ms ;
    &:hover{
        background:#2B4865;
        border-left : 5px solid #8FE3CF;
    }
`;

const Dropdown = styled(Link)`
    background:#2B4865;
    text-decoration:none;
`;

const DropdownTitle = styled(Link)`
    display : flex;
    align-items: center;
    justify-content:center;
    padding : 1rem;
    background:#2B4865;
    text-decoration:none;
    color : white;
    transition : 200ms ;

    &:hover{
        border-left : 5px solid #8FE3CF;
    }
`;







