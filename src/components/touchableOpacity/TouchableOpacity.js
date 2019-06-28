import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  transition: transform 200ms, opacity: 200ms;

  opacity: 1;
  transform: scale(1, 1);

  &:active {
    transform: scale(0.98, 0.98);
    opacity: .8;
  }
`;

export default Button;
