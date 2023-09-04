import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.div`
  background-color: #0B0B0B;
  color: #fff;
  padding: 2rem;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
    margin: 0 auto;

`;

const Address = styled.address`
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  a {
    margin-right: 1rem;
    color: #fff;
    font-size: 1.2rem;

    &:hover {
      color: #00b140;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #61dbfb;
    box-shadow: 0 0 0 2px #61dbfb33;
  }

  @media (min-width: 768px) {
    width: auto;
    margin-bottom: 0;
  }
`;

const TextArea = styled.textarea`
  border: 2px solid #ddd;
  padding: 0.5rem;
  width: 100%;
  height: 2rem;
  resize: none;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #61dbfb;
    box-shadow: 0 0 0 2px #61dbfb33;
  }

  @media (min-width: 768px) {
    width: auto;
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  background-color: #00b140;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
const Copyright = styled.footer`
    font-size: 12px;
    color: #fff;
    margin-top: 20px;
    
    text-align: center;
`

const Footer = () => {
    return (
        <FooterContainer id='contact'>
            <FooterWrapper>
                <div>
                    <Address>
                        9 Maple Tree Road, Westmead<br />
                        Sydney, Australia<br />
                        +61 404781370
                    </Address>
                    <SocialLinks>
                        <a href="mailto:gorock397@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                        <a href="https://x.com/gorock_bits" target="_blank" ><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/gorakhshetty/" target="_blank"><FaLinkedinIn /></a>
                        <a href="https://github.com/gorock007/" target="_blank"> <FaGithub /></a>
                    </SocialLinks>
                </div>
                <Form>
                    <FormGroup>
                        <Label htmlFor="name">Name:</Label>
                        <Input type="text" id="name" required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="email">Email:</Label>
                        <Input type="email" id="email" required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="message">Message:</Label>
                        <TextArea id="message" required></TextArea>
                    </FormGroup>

                    <Button type="submit">Submit</Button>
                </Form>
            </FooterWrapper>
            <Copyright>
                Gorock Shetty. <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
