import React from 'react';
import styled from 'styled-components';
import { projectsData } from './ProjectsData';

const Container = styled.div`
  background: #07100F;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

 @media screen and (max-width: 1000px){
    padding: 0 20px;
  }
`
const Card = styled.div`
background: #07100F;
display: flex;
flex-direction: column;
margin: 0 20px 30px 20px;
align-items: center;
/* border-radius: 10px; */
max-height: 500px;
padding: 20px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease-in-out;
flex: 1 1 calc(33.33% - 40px);

  &:hover{
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

@media screen and(max-width: 768px){
  flex-basis: calc(50% - 20px);
  margin: 0 10px 30px 10px;
}
@media screen and(max-width: 480px){
  flex-basis: 100%;
  margin: 0 0 30px 0;
}
`
const Icon = styled.img`
    width: 90%;
    height: auto;
    margin-bottom: 20px;  
`
const Top = styled.h1`
  font-size: 2.5rem;
  color: #00b140;
  margin: 64px 0 32px ;

  @media screen and (max-width: 768px){
      font-size: 2.5rem;
  }
`
const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  text-align: center;
  color: #fff;
`
const Description = styled.p`
  /* margin-bottom: 20px; */
  text-align: center;
  font-size: 1em;
  line-height: calc(1ex / 0.32);
  margin: calc(0.5ex / 0.32) 0;
  color: #fff;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  background: #00b140;
  border: none;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  /* background: linear-gradient(135deg, #2cc8c0, #1fd313); */

    transition: all 0.4s ease-in-out;

     &:hover{
        transform: translateY(20%);
        color: #fff;
    }
`
const Projects = () => {
    const handleDemoClick = (url) =>{
      window.open(url, '_blank');
    };
    const handleGithubClick = (url) =>{
      window.open(url, '_blank');
    }
    return (
        <Container id='projects'>
          <Top>My Recent Works</Top>
          <Wrapper>
            {projectsData.map(project => (
              <Card key={project.id}>
                <Icon src={project.img} />
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <ButtonContainer>
                  <Button onClick={() => handleDemoClick(project.demoUrl)}>Demo</Button>
                  <Button onClick={() =>handleGithubClick(project.githubUrl)}>Github</Button>
                </ButtonContainer>
              </Card> 
            ))}
          </Wrapper>
        </Container>
    );
};

export default Projects;
