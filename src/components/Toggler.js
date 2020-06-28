import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.buttonColor};
  border-radius: 0.5rem;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.3rem 0.6rem;
  }
`;

const toggleClick = (themeToggler, switchClick) => {
  return (e) => {
    e.preventDefault();
    themeToggler();
    switchClick(e);
  };
};
const Toggle = ({ theme, themeToggler, innerText, switchClick }) => {
  return <Button onClick={toggleClick(themeToggler, switchClick)}>{innerText}</Button>;
};
Toggle.propTypes = {
  theme: string.isRequired,
  themeToggler: func.isRequired,
};
export default Toggle;
