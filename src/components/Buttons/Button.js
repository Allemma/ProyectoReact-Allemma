import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;   
  color: #ffffff;
 
  &.disabled {
    background-color: #202c41;
  }
`;

export default function Button({ text }) {
  return <ButtonStyled className="disabled">{text}</ButtonStyled>;
}