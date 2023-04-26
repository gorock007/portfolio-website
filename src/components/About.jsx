import React from 'react'
import img from '../images/profile3.svg'
import styled from 'styled-components'

const Container = styled.div`
    background: #f9f9f9;
    color: #fff;
    padding: 120px 80px;
    @media screen and (max-width:1024px){
        padding: 100px 48px;
    }
    @media screen and (max-width:768px){
        padding: 80px 24px;
    }
    z-index: 1;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 5px;
    justify-items: center;
    align-items: center;

`

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
const Top = styled.p`
    color: #00b140;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
const Title = styled.h1`
    font-size: 48px;
    color: #010606;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 24px;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
const Desc =  styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 26px;
    color: #010606;
`
const ImageWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`
const Image = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 50%;
`
const About = () => {
  return (
    <Container id='about'>
        <Wrapper>
            <TextWrapper>
                <Top>About Me</Top>
                <Title>Software Developer</Title>
                <Desc>A Tech enthusiast and Junior Software Developer with experience in front-end and back-end development. 
                    Has a strong portfolio demonstrating experience in building React apps and working with APIs. 
                    With an eagerness to learn and a passion for front-end technologies, confident in contributing to the success of the 
                    I enjoy collaborating with other developers and stakeholders to understand their needs and translate them into software solutions that exceed expectations.</Desc>
            </TextWrapper> 
            <ImageWrapper>
                <Image src={img} alt='avatar' />
            </ImageWrapper>
        </Wrapper>
    </Container>
  )
}

export default About