import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: #eee;
  transition: 0.2s;
  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background-color: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export default Input;
