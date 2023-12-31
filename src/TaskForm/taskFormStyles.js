// TaskFormStyles.js
import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 1rem;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledForm = styled.form`
background: white;
display: flex;
flex-direction: column;
padding: 1rem;
position: relative;
overflow: hidden;
width: 30rem;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 1rem;
  outline: none;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
