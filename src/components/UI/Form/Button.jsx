import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #fb1;
  border-radius: 0.4rem;
  border: none;
  box-sizing: border-box;
  color: #764701;
  min-width: 8rem;
  cursor: pointer;
  font-family: var(--type-first);
  font-size: 1rem;
  padding: 0.8rem 1.2rem;
  transition: 0.1s;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
  @media (max-width: 40rem) {
    width: 100%;
  }
`;

export default Button;
