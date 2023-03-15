import React from "react";
import theme from "src/styles/theme";
import styled from "styled-components";

type Props = {
  onClick?: () => void;
  status?: boolean;
};

const CheckboxSmall = ({ status, onClick }: Props) => {
  return (
    <Styles onClick={onClick} className={status ? "active" : ""}>
      <svg
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.71715 5.88216L0.117152 3.26721C-0.0390508 3.11011 -0.0390508 2.85539 0.117152 2.69827L0.682825 2.12933C0.839028 1.97221 1.09231 1.97221 1.24851 2.12933L3 3.89087L6.75149 0.117826C6.90769 -0.0392753 7.16097 -0.0392753 7.31718 0.117826L7.88285 0.686767C8.03905 0.843868 8.03905 1.09859 7.88285 1.25571L3.28284 5.88218C3.12662 6.03928 2.87336 6.03928 2.71715 5.88216Z"
          fill="#0075FF"
        />
      </svg>
    </Styles>
  );
};
export default CheckboxSmall;

export const Styles = styled.span`
  border: 1px solid ${theme.color.body};
  display: inline-block;
  box-sizing: border-box;
  border-radius: 2px;
  width: 12px;
  height: 12px;
  position: relative;
  &.active {
    border: 1px solid ${theme.color.button_hover__color};
    svg {
      display: block;
    }
  }
  svg {
    position: absolute;
    display: none;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
