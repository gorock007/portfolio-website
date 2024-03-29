import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {HashLink as scroll} from 'react-router-hash-link';

const Container = styled.div`
    background-color: ${({scrollNav}) => (scrollNav? '#000' : 'rgba(255,255,255,0)')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`;
const ProfileIcon = styled.div`
     display: flex;
    align-items: center;
    font-size: 1.5rem;
    height: 80px; /* add this */
    cursor: pointer;
`
const Logo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    font-size: 2.0rem;
    display: flex;
    align-items: center;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    @media screen and (max-width:768px){
        font-size: 1.8rem;
        margin-left: 0;
    }
    @media screen and (max-width: 480px){
        font-size: 1.2rem;
        margin-left: 0;
    }
    
`
const Menu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
const MenuItem = styled.div`
    height: 80px;
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
`
const MenuLink = styled(scroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #00b140;
    }
`
const HamburgerIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
     @media screen and (max-width: 480px){
        font-size: 1.7rem;
    }
`

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    },[]);

    const toggleHome = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

  return (
    <Container scrollNav={scrollNav}>
        <Nav>
            <HeaderContainer>
                {/* <ProfileIcon>
                      <img src={img} alt="Profile Icon" />
                </ProfileIcon> */}
                <Logo href='/' onClick={toggleHome}>Gorakh Shetty.</Logo>
            </HeaderContainer>
            <HamburgerIcon onClick={toggle}>
                <FaBars/>
            </HamburgerIcon>
            <Menu>
                <MenuItem >
                    <MenuLink to='#about' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>About Me</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='#projects' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Projects</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='#skills' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Skills</MenuLink>
                </MenuItem>
                <MenuItem>
                      <MenuLink to='https://gorock.hashnode.dev/' target="_blank" rel="noopener noreferrer">Blog</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to='#contact' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Contact</MenuLink>
                </MenuItem>
            </Menu>
        </Nav>
    </Container>
  )
}

export default Navbar