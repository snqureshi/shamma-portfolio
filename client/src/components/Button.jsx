import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? "5px 10px" : "8px 15px")};
  border-radius: 10px;
  background-color: #9a8c98;
  color: #fff;
  font-weight: bold;
  font-size: ${({ small }) => (small ? "14px" : "18px")};
  outline: none;
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 2px solid #9a8c98;
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
