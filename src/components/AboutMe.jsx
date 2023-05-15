import React from 'react'
import styled, {keyframes} from 'styled-components'
import img from '../images/profile3.jpg'
import pdf from '../assets/Gorakh Resume.pdf'

const rotate = keyframes`
    fom{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`
const wave = keyframes`
    0%{
        transform: rotate(0deg);
    }
    10%{
        transform: rotate(14deg);
    }
    20%{
        transform: rotate(-8deg);
    }
    30%{
        transform: rotate(14deg);
    }
    40%{
        transform: rotate(-4deg);
    }
    50%{
        transform: rotate(10deg);
    }
`
const Container = styled.div`
    background: #07100F;
    height: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    margin: 0 auto;
`
const Wrapper = styled.section`
    min-height: 100vh;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10rem 0 5rem 0;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`
const ImageWrapper = styled.div`
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2.5rem;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);

    @media screen and (max-width: 768px){
        margin-bottom: 2rem;
    }
      &::before {
        content: '';
        height: 100%;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        animation: ${rotate} 2s linear infinite;
        background: linear-gradient(135deg, #2cc8c0, #1fd313);
        z-index: -1;
    }
`
const Image = styled.img`
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
`
const AboutContent = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    color: #fff;

    p{
        font-size: 1.5em;
        text-align: justify;
        margin-bottom: 1.5rem;
        line-height: calc(1ex / 0.32);
        margin: calc(0.5ex / 0.32) 0;

        @media screen and (max-width: 768px){
            font-size: 1em;
            line-height: calc(1ex / 0.32);
            margin: calc(0.5ex / 0.32) 0;
        }
    }
`
const WavingHand = styled.span`
    display: inline-block;
    animation: ${wave} 3s infinite;
    background: #00b140;
    background-clip: text;
    background-clip: unset;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.4));
`;
const Top = styled.div`
    font-size: 2.8rem;
    margin-bottom: 20px;
    /* color: #fff; */
    @media screen and (max-width: 768px){
        font-size: 2em; 
        line-height: calc(1ex / 0.32);
        margin: calc(0.5ex / 0.32) 0;
    }
`
const Button= styled.a`
    margin-top: 50px;
    color: #fff;
    padding: 16px 64px;
    border: none;
    outline: none;
    text-decoration: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    align-items: center;
    box-shadow: 0px 5px 30px rgba(0, 100, 148, 0.3);
    /* background: linear-gradient(135deg, #2cc8c0, #1fd313); */
    background: #00b140;
    transition: all 0.4s ease-in-out;
     &:hover{
        transform: translateY(20%);
        color: #fff;
    }
`
const Hr = styled.hr`
  height: 1px;
  border: none;
  background-color: #ccc;
 margin-bottom: 20px;
`;

const AboutMe = () => {
  return (
    <Container id='about'>
        <Wrapper>
            <ImageWrapper>
                <Image src={img} alt='Gorock Shetty'/>
            </ImageWrapper>
            <AboutContent>
                <Top>
                    Hi There <WavingHand>👋</WavingHand>
                </Top>
                <p>A Tech enthusiast and Junior Software Developer with experience in front-end and back-end development. Has a strong portfolio demonstrating experience in building React apps and working with APIs.</p>
                <p>I develop full-blown web applications using the MERN Stack, but I mostly love working with APIs and on the front-end using CSS and React.</p>
                <p>I enjoy collaborating with other developers and stakeholders to understand their needs and translate them into software solutions that exceed expectations.</p>
                <Button href={pdf} download>
                    Download Resume
                </Button>        
            </AboutContent>
              <Hr />
        </Wrapper>
    </Container>
  )
}

export default AboutMe