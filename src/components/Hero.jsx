import React from 'react'
import Video from '../videos/herobg.mp4'
import { SlMouse } from 'react-icons/sl';
import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`
const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const Background = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
`
const Content = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const HeroDesc = styled.h1`
    color: #fff;
    font-size: 52px;
    text-align: center;

    @media screen and (max-width:768px){
        font-size: 40px;
    }
    @media screen and (max-width:480px){
        font-size: 32px;
    }
`
const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 2em;
    line-height: calc(1ex / 0.32);
    margin: calc(0.5ex / 0.32) 0;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`
const ArrowContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;

`;
const ArrowDown = styled(SlMouse)`
  font-size: 40px;
  color: #fff;
  /* transition: transform 0.3s ease-in-out; */
  animation: ${bounce} 1s linear infinite;
  cursor: pointer;

  &:hover {
    color: #00b140;
  }
`;

const Hero = () => {
  return (
    <Container id='home'>
        <Wrapper>
            <Background autoPlay loop muted src={Video} type='video/mp4'></Background>
            <Overlay/>
        </Wrapper>
        <Content>
            <HeroDesc>Hi, I'm Gorock.</HeroDesc>
            {/* <HeroDescSub>I build things for the web.</HeroDescSub> */}
            <HeroP>A tech enthausist and a self taught Full-Stack developer</HeroP>
        </Content>
        <ArrowContainer>
            <ArrowDown />
        </ArrowContainer>
    </Container>
  )
}

export default Hero