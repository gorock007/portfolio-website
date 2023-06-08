import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaJs, FaBootstrap, FaNodeJs, FaCss3Alt, FaReact, FaObjectGroup, FaGripHorizontal, FaServer, FaDatabase, FaLink, FaJava, FaGit, FaFileCode, FaAndroid } from 'react-icons/fa';
import { SiVisualstudio, SiStyledcomponents, SiTailwindcss } from 'react-icons/si';

const Container = styled.div`
    background: #07100F;
    height: auto;
    min-height: 100vh;
    display: flex;
    
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        height: 1000px;
    }
    @media screen and (max-width: 480px){
        height: 1200px;
    }
`
const Wrapper = styled.div`
    max-width: 1100px;
`
const Top = styled.h1`
    font-size: 2.5rem;
    color: #00b140;
    margin-bottom: 10px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
const Subtitle = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #ffffff;
`
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const Icon = styled.div`
  font-size: 4rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
  display: inline-block;
  margin: 0 10px;
  transition: transform 0.3s ease-in-out;
   &:hover {
    transform: scale(1.2);
  }
`;

const SkillName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;
const SkillsData = [
    {
        icon: <FaHtml5 />,
        name: 'HTML5',
        color: '#F16529'
    },
    {
        icon: <FaCss3Alt />,
        name: 'CSS',
        color: '#1572B6'

    },
    {
        icon: <FaJs />,
        name: 'JavaScript',
        color: '#F7DF1E'
    },
    {
        icon: <SiTailwindcss/>,
        name: 'Tailwind CSS',
        color: '#38BDF8'
    },
    {
        icon: <FaBootstrap />,
        name: 'Bootstrap',
        color: '#563D7C'
    },
    {
        icon: <FaReact />,
        name: 'ReactJS',
        color: '#61DBFB'
    },
    {
        icon: <FaNodeJs />,
        name: 'NodeJS',
        color: '#68A063'
    },
    {
        icon: <FaDatabase />,
        name: 'MongoDB',
        color: '#4DB33D'
    },
    {
        icon: <FaLink />,
        name: 'APIs',
        color: '#3F3F3F'
    },
    {
        icon: <FaObjectGroup />,
        name: 'DOM',
        color: '#F16529'
    },
    {
        icon: <FaGripHorizontal />,
        name: 'Redux',
        color: '#764ABC'
    },
    {
        icon: <SiStyledcomponents />,
        name: 'Styled-Components',
        color: '#DB7093'
    },
    {
        icon: <FaServer />,
        name: 'Express',
        color: '#000000'
    },
    {
        icon: <FaJava />,
        name: 'Java',
        color: '#007396'
    },
    {
        icon: <FaGit />,
        name: 'Git',
        color: '#F05032'
    },
    {
        icon: <SiVisualstudio />,
        name: 'Visual Studio Code',
        color: '#007ACC'
    },
    {
        icon: <FaAndroid />,
        name: 'Android Studio',
        color: '#3DDC84'
    }
];

const Skills = () => {
    return (
        <Container id='skills'>
            <Top>Skills</Top>
            <Subtitle>My friends that help me bring ideas to life</Subtitle>
            <Wrapper>
                <SkillsContainer>
                    {SkillsData.map(skill => (
                        <Skill key={skill.name}>
                            <Icon className="icon-container" color={skill.color}>{skill.icon}</Icon>
                            <SkillName>{skill.name}</SkillName>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
};

export default Skills;
