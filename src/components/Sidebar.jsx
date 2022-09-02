import React from 'react'
import * as AiIcons from 'react-icons/ai';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import SubMenu from './SubMenu';


function Sidebar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = ()=> {setSidebar(!sidebar)};


  return (
    <>
    <Nav>
        <Icon to='#'>
            <AiIcons.AiFillHome onClick={showSidebar}/>
        </Icon>
        <Link className='title' to={'/'}>DCCS Tuzla</Link>
    </Nav>
    <SidebarNav sidebar={sidebar}>
        <SidebarIconWrap>
            <Icon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
            </Icon>
        </SidebarIconWrap>
        <div>
            <SubMenu setSidebar={setSidebar}></SubMenu>
        </div>
    </SidebarNav>
    </>
  )
}

export default Sidebar

const Nav = styled.div `
    background : #0F0E0E;
    height : 6rem;
    display : flex;
    justify-content : flex-start;
    align-items: center;
    text-decoration:none;
    gap:1rem;
    position:sticky;
    top:0;
    width:100%;
    z-index:2;
   

    .title{
        color:white;
        font-size:1.5rem;
        text-decoration:none;

    }
`;

const Icon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    color :#FFCB42;
    display : flex;
    justify-content : flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background : #0F0E0E;
    width : 15rem;
    height : 100vh;
    dispaly :flex;
    justify-content : flex-start;
    position : fixed;
    top : 0 ;
    left : ${({sidebar})=> (sidebar ? '0' : '-100%')};
    transition : 400ms ;
    z-index : 3;
`;

const SidebarIconWrap = styled.div`
    width : 100%;
    height : 6rem;
    display:flex;
    align-items: center;
`;