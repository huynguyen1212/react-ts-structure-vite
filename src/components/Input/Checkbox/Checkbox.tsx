import theme from 'src/styles/theme';
import styled from 'styled-components';

const Checkbox = styled.input.attrs((props: any) => ({ type: 'checkbox' }))`
  position: relative;
  transition: all 0.25s ease;
  width: 30px;
  height: 15px;
  cursor: pointer;

  &::after,
  &::before {
    position: absolute;
    content: '';
    transition: all 0.35s ease;
  }

  &::before {
    width: 100%;
    height: 100%;
    background-color: ${theme.color.gray};
    border-radius: 25px;
    box-shadow: #fff 0 0 0 10px;
  }

  &::after {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${theme.color.white};
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:checked {
    &::before {
      background-color: ${theme.color.green};
    }
    &::after {
      right: 3px;
      left: unset;
    }
  }
`;


export default Checkbox;
