import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { mixinsFlexCenter } from 'src/styles/mixins';
import styled from 'styled-components';
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: ReactNode;
}
const Button: React.FC<IProps> = ({ text, ...rest }) => {
  return <SButton {...rest}>{text}</SButton>;
};

export default Button;

const SButton = styled.button`
  width: 100%;
  height: 38px;
  ${mixinsFlexCenter};
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid black;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
`;
