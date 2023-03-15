/**
 *
 * Input
 * make by huynq
 */

import Checkbox from './Checkbox/Checkbox';
import Select from './Select/Select';
import * as SelectBase from './Select/SelectBase';

import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  ref?: any;
}

const Input: React.FC<IProps> = ({ name, label, ref, ...rest }) => {
  return (
    <SInput>
      {label && <label htmlFor={name}>{label}</label>}
      <input type="text" id={name} ref={ref} {...rest} />
    </SInput>
  );
};

export const SInput = styled.div`
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: block;
  }
  input {
    width: 100%;
    height: 34px;
    border-radius: 3px;
    border: solid 1px #ccc;
    padding: 0 5px;
    outline: none;
    max-width: 100%;
  }
`;

export { Checkbox, Select, SelectBase };

export default Input;
