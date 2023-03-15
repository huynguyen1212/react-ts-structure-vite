import styled from "styled-components";

export default function InputCheckBox({
  onChange,
  active,
}: {
  onChange: () => void;
  active: boolean;
}) {
  return (
    <SInputCheckBox>
      <input
        type="checkbox"
        checked={active ? true : false}
        onChange={onChange}
      />
      <span className="checkmark"></span>
    </SInputCheckBox>
  );
}

const SInputCheckBox = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  min-width: 16px;
  min-height: 16px;
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    left: 0;
    top: 0;
    height: 16px;
    width: 16px;
    border: 2px solid #c1c3c5;
    border-radius: 3px;
  }

  /* &:hover input ~ .checkmark {
    background-color: #ccc;
  } */

  input:checked ~ .checkmark {
    border: unset;
    background: #1f9bf7;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid #102136;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
