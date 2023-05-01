import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom';
import { Link as scroll } from 'react-scroll';

const Container = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon = styled(FaTimes)`
    color: #fff;
`
const Wrapper = styled.div`
    color: #fff;
`
const Menu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;
    @media screen and (max-width:480px){
        grid-template-rows: auto(5, 60px);
    }

`
const Link = styled(scroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    &:hover{
        color: #00b140;
        transition: 0.2s ease-in-out;
    }
`
const HomeButton = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 8%;
    @media screen and (max-width:480px){
        padding-left: 0%;
    }    
`
const HomeRoute = styled(LinkR)`
    color: #fff;
    padding: 16px 64px;
    border: none;
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-shadow: 0px 5px 30px rgba(0, 100, 148, 0.5);
    background: linear-gradient(135deg, #2cc8c0, #1fd313);
    transition: all 0.4s ease-in-out;

     &:hover{
        transform: translateY(-20%);
        color: #fff;
    }
`

const Sidebar = ({isOpen, toggle}) => {
    const [scrollSide, setScrollSide] = useState(false)
    const changeSide = () => {
        if (window.scrollY >= 80) {
            setScrollSide(true)
        } else {
            setScrollSide(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeSide)
    }, []);

    const toggleHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const scrollToSection = (event) => {
        event.preventDefault();
        const targetSection = event.target.getAttribute("href");
        const targetPosition = document.querySelector(targetSection).offsetTop;
        toggle();
        setTimeout(() => {
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }, 500);

    };

  return (
    <Container isOpen={isOpen} onClick={toggle} scrollSide={scrollSide}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <Wrapper>
            <Menu>
                <Link href='#about' onClick={scrollToSection}>About</Link>
                <Link href='#projects' onClick={scrollToSection}>Projects</Link>
                <Link href='#skills' onClick={scrollToSection}>Skills</Link>
                <Link href='#contact' onClick={scrollToSection}>Contact</Link>
            </Menu>
            <HomeButton>
                <HomeRoute href='/' onClick={toggleHome}>Home</HomeRoute>
            </HomeButton>
        </Wrapper>
    </Container>
  )
}

export default Sidebar