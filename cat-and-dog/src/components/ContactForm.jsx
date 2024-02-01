import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = ({ onClose }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    // Close the form
    onClose();
  };


  return (
    <FormContainer>
      <CloseButton onClick={onClose}>x</CloseButton>
      <FormTitle>Contact</FormTitle>
      <Form onSubmit={handleSubmit}>
        <InputLabel>Name:</InputLabel>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <InputLabel>Email:</InputLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <InputLabel>Message:</InputLabel>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.div`
  background-color: #FCEBE5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 495px; 
  height: 405px; 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const FormTitle = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-top: 10px;
`;

const Input = styled.input`
  margin-top : 10px;
  margin-bottom: 15px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const Textarea = styled.textarea`
  margin-top : 10px;
  margin-bottom: 15px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const SubmitButton = styled.button`
  background-color: Black;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 20px;
  ${'' /* width : 100px; */}
  cursor: pointer;
  &:hover {
    background-color: white;
    color : black;
    border : 1px solid black;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: Black;
  border: none;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    color: white; // Change color on hover if desired
    background-color: black;
  }
`;